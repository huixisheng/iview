<template>
    <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-menu';

    export default {
        props: {
            mode: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'vertical'
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            activeKey: {
                type: [String, Number]
            },
            openKeys: {
                type: Array,
                default () {
                    return [];
                }
            },
            accordion: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                propActiveKey : ''
            }
        },
        computed: {
            classes () {
                let theme = this.theme;
                if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

                return [
                    `${prefixCls}`,
                    `${prefixCls}-${theme}`,
                    {
                        [`${prefixCls}-${this.mode}`]: this.mode
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.mode === 'vertical') style.width = this.width;

                return style;
            }
        },
        methods: {
            updateActiveKey () {
                this.$children.forEach((item, index) => {
                    if (!this.propActiveKey && index === 0) {
                        this.propActiveKey = -1;
                    }
                    if (item.$options.name === 'Submenu') {
                        item.active = false;
                        item.$children.forEach(subitem => {
                            // @todo vue2.0 MenuGroup 属于 Drop
                            if (subitem.$options.name === 'Drop') {
                                subitem.$children.forEach(son => {
                                    if (son.$options.name === 'MenuGroup') {
                                        son.$children.forEach(groupItem => {
                                            if (groupItem.ikey === this.propActiveKey) {
                                                groupItem.active = true;
                                                groupItem.$parent.$parent.$parent.active = true;
                                            } else {
                                                groupItem.active = false;
                                            }
                                        });
                                    } else if (son.$options.name === 'MenuItem') {
                                        if (son.ikey === this.propActiveKey) {
                                            son.active = true;
                                            son.$parent.$parent.active = true;
                                        } else {
                                            son.active = false;
                                        }
                                    }
                                });
                            }
                        });
                    } else if (item.$options.name === 'MenuGroup') {
                        item.$children.forEach(groupItem => {
                            groupItem.active = groupItem.ikey === this.propActiveKey;
                        });
                    } else if (item.$options.name === 'MenuItem') {
                        item.active = item.ikey === this.propActiveKey;
                    }
                });
            },
            updateOpenKeys (key) {
                const index = this.openKeys.indexOf(key);
                if (index > -1) {
                    this.openKeys.splice(index, 1);
                } else {
                    this.openKeys.push(key);
                }
            },
            updateOpened () {
                this.$children.forEach(item => {
                    if (item.$options.name === 'Submenu') {
                        if (this.openKeys.indexOf(item.ikey) > -1) item.opened = true;
                    }
                });
            }
        },
        created () {
            this.propActiveKey = this.activeKey;
        },
        mounted () {
            this.updateActiveKey();
            this.updateOpened();
            this.$on('on-menu-item-select', function (key) {
                this.propActiveKey = key;
                this.$emit('on-select', key);
            });
        },
        // events: {
        //     'on-menu-item-select' (key) {
        //         this.propActiveKey = key;
        //         this.$emit('on-select', key);
        //     }
        // },
        watch: {
            openKeys () {
                this.$emit('on-open-change', this.openKeys);
            },
            activeKey (val) {
                this.propActiveKey = val;
                // this.updateActiveKey();
            },
            propActiveKey () {
                this.updateActiveKey();
            }
        }
    };
</script>
