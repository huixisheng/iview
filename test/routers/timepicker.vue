<style>
    .ivu-row{ margin-bottom: 20px; }
</style>
<template>
<div>
    <row>
        <i-col span="12">
            <Time-picker type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
    </row>
    <row>
        <i-col span="12">
            <Time-picker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
    </row>
    <row>
        <i-col span="12">
            <Time-picker format="HH:mm" placeholder="选择时间" style="width: 112px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
    </row>
    <row>
        <i-col span="12">
            <Time-picker
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="选择时间"
                style="width: 168px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker
                hide-disabled-options
                :disabled-hours="[1,5,10]"
                :disabled-minutes="[0,10,20]"
                placeholder="选择时间"
                style="width: 168px"></Time-picker>
        </i-col>
    </row>
    <row>
        <i-col span="12">
            <Time-picker confirm placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker confirm type="timerange" placement="bottom-end" placeholder="选择时间" style="width: 168px"></Time-picker>
        </i-col>
    </row>
</div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00']
            }
        }
    }
</script>