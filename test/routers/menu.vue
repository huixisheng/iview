<template>
<div>
    <Menu mode="horizontal" :theme="theme1" :active-key.sync="ak">
        <Menu-item ikey="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </Menu-item>
        <Menu-item ikey="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </Menu-item>
        <Submenu ikey="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <template>
                <Menu-group title="使用">
                    <Menu-item ikey="3-1">新增和启动</Menu-item>
                    <Menu-item ikey="3-2">活跃分析</Menu-item>
                    <Menu-item ikey="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item ikey="3-4">用户留存</Menu-item>
                    <Menu-item ikey="3-5">流失用户</Menu-item>
                </Menu-group>
            </template>
        </Submenu>
        <Menu-item ikey="4">
            <Icon type="settings"></Icon>
            综合设置
        </Menu-item>
    </Menu>
    <br>
    <p>切换主题</p>
    <Radio-group :model.sync="theme1">
        <Radio value="light"></Radio>
        <Radio value="dark"></Radio>
        <Radio value="primary"></Radio>
    </Radio-group>
    <i-button @click.native="ak = '2'">change</i-button>
</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                ak: '1'
            }
        }
    }
</script>
