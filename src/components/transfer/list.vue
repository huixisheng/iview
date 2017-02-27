<template>
    <div :class="classes" :style="style">
        <div :class="prefixCls + '-header'">
            <Checkbox :checked="checkedAll" :disabled="checkedAllDisabled" @on-change="toggleSelectAll"></Checkbox>
            <span>{{ title }}</span>
            <span :class="prefixCls + '-header-count'">{{ count }}</span>
        </div>
        <div :class="bodyClasses">
            <div :class="prefixCls + '-body-search-wrapper'" v-if="filterable">
                <Search
                    :prefix-cls="prefixCls + '-search'"
                    :query="query"
                    :placeholder="filterPlaceholder"></Search>
            </div>
            <!--
                https://cn.vuejs.org/v2/guide/migration.html#插入文本之外的过滤器-移除
                @todo v-for="item in showItems | filterBy filterData"
            -->
            <ul :class="prefixCls + '-content'">
                <li
                    v-for="item in filterByData"
                    :class="itemClasses(item)"
                    @click.prevent="select(item)">
                    <Checkbox :checked="isCheck(item)" :disabled="item.disabled"></Checkbox>
                    <span v-html="showLabel(item)"></span>
                </li>
                <li :class="prefixCls + '-content-not-found'">{{ notFoundText }}</li>
            </ul>
        </div>
        <div :class="prefixCls + '-footer'" v-if="showFooter" ref="footer"><slot></slot></div>
    </div>
</template>
<script>
    import Search from './search.vue';
    import Checkbox from '../checkbox/checkbox.vue';

    export default {
        components: { Search, Checkbox },
        props: {
            type: String,
            prefixCls: String,
            data: Array,
            renderFormat: Function,
            checkedKeys: Array,
            style: Object,
            title: [String, Number],
            filterable: Boolean,
            filterPlaceholder: String,
            filterMethod: Function,
            notFoundText: String,
            validKeysCount: Number
        },
        data () {
            return {
                showItems: [],
                query: '',
                showFooter: true,
                propCheckedKeys: []
            };
        },
        computed: {
            filterByData () {
                var self = this;
                var query = self.query;
                return self.showItems.filter(function (item) {
                    const type = ('label' in item) ? 'label' : 'key';
                    return item[type].indexOf(query) > -1;
                });
                // return this.filterMethod(this.showItems, this.query);
            },
            classes () {
                return [
                    `${this.prefixCls}`,
                    {
                        [`${this.prefixCls}-with-footer`]: this.showFooter
                    }
                ];
            },
            bodyClasses () {
                return [
                    `${this.prefixCls}-body`,
                    {
                        [`${this.prefixCls}-body-with-search`]: this.filterable,
                        [`${this.prefixCls}-body-with-footer`]: this.showFooter
                    }
                ];
            },
            count () {
                const validKeysCount = this.validKeysCount;
                return (validKeysCount > 0 ? `${validKeysCount}/` : '') + `${this.data.length}`;
            },
            checkedAll () {
                return this.data.filter(data => !data.disabled).length === this.validKeysCount && this.validKeysCount !== 0;
            },
            checkedAllDisabled () {
                return this.data.filter(data => !data.disabled).length <= 0;
            }
        },
        methods: {
            itemClasses (item) {
                return [
                    `${this.prefixCls}-content-item`,
                    {
                        [`${this.prefixCls}-content-item-disabled`]: item.disabled
                    }
                ];
            },
            showLabel (item) {
                return this.renderFormat(item);
            },
            isCheck (item) {
                var result = this.propCheckedKeys.some(key => key === item.key);
                console.log(this.propCheckedKeys);
                console.log(result);
                return result;
            },
            select (item) {
                if (item.disabled) return;
                const index = this.propCheckedKeys.indexOf(item.key);
                index > -1 ? this.propCheckedKeys.splice(index, 1) : this.propCheckedKeys.push(item.key);
            },
            updateFilteredData () {
                this.showItems = this.data;
                console.log(this.propCheckedKeys);
                console.log(JSON.stringify(this.data));
            },
            toggleSelectAll (status) {
                this.propCheckedKeys = status ?
                        this.data.filter(data => !data.disabled || this.propCheckedKeys.indexOf(data.key) > -1).map(data => data.key) :
                        this.data.filter(data => data.disabled && this.propCheckedKeys.indexOf(data.key) > -1).map(data => data.key);
                console.log(JSON.stringify(this.data));
                console.log(this.propCheckedKeys);
            },
            filterData (value) {
                return this.filterMethod(value, this.query);
            }
        },
        created () {
            this.updateFilteredData();
        },
        mounted () {
            this.$on('prop-change-query', function (val) {
                this.query = val;
            });
            if (this.$refs.footer) {
                this.showFooter = this.$refs.footer.innerHTML !== '';
            }
            if (Array.isArray(this.checkedKeys)) {
                this.propCheckedKeys = this.checkedKeys;
            }
        },
        watch: {
            data () {
                this.updateFilteredData();
            },
            propCheckedKeys (val) {
                this.$parent.$emit('prop-change-checkedkey', val, this.type);
            }
        }
    };
</script>
