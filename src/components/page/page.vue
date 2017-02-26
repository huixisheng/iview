<template>
<div>
    <ul :class="simpleWrapClasses" :style="style" v-if="simple">
        <li
            :title="t('i.page.prev')"
            :class="prevClasses"
            @click="prev">
            <a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a>
        </li>
        <div :class="simplePagerClasses" :title="propCurrent + '/' + allPages">
            <input
                type="text"
                :value="propCurrent"
                @keydown="keyDown"
                @keyup="keyUp"
                @change="keyUp">
            <span>/</span>
            {{ allPages }}
        </div>
        <li
            :title="t('i.page.next')"
            :class="nextClasses"
            @click="next">
            <a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a>
        </li>
    </ul>
    <ul :class="wrapClasses" :style="style" v-else>
        <span :class="[prefixCls + '-total']" v-if="showTotal">
            <slot>{{ t('i.page.total') }} {{ total }} <template v-if="total <= 1">{{ t('i.page.item') }}</template><template v-else>{{ t('i.page.items') }}</template></slot>
        </span>
        <li
            :title="t('i.page.prev')"
            :class="prevClasses"
            @click="prev">
            <a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a>
        </li>
        <li title="1" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
        <li :title="t('i.page.prev5')" v-if="propCurrent - 3 > 1" :class="[prefixCls + '-item-jump-prev']" @click="fastPrev"><a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a></li>
        <li :title="propCurrent - 2" v-if="propCurrent - 2 > 1" :class="[prefixCls + '-item']" @click="changePage(propCurrent - 2)"><a>{{ propCurrent - 2 }}</a></li>
        <li :title="propCurrent - 1" v-if="propCurrent - 1 > 1" :class="[prefixCls + '-item']" @click="changePage(propCurrent - 1)"><a>{{ propCurrent - 1 }}</a></li>
        <li :title="propCurrent" v-if="propCurrent != 1 && propCurrent != allPages" :class="[prefixCls + '-item',prefixCls + '-item-active']"><a>{{ propCurrent }}</a></li>
        <li :title="propCurrent + 1" v-if="propCurrent + 1 < allPages" :class="[prefixCls + '-item']" @click="changePage(propCurrent + 1)"><a>{{ propCurrent + 1 }}</a></li>
        <li :title="propCurrent + 2" v-if="propCurrent + 2 < allPages" :class="[prefixCls + '-item']" @click="changePage(propCurrent + 2)"><a>{{ propCurrent + 2 }}</a></li>
        <li :title="t('i.page.next5')" v-if="propCurrent + 3 < allPages" :class="[prefixCls + '-item-jump-next']" @click="fastNext"><a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a></li>
        <li :title="allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
        <li
            :title="t('i.page.next')"
            :class="nextClasses"
            @click="next">
            <a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a>
        </li>
        <Options
            :show-sizer="showSizer"
            :page-size="pageSize"
            :page-size-opts="pageSizeOpts"
            :show-elevator="showElevator"
            :_current="propCurrent"
            :current="propCurrent"
            :all-pages="allPages"
            :is-small="isSmall"
            @on-size="onSize"
            @on-page="onPage">
        </Options>
    </ul>
</div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import Options from './options.vue';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-page';

    export default {
        mixins: [ Locale ],
        components: { Options },
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageSizeOpts: {
                type: Array,
                default () {
                    return [10, 20, 30, 40];
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small']);
                }
            },
            simple: {
                type: Boolean,
                default: false
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            showElevator: {
                type: Boolean,
                default: false
            },
            showSizer: {
                type: Boolean,
                default: false
            },
            class: {
                type: String
            },
            style: {
                type: Object
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                propCurrent: 1
            };
        },
        computed: {
            isSmall () {
                return !!this.size;
            },
            allPages () {
                const allPage = Math.ceil(this.total / this.pageSize);
                return (allPage === 0) ? 1 : allPage;
            },
            simpleWrapClasses () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-simple`,
                    {
                        [`${this.class}`]: !!this.class
                    }
                ];
            },
            simplePagerClasses () {
                return `${prefixCls}-simple-pager`;
            },
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${this.class}`]: !!this.class,
                        'mini': !!this.size
                    }
                ];
            },
            prevClasses () {
                return [
                    `${prefixCls}-prev`,
                    {
                        [`${prefixCls}-disabled`]: this.propCurrent === 1
                    }
                ];
            },
            nextClasses () {
                return [
                    `${prefixCls}-next`,
                    {
                        [`${prefixCls}-disabled`]: this.propCurrent === this.allPages
                    }
                ];
            },
            firstPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.propCurrent === 1
                    }
                ];
            },
            lastPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.propCurrent === this.allPages
                    }
                ];
            }
        },
        mounted () {
            this.propCurrent = this.current;
            // debugger;
        },
        methods: {
            changePage (page) {
                if (this.propCurrent != page) {
                    this.propCurrent = page;
                    this.$emit('on-change', page);
                }
            },
            prev () {
                const current = this.propCurrent;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
            },
            next () {
                const current = this.propCurrent;
                if (current >= this.allPages) {
                    return false;
                }
                this.changePage(current + 1);
            },
            fastPrev () {
                const page = this.propCurrent - 5;
                if (page > 0) {
                    this.changePage(page);
                } else {
                    this.changePage(1);
                }
            },
            fastNext () {
                const page = this.propCurrent + 5;
                if (page > this.allPages) {
                    this.changePage(this.allPages);
                } else {
                    this.changePage(page);
                }
            },
            onSize (pageSize) {
                this.pageSize = pageSize;
                this.changePage(1);
                this.$emit('on-page-size-change', pageSize);
            },
            onPage (page) {
                this.changePage(page);
            },
            keyDown (e) {
                const key = e.keyCode;
                const condition = (key >= 48 && key <= 57) || key == 8 || key == 37 || key == 39;

                if (!condition) {
                    e.preventDefault();
                }
            },
            keyUp (e) {
                const key = e.keyCode;
                const val = parseInt(e.target.value);

                if (key === 38) {
                    this.prev();
                } else if (key === 40) {
                    this.next();
                } else if (key == 13) {
                    let page = 1;

                    if (val > this.allPages) {
                        page = this.allPages;
                    } else if (val <= 0) {
                        page = 1;
                    } else {
                        page = val;
                    }

                    e.target.value = page;
                    this.changePage(page);
                }
            }
        },
        watch: {
            current (val) {
                this.propCurrent = val;
            }
        }
    };
</script>
