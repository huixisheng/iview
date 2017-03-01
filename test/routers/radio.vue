<template>
<div>
    <div>
        <Radio-group :model="phone" vertical>
            <Radio value="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio value="android" disabled>
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio value="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
        <br><br>
        <Radio-group :model="animal">
            <Radio value="金斑蝶"></Radio>
            <Radio value="爪哇犀牛"></Radio>
            <Radio value="印度黑羚"></Radio>
        </Radio-group>
        <br><br>
        <!-- <i-button @click.native="activeKey = '2'">换</i-button> -->
    </div>
    <Radio ref="radio1" :checked="radio">Radio</Radio>
    <i-button @click.native="changeRadio">change radio</i-button>
    <br>
    <br>
    <Radio-group :model="phone" type="button" vertical>
        <Radio value="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio value="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio value="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </Radio-group>
    <Radio-group :model="animal" type="button">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>

    <Radio-group :model="animal" type="button">
        <Radio value="金斑蝶" disabled></Radio>
        <Radio value="爪哇犀牛" disabled></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <br><br>
    <Radio-group :model="animal" type="button" size="large">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <Radio-group :model="animal" type="button">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <Radio-group :model="animal" type="button" size="small">
        <Radio value="金斑蝶"></Radio>
        <Radio value="爪哇犀牛"></Radio>
        <Radio value="印度黑羚"></Radio>
    </Radio-group>
    <br><br><br><br>
    <Checkbox :checked="radio">Checkbox</Checkbox>
    <br><br>
    <Checkbox-group :model="social">
        <Checkbox value="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </Checkbox-group>
    <br><br>
    <Checkbox :checked="disabledSingle" disabled>Checkbox</Checkbox>
    <Checkbox-group :model="disabledGroup">
        <Checkbox value="香蕉" disabled></Checkbox>
        <Checkbox value="苹果" disabled></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
    <br><br>
    <i-switch @on-change="change"></i-switch>
    <br><br>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <br><br>
    <i-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </i-switch>
    <i-switch disabled></i-switch>
    <i-switch size="small"></i-switch>
    <br><br>
    <Input-number :max="10" :min="1" :step="1.2" :value="1"></Input-number>
    <Input-number :value="2" size="small"></Input-number>
    <Input-number :value="2"></Input-number>
    <Input-number :value="2" size="large"></Input-number>
    <br><br>
    <Breadcrumb>
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb>
        <Breadcrumb-item href="/">
            <Icon type="ios-home-outline"></Icon> Home
        </Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">
            <Icon type="social-buffer-outline"></Icon> Components
        </Breadcrumb-item>
        <Breadcrumb-item>
            <Icon type="pound"></Icon> Breadcrumb
        </Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator=">">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <br><br>
    <Checkbox :checked="single"></Checkbox>
    <h2>以下为测试</h2>
    <Button @click.native="testButtonClick">测试button</Button>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
</div>
</template>
<script>
    import { Radio, Alert, Icon, Collapse, iButton, Checkbox, iSwitch, InputNumber, Breadcrumb, LoadingBar } from 'iview';

    const RadioGroup = Radio.Group;
    const Panel = Collapse.Panel;
    const CheckboxGroup = Checkbox.Group;
    const BreadcrumbItem = Breadcrumb.Item;
    const Switch = iSwitch;
    const Button = iButton;
    export default {
        components: {
            Radio,
            RadioGroup,
            Alert,
            Icon,
            Collapse,
            Panel,
            iButton,
            Button,
            Checkbox,
            CheckboxGroup,
            iSwitch,
            Switch,
            InputNumber,
            Breadcrumb,
            BreadcrumbItem,
            LoadingBar
        },
        props: {

        },
        data () {
            return {
                single: false,
                radio: false,
                radioGroup: '段模',
                activeKey: [1,2],
                phone: 'apple',
                animal: '爪哇犀牛',
                social: ['facebook', 'github'],
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        },
        computed: {

        },
        methods: {
            changeRadio () {
                this.$refs.radio1.checked = !this.radio;
                this.radio = !this.radio;
            },
            changeGroup (data) {
                console.log(data);
            },
            closed (data) {
                console.log(data)
            },
            change (status) {
                console.log(status);
            },
            testButtonClick () {
                console.log('testButtonClick');
            }
        },
        ready () {
            LoadingBar.start();
        }
    }
</script>
