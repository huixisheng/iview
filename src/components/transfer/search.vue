<template>
    <div :class="prefixCls">
        <i-input
            @on-form-change="valueChange"
            :value="propQuery"
            size="small"
            :icon="icon"
            :placeholder="placeholder"
            @on-click="handleClick"></i-input>
    </div>
</template>
<script>
    import iInput from '../input/input.vue';

    export default {
        components: { iInput },
        props: {
            prefixCls: String,
            placeholder: String,
            query: String
        },
        data () {
            return {
                propQuery: ''
            }
        },
        computed: {
            icon () {
                return this.query === '' ? 'ios-search' : 'ios-close';
            }
        },
        methods: {
            handleClick () {
                if (this.query === '') return;
                this.query = '';
            },
            valueChange (val) {
                this.propQuery = val;
            }
        },
        watch: {
            propQuery (val) {
                // @todo
                this.$parent.$emit('prop-change-query', val);
            },
            query (val) {
                this.propQuery = val;
            }
        },
        events: {
            'on-form-blur' () {
                return false;
            },
            'on-form-change' () {
                return false;
            }
        }
    };
</script>
