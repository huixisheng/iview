<template>
    <div :class="classes" v-clickoutside="handleClose">
        <div
            :class="[prefixCls + '-selection']"
            ref="reference"
            @click="toggleMenu">
            <div class="ivu-tag" v-for="(item, index) in selectedMultiple">
                <span class="ivu-tag-text">{{ item.label }}</span>
                <Icon type="ios-close-empty" @click.stop="removeTag(index)"></Icon>
            </div>
            <span :class="[prefixCls + '-placeholder']" v-show="showPlaceholder && !filterable">{{ placeholder }}</span>
            <span :class="[prefixCls + '-selected-value']" v-show="!showPlaceholder && !multiple && !filterable">{{ selectedSingle }}</span>
            <input
                type="text"
                v-if="filterable"
                v-model="query"
                :class="[prefixCls + '-input']"
                :placeholder="showPlaceholder ? placeholder : ''"
                :style="inputStyle"
                @blur="handleBlur"
                @keydown="resetInputState"
                @keydown.delete="handleInputDelete"
                ref="input">
            <Icon type="ios-close" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.stop="clearSingleSelect"></Icon>
            <Icon type="arrow-down-b" :class="[prefixCls + '-arrow']"></Icon>
        </div>
        <transition name="slide-up">
            <Dropdown v-show="visible" ref="dropdown">
                <ul v-if="notFound"  :class="[prefixCls + '-not-found']"><li>{{ notFoundText }}</li></ul>
                <ul v-else v-show="!notFound" :class="[prefixCls + '-dropdown-list']" ref="options"><slot></slot></ul>
            </Dropdown>
        </transition>
    </div>
