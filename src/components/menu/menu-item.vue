<template>
    <li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>
<script>
    const prefixCls = 'ivu-menu';

    export default {
        name: 'MenuItem',
        props: {
            ikey: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false,
                // key: ''
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                if (this.disabled) return;
                let parent = this.$parent;
                while (parent) {
                    parent.$emit('on-menu-item-select', this.ikey);
                    parent = parent.$parent;
                }
                // @todo $dispatch
                // this.$parent.$emit('on-menu-item-select', this.ikey);
            }
        }
    };
</script>
