<style scoped>
.demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
.demo-badge-alone{
    background: #5cb85c !important;
}
</style>
<template>
<div>
    <Row>
        <i-col span="2">
            <Badge count="3">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </i-col>
    </Row>
    <Row>
        <i-col span="2">
            <Badge dot>
                <a href="#" class="demo-badge"></a>
            </Badge>
        </i-col>
        <i-col span="2">
            <Badge dot>
                <Icon type="ios-bell-outline" size="26"></Icon>
            </Badge>
        </i-col>
        <i-col span="2">
            <Badge dot>
                <a href="#">可以是一个链接</a>
            </Badge>
        </i-col>
    </Row>
    <Row>
        <i-col span="2">
            <Badge count="100">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </i-col>
        <i-col span="2">
            <Badge count="1000" overflow-count="999">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </i-col>
        <i-col span="2">
            <Badge count="10"></Badge>
            <Badge count="20" class="demo-badge-alone"></Badge>
        </i-col>
    </Row>
</div>
</template>
<script>
    export default {

    }
</script>