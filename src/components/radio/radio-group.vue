<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-radio-group';

    export default {
        name: 'radioGroup',
        props: {
            model: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['button']);
                }
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                propModel: ''
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        },
        mounted () {
            this.propModel = this.model;
            this.updateModel();
        },
        methods: {
            updateModel () {
                const model = this.propModel;
                this.$children.forEach((child) => {
                    child.selected = model == child.value;
                    child.group = true;
                });
            },
            change (data) {
                this.propModel = data.value;
                this.updateModel();
                this.$emit('on-change', data.value);
                // $dispatch -> $emit
                this.$emit('on-form-change', data.value);
            }
        },
        watch: {
            model (val) {
                this.propModel = val;
            },
            propModel () {
                this.updateModel();
                this.$emit('prop-change-model', this.propModel);
            }
        }
    };
</script>
