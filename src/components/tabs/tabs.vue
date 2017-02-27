<template>
    <div :class="classes">
        <div :class="[prefixCls + '-bar']">
            <div :class="[prefixCls + '-nav-container']">
                <div :class="[prefixCls + '-nav-wrap']">
                    <div :class="[prefixCls + '-nav-scroll']">
                        <div :class="[prefixCls + '-nav']" ref="nav">
                            <div :class="barClasses" :style="barStyle"></div>
                            <div :class="tabCls(item)" v-for="(item, index) in navList" @click="handleChange(index)">
                                <Icon v-if="item.icon !== ''" :type="item.icon"></Icon>
                                {{ item.label }}
                                <Icon v-if="showClose(item)" type="ios-close-empty" @click.stop.native="handleRemove(index)"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="contentClasses" :style="contentStyle"><slot></slot></div>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import { oneOf, getStyle } from '../../utils/assist';

    const prefixCls = 'ivu-tabs';

    export default {
        components: { Icon },
        props: {
            activeKey: {
                type: [String, Number]
            },
            type: {
                validator (value) {
                    return oneOf(value, ['line', 'card']);
                },
                default: 'line'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'default']);
                },
                default: 'default'
            },
            animated: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                navList: [],
                barWidth: 0,
                barOffset: 0,
                propActiveKey: ''
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-card`]: this.type === 'card',
                        [`${prefixCls}-mini`]: this.size === 'small' && this.type === 'line',
                        [`${prefixCls}-no-animation`]: !this.animated
                    }
                ];
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-animated`]: this.animated
                    }
                ];
            },
            barClasses () {
                return [
                    `${prefixCls}-ink-bar`,
                    {
                        [`${prefixCls}-ink-bar-animated`]: this.animated
                    }
                ];
            },
            contentStyle () {
                const x = this.navList.findIndex((nav) => nav.ikey === this.propActiveKey);
                const p = x === 0 ? '0%' : `-${x}00%`;

                let style = {};
                if (x > -1) {
                    style = {
                        transform: `translateX(${p}) translateZ(0px)`
                    };
                }
                return style;
            },
            barStyle () {
                let style = {
                    display: 'none',
                    width: `${this.barWidth}px`
                };
                if (this.type === 'line') style.display = 'block';
                if (this.animated) {
                    style.transform = `translate3d(${this.barOffset}px, 0px, 0px)`;
                } else {
                    style.left = `${this.barOffset}px`;
                }

                return style;
            }
        },
        methods: {
            getTabs () {
                return this.$children.filter(item => item.$options.name === 'TabPane');
            },
            updateNav () {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    this.navList.push({
                        label: pane.label,
                        icon: pane.icon || '',
                        ikey: pane.ikey || index,
                        disabled: pane.disabled,
                        closable: pane.closable
                    });
                    if (!pane.ikey) pane.ikey = index;
                    if (index === 0) {
                        if (!this.propActiveKey) this.propActiveKey = pane.ikey || index;
                    }
                });
                this.updateStatus();
                this.updateBar();
            },
            updateBar () {
                this.$nextTick(() => {
                    const index = this.navList.findIndex((nav) => nav.ikey === this.propActiveKey);
                    const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                    const tab = prevTabs[index];
                    this.barWidth = parseFloat(getStyle(tab, 'width'));

                    if (index > 0) {
                        let offset = 0;
                        const gutter = this.size === 'small' ? 0 : 16;
                        for (let i = 0; i < index; i++) {
                            offset += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                        }

                        this.barOffset = offset;
                    } else {
                        this.barOffset = 0;
                    }
                });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.ikey === this.propActiveKey) || this.animated);
            },
            tabCls (item) {
                return [
                    `${prefixCls}-tab`,
                    {
                        [`${prefixCls}-tab-disabled`]: item.disabled,
                        [`${prefixCls}-tab-active`]: item.key === this.propActiveKey
                    }
                ];
            },
            handleChange (index) {
                const nav = this.navList[index];
                if (nav.disabled) return;
                this.propActiveKey = nav.ikey;
                this.$emit('on-click', nav.ikey);
            },
            handleRemove (index) {
                const tabs = this.getTabs();
                const tab = tabs[index];
                tab.$destroy(true);

                if (tab.ikey === this.propActiveKey) {
                    const newTabs = this.getTabs();
                    let activeKey = -1;

                    if (newTabs.length) {
                        const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index);
                        const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index);

                        if (rightNoDisabledTabs.length) {
                            activeKey = rightNoDisabledTabs[0].key;
                        } else if (leftNoDisabledTabs.length) {
                            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].key;
                        } else {
                            activeKey = newTabs[0].key;
                        }
                    }
                    this.propActiveKey = activeKey;
                }
                this.$emit('on-tab-remove', tab.ikey);
                this.updateNav();
            },
            showClose (item) {
                if (this.type === 'card') {
                    if (item.closable !== null) {
                        return item.closable;
                    } else {
                        return this.closable;
                    }
                } else {
                    return false;
                }
            }
        },
        watch: {
            activeKey (val) {
                this.propActiveKey = val;

            },
            propActiveKey () {
                this.updateBar();
                this.updateStatus();
                // @todo 通知父组件
            }
        }
    };
</script>
