<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :value="value"
                v-model="model"
                @change="change">
            <input
                v-if="!group"
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                v-model="propChecked"
                @change="change">
        </span>
        <slot v-if="showSlot"><span ref="slot" v-text="propChecked"></span></slot>
    </label>
</template>
<script>
    const prefixCls = 'ivu-checkbox';

    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean]
            },
            checked: {
                type: Boolean,
                default: false
            },
            indeterminate: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                model: [],
                selected: false,
                group: false,
                showSlot: false,
                propChecked: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.selected,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.selected,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            if (this.$parent && this.$parent.$options.name === 'checkboxGroup') this.group = true;
            if (!this.group) {
                this.updateModel();
                if (this.$refs.slot && this.$refs.slot.innerHTML === '') {
                    this.showSlot = false;
                }
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }

                this.selected = event.target.checked;

                if (this.group) {
                    this.$parent.change(this.model);
                } else {
                    this.$emit('on-change', this.propChecked);
                    this.$emit('on-form-change', this.propChecked);
                }
            },
            updateModel () {
                this.selected = this.propChecked;
            }
        },
        watch: {
            checked (val) {
                this.propChecked = val;
            },
            propChecked () {
                this.updateModel();
                // @todo 通知 cheched
            }
        }
    };
</script>
