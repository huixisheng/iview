<template>
    <div :class="prefixCls" v-show="show"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ivu-tabs-tabpane';

    export default {
        name: 'TabPane',
        props: {
            // ikey: {
            //     type: String
            // },
            label: {
                type: String,
                default: ''
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: null
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                show: true,
                ikey: ''
            };
        },
        methods: {
            updateNav () {
                this.$parent.updateNav();
            }
        },
        watch: {
            label () {
                this.updateNav();
            },
            icon () {
                this.updateNav();
            },
            disabled () {
                this.updateNav();
            }
        },
        mounted () {
            this.updateNav();
        }
    };
</script>
