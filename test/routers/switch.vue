<template>
<div>
    <i-switch @on-change="change"></i-switch>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
    <i-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </i-switch>
    <i-switch :disabled="disabled"></i-switch>
    <i-button type="primary" @click.native="disabled = !disabled">Toggle Disabled</i-button>
    <i-switch size="small"></i-switch>
</div>
</template>
<script>
    import { iSwitch, Message, iButton, Icon } from 'iview';
    export default {
        components: { iSwitch, Message, iButton, Icon },
        data () {
            return {
                disabled: true
            }
        },
        methods: {
            change (status) {
                Message.info('开关状态：' + status);
            }
        }
    }
</script>
