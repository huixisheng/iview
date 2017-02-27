// <style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { width: 80px; margin-bottom: 10px; }
.container{ padding: 10px 40px; }
.v-link-active {
    color: #bbb;
}
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/card">Card</router-link></li>
                <li><router-link to="/message">Message</router-link></li>
                <li><router-link to="/more">More</router-link></li>
                <li><router-link to="/page">Page</router-link></li>
                <li><router-link to="/poptip">Poptip</router-link></li>
                <li><router-link to="/tooltip">Tooltip</router-link></li>
                <li><router-link to="/radio">Radio</router-link></li>
                <li><router-link to="/select">Select</router-link></li>
                <li><router-link to="/slider">Slider</router-link></li>
                <li><router-link to="/step">Step</router-link></li>
                <li><router-link to="/switch">Switch</router-link></li>
                <li><router-link to="/alert">Alert</router-link></li>
                <li><router-link to="/tag">Tag</router-link></li>
                <li><router-link to="/input">Input</router-link></li>
                <li><router-link to="/cascader">Cascader</router-link></li>
                <li><router-link to="/transfer">Transfer</router-link></li>
                <li><router-link to="/table">Table</router-link></li>
                <li><router-link to="/dropdown">Dropdown</router-link></li>
                <li><router-link to="/tabs">Tabs</router-link></li>
                <li><router-link to="/menu">Menu</router-link></li>
                <li><router-link to="/date">Date</router-link></li>
                <li><router-link to="/form">Form</router-link></li>
                <li><router-link to="/carousel">Carousel</router-link></li>
                <li><router-link to="/rate">Rate</router-link></li>
                <li><router-link to="/upload">Upload</router-link></li>
                <li><router-link to="/tree">Tree</router-link></li>
                <li><router-link to="/notice">Notice</router-link></li>
                <li><router-link to="/other">other</router-link></li>
                <li><router-link to="/breadcrumb">breadcrumb</router-link></li>
                <li><router-link to="/badge">badge</router-link></li>
                <li><router-link to="/timeline">timeline</router-link></li>
                <li><router-link to="/timepicker">timepicker</router-link></li>
            </ul>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mount: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
