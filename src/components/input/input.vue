<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady" ref="prepend"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon']" v-if="icon" @click="handleIconClick"></i>
            <i class="ivu-icon ivu-icon-load-c ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-else transition="fade"></i>
            <input
                type="text"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                v-model="propValue"
                :number="number"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange" v-if="type === 'text'">
            <input
                type="password"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="disabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                v-model="propValue"
                :number="number"
                @keyup.enter="handleEnter"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange" v-if="type === 'password'">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady" ref="append"><slot name="append"></slot></div>
        </template>
        <textarea
            v-else
            ref="textarea"
            :class="textareaClasses"
            :style="textareaStyles"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            :maxlength="maxlength"
            :readonly="readonly"
            :name="name"
            v-model="propValue"
            @keyup.enter="handleEnter"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange">
        </textarea>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import calcTextareaHeight from '../../utils/calcTextareaHeight';

    const prefixCls = 'ivu-input';

    export default {
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password']);
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: '',
               // twoWay: true
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                prepend: true,
                append: true,
                slotReady: false,
                textareaStyles: {},
                propValue: ''
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type`]: this.type,
                        [`${prefixCls}-group`]: this.prepend || this.append,
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append) && !!this.size
                    }
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            }
        },
        methods: {
            handleEnter () {
                this.$emit('on-enter');
            },
            handleIconClick () {
                this.$emit('on-click');
            },
            handleFocus () {
                this.$emit('on-focus');
            },
            handleBlur () {
                this.$emit('on-blur');
                // @todo
                this.$on('on-form-blur', this.propValue);
                // this.$dispatch('on-form-blur', this.value);
            },
            handleChange (event) {
                this.$emit('on-change', event);
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            init () {
                if (this.type !== 'textarea') {
                    this.prepend = this.$refs.prepend.innerHTML !== '';
                    this.append = this.$refs.append.innerHTML !== '';
                } else {
                    this.prepend = false;
                    this.append = false;
                }
                this.slotReady = true;
                this.resizeTextarea();
            }
        },
        watch: {
            value (val) {
                this.propValue = val;
                // this.$dispatch('on-form-change', this.value);
            },
            propValue () {
                this.$emit('on-form-change', this.propValue);
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
            }
        },
        mounted () {
            this.$nextTick(() => this.init());
        }
    };
</script>
