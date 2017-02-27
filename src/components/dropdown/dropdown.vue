<template>
    <div
        :class="[prefixCls]"
        v-clickoutside="handleClose"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave">
        <div :class="[prefixCls]" ref="reference" @click="handleClick"><slot></slot></div>
        <Drop v-show="propVisible" :placement="placement" :transition="transition" ref="drop"><slot name="list"></slot></Drop>
    </div>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-dropdown';

    export default {
        name: 'Dropdown',
        directives: { clickoutside },
        components: { Drop },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover', 'custom']);
                },
                default: 'hover'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            transition () {
                return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                propVisible: false
            };
        },
        methods: {
            handleClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.propVisible = !this.propVisible;
            },
            handleMouseenter () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.propVisible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.propVisible = false;
                }, 150);
            },
            handleClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.propVisible = false;
            },
            hasParent () {
                const $parent = this.$parent.$parent;
                if ($parent && $parent.$options.name === 'Dropdown') {
                    return $parent;
                } else {
                    return false;
                }
            },
            onClick (key) {
                const $parent = this.hasParent();
                if ($parent ) $parent.$emit('on-click', key);
            },
            onHoverClick () {
                const $parent = this.hasParent();
                if ($parent) {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.propVisible = false;
                    });
                    $parent.$emit('on-hover-click');
                } else {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.propVisible = false;
                    });
                }
            },
            onHaschildClick () {
                this.$nextTick(() => {
                    if (this.trigger === 'custom') return false;
                    this.propVisible = true;
                });
                const $parent = this.hasParent();
                if ($parent) $parent.$emit('on-haschild-click');
            }
        },
        watch: {
            visible (val) {
                this.propVisible = val;
            },
            propVisible (val) {
                if (val) {
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
                this.$emit('on-visible-change', val);
            }
        },
        mounted () {
            // @todo 验证
            this.$on('on-click', this.onClick);
            this.$on('on-hover-click', this.onHoverClick);
            this.$on('on-haschild-click', this.onHaschildClick);
        }
    };
</script>
