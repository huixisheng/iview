<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-checkbox-group';

    export default {
        name: 'checkboxGroup',
        props: {
            model: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data () {
            return {
                propModel: []
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        mounted () {
            this.propModel = this.model;
            this.updateModel(true);
        },
        methods: {
            updateModel (update) {
                const model = this.propModel;

                this.$children.forEach((child) => {
                    child.model = model;

                    if (update) {
                        child.selected = model.indexOf(child.value) >= 0;
                        child.group = true;
                    }
                });
            },
            change (data) {
                this.propModel = data;
                this.$emit('on-change', data);
                this.$emit('on-form-change', data);
            }
        },
        watch: {
           model (val) {
                this.propModel = val;
            },
            propModel () {
                this.updateModel(true);
            }
        }
    };
</script>
