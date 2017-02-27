<template>
    <div :class="classes">
        <Input-number
            v-if="!range && showInput"
            :min="min"
            :max="max"
            :step="step"
            :value="propValue"
            :disabled="disabled"
            @on-change="handleInputChange"></Input-number>
        <div :class="[prefixCls + '-wrap']" ref="slider" @click.self="sliderClick">
            <template v-if="showStops">
                <div :class="[prefixCls + '-stop']" v-for="item in stops" :style="{ 'left': item + '%' }" @click.self="sliderClick"></div>
            </template>
            <div :class="[prefixCls + '-bar']" :style="barStyle" @click.self="sliderClick"></div>
            <template v-if="range">
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: firstPosition + '%'}"
                    @mousedown="onFirstButtonDown">
                    <Tooltip :controlled="firstDragging" placement="top" :content="tipFormat(propValue[0])" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip">
                        <div :class="button1Classes"></div>
                    </Tooltip>
                </div>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: secondPosition + '%'}"
                    @mousedown="onSecondButtonDown">
                    <Tooltip :controlled="secondDragging" placement="top" :content="tipFormat(propValue[1])" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip2">
                        <div :class="button2Classes"></div>
                    </Tooltip>
                </div>
            </template>
            <template v-else>
                <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{left: singlePosition + '%'}"
                    @mousedown="onSingleButtonDown">
                    <Tooltip :controlled="dragging" placement="top" :content="tipFormat(propValue)" :disabled="tipDisabled" :always="showTip === 'always'" ref="tooltip">
                        <div :class="buttonClasses"></div>
                    </Tooltip>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import InputNumber from '../../components/input-number/input-number.vue';
    import Tooltip from '../../components/tooltip/tooltip.vue';
    import { getStyle, oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-slider';

    export default {
        components: { InputNumber, Tooltip },
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            },
            range: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Number, Array],
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showInput: {
                type: Boolean,
                default: false
            },
            showStops: {
                type: Boolean,
                default: false
            },
            tipFormat: {
                type: Function,
                default (val) {
                    return val;
                }
            },
            showTip: {
                type: String,
                default: 'hover',
                validator (value) {
                    return oneOf(value, ['hover', 'always', 'never']);
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                dragging: false,
                firstDragging: false,
                secondDragging: false,
                startX: 0,
                currentX: 0,
                startPos: 0,
                newPos: null,
                propValue: 0,
                oldSingleValue: this.propValue,
                oldFirstValue: -1,
                oldSecondValue: -1,
                singlePosition: (this.propValue - this.min) / (this.max - this.min) * 100,
                firstPosition: -1,
                secondPosition: -1
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-input`]: this.showInput && !this.range,
                        [`${prefixCls}-range`]: this.range,
                        [`${prefixCls}-disabled`]: this.disabled
                    }
                ];
            },
            buttonClasses () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.dragging
                    }
                ];
            },
            button1Classes () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.firstDragging
                    }
                ];
            },
            button2Classes () {
                return [
                    `${prefixCls}-button`,
                    {
                        [`${prefixCls}-button-dragging`]: this.secondDragging
                    }
                ];
            },
            barStyle () {
                let style;

                if (this.range) {
                    style = {
                        width: (this.propValue[1] - this.propValue[0]) / (this.max - this.min) * 100 + '%',
                        left: (this.propValue[0] - this.min) / (this.max - this.min) * 100 + '%'
                    };
                } else {
                    style = {
                        width: (this.propValue - this.min) / (this.max - this.min) * 100 + '%'
                    };
                }

                return style;
            },
            stops() {
                let stopCount = (this.max - this.min) / this.step;
                let result = [];
                let stepWidth = 100 * this.step / (this.max - this.min);
                for (let i = 1; i < stopCount; i++) {
                    result.push(i * stepWidth);
                }
                return result;
            },
            sliderWidth () {
                return parseInt(getStyle(this.$refs.slider, 'width'), 10);
            },
            tipDisabled () {
                return this.tipFormat(this.propValue[0]) === null || this.showTip === 'never';
            }
        },
        created () {
            this.propValue = this.value;
            if(Array.isArray(this.propValue)) {
                this.oldFirstValue = this.propValue[0],
                this.oldSecondValue = this.propValue[1],
                this.firstPosition = (this.propValue[0] - this.min) / (this.max - this.min) * 100,
                this.secondPosition = (this.propValue[1] - this.min) / (this.max - this.min) * 100
            }
            if (this.range) {
                const isArray = Array.isArray(this.propValue);
                if (!isArray || (isArray && this.propValue.length != 2) || (isArray && (isNaN(this.propValue[0]) || isNaN(this.propValue[1])))) {
                    this.propValue = [this.min, this.max];
                } else {
                    this.updateValue(this.propValue, true);
                }
            } else {
                if (typeof this.propValue !== 'number') {
                    this.propValue = this.min;
                }
                this.updateValue(this.propValue);
            }
        },
        watch: {
            value (val) {
                this.propValue = val;
            },
            propValue () {
                this.$nextTick(() => {
                    this.$refs.tooltip.updatePopper();
                    if (this.range) {
                        this.$refs.tooltip2.updatePopper();
                    }
                });
                this.updateValue(this.propValue);
                this.$emit('on-input', this.propValue);
            }
        },
        methods: {
            updateValue (val, init = false) {
                if (this.range) {
                    let value = [...val];
                    if (init) {
                        if (value[0] > value[1]) {
                            value = [this.min, this.max];
                        }
                    } else {
                        if (value[0] > value[1]) {
                            value[0] = value[1];
                        }
                    }
                    if (value[0] < this.min) {
                        value[0] = this.min;
                    }
                    if (value[0] > this.max) {
                        value[0] = this.max;
                    }
                    if (value[1] < this.min) {
                        value[1] = this.min;
                    }
                    if (value[1] > this.max) {
                        value[1] = this.max;
                    }
                    if (this.propValue[0] === value[0] && this.propValue[1] === value[1]) return;

                    this.propValue = value;
                    this.setFirstPosition(this.propValue[0]);
                    this.setSecondPosition(this.propValue[1]);
                } else {
                    if (val < this.min) {
                        this.propValue = this.min;
                    }
                    if (val > this.max) {
                        this.propValue = this.max;
                    }
                    this.setSinglePosition(this.propValue);
                }
            },
            sliderClick (event) {
                if (this.disabled) return;
                const currentX = event.clientX;
                const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
                const newPos = (currentX - sliderOffsetLeft) / this.sliderWidth * 100;

                if (this.range) {
                    let type = '';
                    if (newPos <= this.firstPosition) {
                        type = 'First';
                    } else if (newPos >= this.secondPosition) {
                        type = 'Second';
                    } else {
                        if ((newPos - this.firstPosition) <= (this.secondPosition - newPos)) {
                            type = 'First';
                        } else {
                            type = 'Second';
                        }
                    }
                    this[`change${type}Position`](newPos);
                } else {
                    this.changeSinglePosition(newPos);
                }
            },
            // for single use
            onSingleButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onSingleDragStart(event);
                window.addEventListener('mousemove', this.onSingleDragging);
                window.addEventListener('mouseup', this.onSingleDragEnd);
            },
            onSingleDragStart (event) {
                this.dragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.singlePosition, 10);
            },
            onSingleDragging (event) {
                if (this.dragging) {
                    this.$refs.tooltip.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeSinglePosition(this.newPos);
                }
            },
            onSingleDragEnd () {
                if (this.dragging) {
                    this.dragging = false;
                    this.$refs.tooltip.visible = false;
                    this.changeSinglePosition(this.newPos);
                    window.removeEventListener('mousemove', this.onSingleDragging);
                    window.removeEventListener('mouseup', this.onSingleDragEnd);
                }
            },
            changeSinglePosition (newPos) {
                if (newPos >= 0 && (newPos <= 100)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.propValue = Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min);
                    this.setSinglePosition(this.propValue);
                    if (!this.dragging) {
                        if (this.propValue !== this.oldSingleValue) {
                            this.$emit('on-change', this.propValue);
                            this.$emit('on-form-change', this.propValue);
                            this.oldSingleValue = this.propValue;
                        }
                    }
                }
            },
            setSinglePosition (val) {
                this.singlePosition = (val - this.min) / (this.max - this.min) * 100;
            },
            handleInputChange (val) {
                this.propValue = val;
                this.setSinglePosition(val);
                this.$emit('on-change', this.propValue);
                this.$emit('on-form-change', this.propValue);
            },
            // for range use first
            onFirstButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onFirstDragStart(event);
                window.addEventListener('mousemove', this.onFirstDragging);
                window.addEventListener('mouseup', this.onFirstDragEnd);
            },
            onFirstDragStart (event) {
                this.firstDragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.firstPosition, 10);
            },
            onFirstDragging (event) {
                if (this.firstDragging) {
                    this.$refs.tooltip.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeFirstPosition(this.newPos);
                }
            },
            onFirstDragEnd () {
                if (this.firstDragging) {
                    this.firstDragging = false;
                    this.$refs.tooltip.visible = false;
                    this.changeFirstPosition(this.newPos);
                    window.removeEventListener('mousemove', this.onFirstDragging);
                    window.removeEventListener('mouseup', this.onFirstDragEnd);
                }
            },
            changeFirstPosition (newPos) {
                if (newPos >= 0 && (newPos <= this.secondPosition)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.propValue = [Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min), this.propValue[1]];
                    this.setFirstPosition(this.propValue[0]);
                    if (!this.firstDragging) {
                        if (this.propValue[0] !== this.oldFirstValue) {
                            this.$emit('on-change', this.propValue);
                            this.$emit('on-form-change', this.propValue);
                            this.oldFirstValue = this.propValue[0];
                        }
                    }
                }
            },
            setFirstPosition (val) {
                this.firstPosition = (val - this.min) / (this.max - this.min) * 100;
            },
            // for range use second
            onSecondButtonDown (event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onSecondDragStart(event);
                window.addEventListener('mousemove', this.onSecondDragging);
                window.addEventListener('mouseup', this.onSecondDragEnd);
            },
            onSecondDragStart (event) {
                this.secondDragging = true;
                this.startX = event.clientX;
                this.startPos = parseInt(this.secondPosition, 10);
            },
            onSecondDragging (event) {
                if (this.secondDragging) {
                    this.$refs.tooltip2.visible = true;
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.sliderWidth * 100;
                    this.newPos = this.startPos + diff;
                    this.changeSecondPosition(this.newPos);
                }
            },
            onSecondDragEnd () {
                if (this.secondDragging) {
                    this.secondDragging = false;
                    this.$refs.tooltip2.visible = false;
                    this.changeSecondPosition(this.newPos);
                    window.removeEventListener('mousemove', this.onSecondDragging);
                    window.removeEventListener('mouseup', this.onSecondDragEnd);
                }
            },
            changeSecondPosition (newPos) {
                if (newPos >= this.firstPosition && (newPos <= 100)) {
                    const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                    const steps = Math.round(newPos / lengthPerStep);

                    this.propValue = [this.propValue[0], Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min)];
                    this.setSecondPosition(this.propValue[1]);
                    if (!this.secondDragging) {
                        if (this.propValue[1] !== this.oldSecondValue) {
                            this.$emit('on-change', this.propValue);
                            this.$emit('on-form-change', this.propValue);
                            this.oldSecondValue = this.propValue[1];
                        }
                    }
                }
            },
            setSecondPosition (val) {
                this.secondPosition = (val - this.min) / (this.max - this.min) * 100;
            }
        }
    };
</script>
