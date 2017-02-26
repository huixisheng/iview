<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div :class="[prefixCls + '-rel']" @click="toggleOpen">
            <slot>
                <i-input
                    readonly
                    :disabled="disabled"
                    :value="displayRender"
                    :size="size"
                    :placeholder="placeholder"></i-input>
                <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.stop="clearSelect"></Icon>
                <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
            </slot>
        </div>
        <transition name="slide-up">
            <Dropdown v-show="visible">
                <div>
                    <Caspanel
                        ref="caspanel"
                        :prefix-cls="prefixCls"
                        :data="data"
                        :disabled="disabled"
                        :change-on-select="changeOnSelect"
                        :trigger="trigger"></Caspanel>
                </div>
            </Dropdown>
        </transition>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';
    import Dropdown from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import Caspanel from './caspanel.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-cascader';

    export default {
        components: { iInput, Dropdown, Icon, Caspanel },
        directives: { clickoutside },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            value: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: true
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'click'
            },
            changeOnSelect: {
                type: Boolean,
                default: false
            },
            renderFormat: {
                type: Function,
                default (label) {
                    return label.join(' / ');
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false,
                selected: [],
                tmpSelected: [],
                updatingValue: false    // to fix set value in changeOnSelect type
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            showCloseIcon () {
                return this.value && this.value.length && this.clearable;
            },
            displayRender () {
                let label = [];
                for (let i = 0; i < this.selected.length; i++) {
                    label.push(this.selected[i].label);
                }

                return this.renderFormat(label, this.selected);
            }
        },
        methods: {
            clearSelect () {
                const oldVal = JSON.stringify(this.value);
                this.value = this.selected = this.tmpSelected = [];
                this.handleClose();
                this.emitValue(this.value, oldVal);
                // @todo broadcast
                this.$emit('on-clear');
            },
            handleClose () {
                this.visible = false;
            },
            toggleOpen () {
                if (this.visible) {
                    this.handleClose();
                } else {
                    this.onFocus();
                }
            },
            onFocus () {
                this.visible = true;
                if (!this.value.length) {
                    // @todo broadcast
                    this.$emit('on-clear');
                }
            },
            updateResult (result) {
                this.tmpSelected = result;
            },
            updateSelected (init = false) {
                if (!this.changeOnSelect || init) {
                    // @todo broadcast
                    this.$broadcast('on-find-selected', this.value);
                }
            },
            emitValue (val, oldVal) {
                if (JSON.stringify(val) !== oldVal) {
                    this.$emit('on-change', this.value, JSON.parse(JSON.stringify(this.selected)));
                    // @todo  $dispatch>$emit?
                    this.$emit('on-form-change', this.value, JSON.parse(JSON.stringify(this.selected)));
                }
            },
            onResultChange (lastValue, changeOnSelect, fromInit) {
                if (lastValue || changeOnSelect) {
                    const oldVal = JSON.stringify(this.value);
                    this.selected = this.tmpSelected;

                    let newVal = [];
                    this.selected.forEach((item) => {
                        newVal.push(item.value);
                    });

                    if (!fromInit) {
                        this.updatingValue = true;
                        this.value = newVal;
                        this.emitValue(this.value, oldVal);
                    }
                }
                if (lastValue && !fromInit) {
                    this.handleClose();
                }
            }
        },
        mounted () {
            this.updateSelected(true);
            // this.$on('on-result-change', function (argument) {
            //     debugger;
            // });
            this.$on('on-result-change', this.onResultChange);
        },
        events: {
            // lastValue: is click the final val
            // fromInit: is this emit from update value
            // 'on-result-change' (lastValue, changeOnSelect, fromInit) {
            //     if (lastValue || changeOnSelect) {
            //         const oldVal = JSON.stringify(this.value);
            //         this.selected = this.tmpSelected;

            //         let newVal = [];
            //         this.selected.forEach((item) => {
            //             newVal.push(item.value);
            //         });

            //         if (!fromInit) {
            //             this.updatingValue = true;
            //             this.value = newVal;
            //             this.emitValue(this.value, oldVal);
            //         }
            //     }
            //     if (lastValue && !fromInit) {
            //         this.handleClose();
            //     }
            // },
            'on-form-blur' () {
                return false;
            },
            'on-form-change' () {
                return false;
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    if (this.value.length) {
                        this.updateSelected();
                    }
                }
            },
            value () {
                if (this.updatingValue) {
                    this.updatingValue = false;
                    return;
                }
                this.updateSelected(true);
            }
        }
    };
</script>
