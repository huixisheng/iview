<template>
<!-- <div> -->
    <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
        <Casitem
            v-for="item in data"
            :prefix-cls="prefixCls"
            :data="item"
            :tmp-item="tmpItem"
            @click.native.stop="handleClickItem(item)"
            @mouseenter.native.stop="handleHoverItem(item)"></Casitem>
    </ul><Caspanel v-else-if="sublist && sublist.length" :prefix-cls="prefixCls" :data="sublist" :disabled="disabled" :trigger="trigger" :change-on-select="changeOnSelect"></Caspanel>
<!-- </div> -->
</template>
<script>
    import Casitem from './casitem.vue';

    export default {
        name: 'Caspanel',
        components: { Casitem },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            // sublist: {
            //     type: Array,
            //     default () {
            //         return [];
            //     }
            // },
            disabled: Boolean,
            changeOnSelect: Boolean,
            trigger: String,
            prefixCls: String
        },
        data () {
            return {
                tmpItem: {},
                result: [],
                sublist: []
            };
        },
        methods: {
            handleClickItem (item) {
                if (this.trigger !== 'click' && item.children) return;
                this.handleTriggerItem(item);
            },
            handleHoverItem (item) {
                if (this.trigger !== 'hover' || !item.children) return;
                this.handleTriggerItem(item);
            },
            handleTriggerItem (item, fromInit = false) {
                if (item.disabled) return;

                // return value back recursion
                const backItem = this.getBaseItem(item);
                this.tmpItem = backItem;
                this.emitUpdate([backItem]);
                if (item.children && item.children.length){
                    this.sublist = item.children;
                    this.$parent.$parent.$emit('on-result-change', false, this.changeOnSelect, fromInit);
                    // this.$dispatch('on-result-change', false, this.changeOnSelect, fromInit);
                } else {
                    this.sublist = [];
                    this.$parent.$parent.$emit('on-result-change', false, this.changeOnSelect, fromInit);
                    // this.$dispatch('on-result-change', true, this.changeOnSelect, fromInit);
                }
            },
            updateResult (item) {
                this.result = [this.tmpItem].concat(item);
                this.emitUpdate(this.result);
            },
            getBaseItem (item) {
                let backItem = Object.assign({}, item);
                if (backItem.children) {
                    delete backItem.children;
                }

                return backItem;
            },
            emitUpdate (result) {
                if (this.$parent.$options.name === 'Caspanel') {
                    this.$parent.updateResult(result);
                } else {
                    this.$parent.$parent.updateResult(result);
                }
            }
        },
        watch: {
            data () {
                this.sublist = [];
            }
        },
        mounted () {
            this.$on('on-find-selected', function (val) {
                let value = [...val];
                for (let i = 0; i < value.length; i++) {
                    for (let j = 0; j < this.data.length; j++) {
                        if (value[i] === this.data[j].value) {
                            this.handleTriggerItem(this.data[j], true);
                            value.splice(0, 1);
                            this.$nextTick(() => {
                                this.$broadcast('on-find-selected', value);
                            });
                            return false;
                        }
                    }
                }
            });
            this.$on('on-clear', function () {
                this.sublist = [];
                this.tmpItem = {};
            })
        },
        events: {
            // 'on-find-selected' (val) {
            //     let value = [...val];
            //     for (let i = 0; i < value.length; i++) {
            //         for (let j = 0; j < this.data.length; j++) {
            //             if (value[i] === this.data[j].value) {
            //                 this.handleTriggerItem(this.data[j], true);
            //                 value.splice(0, 1);
            //                 this.$nextTick(() => {
            //                     this.$broadcast('on-find-selected', value);
            //                 });
            //                 return false;
            //             }
            //         }
            //     }
            // },
            // 'on-clear' () {
            //     this.sublist = [];
            //     this.tmpItem = {};
            // }
        }
    };
</script>