</template>
<script>
    import Icon from '../icon';
    import Dropdown from './dropdown.vue';
    import clickoutside from '../../directives/clickoutside';
    import { oneOf, MutationObserver } from '../../utils/assist';
    import { t } from '../../locale';
    const prefixCls = 'ivu-select';

    export default {
        name: 'iSelect',
        components: { Icon, Dropdown },
        directives: { clickoutside },
        props: {
            model: {
                type: [String, Number, Array],
                default: ''
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default () {
                    return t('i.select.placeholder');
                }
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterMethod: {
                type: Function
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            labelInValue: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String,
                default () {
                    return t('i.select.noMatch');
                }
            }
        },
        data () {
            return {
                propModel: '',
                prefixCls: prefixCls,
                visible: false,
                options: [],
                optionInstances: [],
                selectedSingle: '',    // label
                selectedMultiple: [],
                focusIndex: 0,
                query: '',
                inputLength: 20,
                notFound: false,
                slotChangeDuration: false    // if slot change duration and in multiple, set true and after slot change, set false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-multiple`]: this.multiple,
                        [`${prefixCls}-single`]: !this.multiple,
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            showPlaceholder () {
                let status = false;

                if ((typeof this.propModel) === 'string') {
                    if (this.propModel === '') {
                        status = true;
                    }
                } else if (Array.isArray(this.propModel)) {
                    if (!this.propModel.length) {
                        status = true;
                    }
                }

                return status;
            },
            showCloseIcon () {
                return !this.multiple && this.clearable && !this.showPlaceholder;
            },
            inputStyle () {
                let style = {};

                if (this.multiple) {
                    if (this.showPlaceholder) {
                        style.width = '100%';
                    } else {
                        style.width = `${this.inputLength}px`;
                    }
                }

                return style;
            }
        },
        methods: {
            toggleMenu () {
                if (this.disabled) {
                    return false;
                }

                this.visible = !this.visible;
            },
            hideMenu () {
                this.visible = false;
                this.focusIndex = 0;
                // @todo
                this.$emit('on-select-close');
            },
            // find option component
            findChild (cb) {
                const find = function (child) {
                    const name = child.$options.componentName;

                    if (name) {
                        cb(child);
                    } else if (child.$children.length) {
                        child.$children.forEach((innerChild) => {
                            find(innerChild, cb);
                        });
                    }
                };

                if (this.optionInstances.length) {
                    this.optionInstances.forEach((child) => {
                        find(child);
                    });
                } else {
                    this.$children.forEach((child) => {
                        find(child);
                    });
                }
            },
            updateOptions (init, slot = false) {
                let options = [];
                let index = 1;

                this.findChild((child) => {
                    options.push({
                        value: child.value,
                        label: (child.label === undefined) ? child.$el.innerHTML : child.label
                    });
                    child.index = index++;

                    if (init) {
                        this.optionInstances.push(child);
                    }
                });

                this.options = options;

                if (init) {
                    this.updateSingleSelected(true, slot);
                    this.updateMultipleSelected(true, slot);
                }
            },
            updateSingleSelected (init = false, slot = false) {
                const type = typeof this.propModel;

                if (type === 'string' || type === 'number') {
                    let findModel = false;

                    for (let i = 0; i < this.options.length; i++) {
                        if (this.propModel === this.options[i].value) {
                            this.selectedSingle = this.options[i].label;
                            findModel = true;
                            break;
                        }
                    }

                    if (slot && !findModel) {
                        this.propModel = '';
                        this.query = '';
                    }
                }

                this.toggleSingleSelected(this.propModel, init);
            },
            clearSingleSelect () {
                if (this.showCloseIcon) {
                    this.findChild((child) => {
                        child.selected = false;
                    });
                    this.propModel = '';

                    if (this.filterable) {
                        this.query = '';
                    }
                }
            },
            updateMultipleSelected (init = false, slot = false) {
                if (this.multiple && Array.isArray(this.propModel)) {
                    let selected = [];

                    for (let i = 0; i < this.propModel.length; i++) {
                        const model = this.propModel[i];

                        for (let j = 0; j < this.options.length; j++) {
                            const option = this.options[j];

                            if (model === option.value) {
                                selected.push({
                                    value: option.value,
                                    label: option.label
                                });
                            }
                        }
                    }

                    this.selectedMultiple = selected;

                    if (slot) {
                        let selectedModel = [];

                        for (let i = 0; i < selected.length; i++) {
                            selectedModel.push(selected[i].value);
                        }

                        // if slot change and remove a selected option, emit user
                        if (this.propModel.length === selectedModel.length) {
                            this.slotChangeDuration = true;
                        }

                        this.propModel = selectedModel;
                    }
                }
                this.toggleMultipleSelected(this.propModel, init);
            },
            removeTag (index) {
                if (this.disabled) {
                    return false;
                }
                this.propModel.splice(index, 1);

                if (this.filterable && this.visible) {
                    this.$refs.input.focus();
                }

                this.$refs.dropdown.$emit('on-update-popper');
            },
            // to select option for single
            toggleSingleSelected (value, init = false) {
                if (!this.multiple) {
                    let label = '';

                    this.findChild((child) => {
                        if (child.value === value) {
                            child.selected = true;
                            label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    this.hideMenu();

                    if (!init) {
                        if (this.labelInValue) {
                            this.$emit('on-change', {
                                value: value,
                                label: label
                            });
                            this.$emit('on-form-change', {
                                value: value,
                                label: label
                            });
                        } else {
                            this.$emit('on-change', value);
                            this.$emit('on-form-change', value);
                        }
                    }
                }
            },
            // to select option for multiple
            toggleMultipleSelected (value, init = false) {
                if (this.multiple) {
                    let hybridValue = [];
                    for (let i = 0; i < value.length; i++) {
                        hybridValue.push({
                            value: value[i]
                        });
                    }

                    this.findChild((child) => {
                        const index = value.indexOf(child.value);

                        if (index >= 0) {
                            child.selected = true;
                            hybridValue[index].label = (child.label === undefined) ? child.$el.innerHTML : child.label;
                        } else {
                            child.selected = false;
                        }
                    });

                    if (!init) {
                        if (this.labelInValue) {
                            this.$emit('on-change', hybridValue);
                            // this.$dispatch('on-form-change', hybridValue);
                            this.$emit('on-form-change', hybridValue);
                        } else {
                            this.$emit('on-change', value);
                            // this.$dispatch('on-form-change', value);
                            this.$emit('on-form-change', value);
                        }
                    }
                }
            },
            handleClose () {
                this.hideMenu();
            },
            handleKeydown (e) {
                if (this.visible) {
                    const keyCode = e.keyCode;
                    // Esc slide-up
                    if (keyCode === 27) {
                        e.preventDefault();
                        this.hideMenu();
                    }
                    // next
                    if (keyCode === 40) {
                        e.preventDefault();
                        this.navigateOptions('next');
                    }
                    // prev
                    if (keyCode === 38) {
                        e.preventDefault();
                        this.navigateOptions('prev');
                    }
                    // enter
                    if (keyCode === 13) {
                        e.preventDefault();

                        this.findChild((child) => {
                            if (child.isFocus) {
                                child.select();
                            }
                        });
                    }
                }
            },
            navigateOptions (direction) {
                if (direction === 'next') {
                    const next = this.focusIndex + 1;
                    this.focusIndex = (this.focusIndex === this.options.length) ? 1 : next;
                } else if (direction === 'prev') {
                    const prev = this.focusIndex - 1;
                    this.focusIndex = (this.focusIndex <= 1) ? this.options.length : prev;
                }

                let child_status = {
                    disabled: false,
                    hidden: false
                };

                let find_deep = false;    // can next find allowed

                this.findChild((child) => {
                    if (child.index === this.focusIndex) {
                        child_status.disabled = child.disabled;
                        child_status.hidden = child.hidden;

                        if (!child.disabled && !child.hidden) {
                            child.isFocus = true;
                        }
                    } else {
                        child.isFocus = false;
                    }

                    if (!child.hidden && !child.disabled) {
                        find_deep = true;
                    }
                });

                this.resetScrollTop();

                if ((child_status.disabled || child_status.hidden) && find_deep) {
                    this.navigateOptions(direction);
                }
            },
            resetScrollTop () {
                const index = this.focusIndex - 1;
                let bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.dropdown.$el.getBoundingClientRect().bottom;
                let topOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().top - this.$refs.dropdown.$el.getBoundingClientRect().top;

                if (bottomOverflowDistance > 0) {
                    this.$refs.dropdown.$el.scrollTop += bottomOverflowDistance;
                }
                if (topOverflowDistance < 0) {
                    this.$refs.dropdown.$el.scrollTop += topOverflowDistance;
                }
            },
            handleBlur () {
                setTimeout(() => {
                    const model = this.propModel;

                    if (this.multiple) {
                        this.query = '';
                    } else {
                        if (model !== '') {
                            this.findChild((child) => {
                                if (child.value === model) {
                                    this.query = child.label === undefined ? child.searchLabel : child.label;
                                }
                            });
                        } else {
                            this.query = '';
                        }
                    }
                }, 300);
            },
            resetInputState () {
                this.inputLength = this.$refs.input.value.length * 12 + 20;
            },
            handleInputDelete () {
                if (this.multiple && this.propModel.length && this.query === '') {
                    this.removeTag(this.propModel.length - 1);
                }
            },
            // use when slot changed
            slotChange () {
                this.options = [];
                this.optionInstances = [];
            },
            setQuery (query) {
                if (!this.filterable) return;
                this.query = query;
            },
            propModelToQuery() {
                if (!this.multiple && this.filterable && this.propModel) {
                    this.findChild((child) => {
                        if (this.propModel === child.value) {
                            if (child.label) {
                                this.query = child.label;
                            } else if (child.searchLabel) {
                                this.query = child.searchLabel;
                            } else {
                                this.query = child.value;
                            }
                        }
                    });
                }
            },
            onSelectSelected (value) {
                if (this.propModel === value) {
                    this.hideMenu();
                } else {
                    if (this.multiple) {
                        // @todo propModel 可能不是数组
                        const index = this.propModel.indexOf(value);
                        if (index >= 0) {
                            this.removeTag(index);
                        } else {
                            this.propModel.push(value);
                            this.$refs.dropdown.$emit('on-update-popper');
                        }

                        if (this.filterable) {
                            this.query = '';
                            this.$refs.input.focus();
                        }
                    } else {
                        // @todo prop 不能修改
                        this.propModel = value;

                        if (this.filterable) {
                            this.findChild((child) => {
                                if (child.value === value) {
                                    this.query = child.label === undefined ? child.searchLabel : child.label;
                                }
                            });
                        }
                    }
                }
            }
        },
        mounted () {
            // model="[]" 没有发生watch
            if (Array.isArray(this.model)) {
                this.propModel = [];
            }
            this.propModelToQuery();

            this.updateOptions(true);
            document.addEventListener('keydown', this.handleKeydown);

            // watch slot changed
            if (MutationObserver) {
                this.observer = new MutationObserver(() => {
                    this.propModelToQuery();
                    this.slotChange();
                    this.updateOptions(true, true);
                });

                this.observer.observe(this.$refs.options, {
                    // attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            this.$on('on-select-selected', function (value) {
                this.onSelectSelected(value);
            });
        },
        beforeDestroy () {
            document.removeEventListener('keydown', this.handleKeydown);
            if (this.observer) {
                this.observer.disconnect();
            }
        },
        watch: {
            model (val) {
                this.propModel = val;
            },
            propModel (val) {
                this.propModelToQuery();
                if (this.multiple) {
                    if (this.slotChangeDuration) {
                        this.slotChangeDuration = false;
                    } else {
                        this.updateMultipleSelected();
                    }
                } else {
                    this.updateSingleSelected();
                }
                // 实现1.0 sync
                this.$emit('prop-change-model', val);
            },
            visible (val) {
                if (val) {
                    if (this.multiple && this.filterable) {
                        this.$refs.input.focus();
                    }
                    this.$refs.dropdown.$emit('on-update-popper');
                    // this.$broadcast('on-update-popper');
                } else {
                    if (this.filterable) {
                        this.$refs.input.blur();
                    }
                    this.$refs.dropdown.$emit('on-destroy-popper');
                    // this.$broadcast('on-destroy-popper');
                }
            },
            query (val) {
                // @todo
                this.$broadcast('on-query-change', val);
                let is_hidden = true;

                this.$nextTick(() => {
                    this.findChild((child) => {
                        if (!child.hidden) {
                            is_hidden = false;
                        }
                    });
                    this.notFound = is_hidden;
                });
                this.$refs.dropdown.$emit('on-update-popper');
            }
        }
    };
</script>
