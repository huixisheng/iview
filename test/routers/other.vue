<template>
<div>
    <Affix>
        <span class="demo-affix">固定在最顶部</span>
    </Affix>
    <Back-top :height="100" :bottom="100">
        <div class="top">返回顶端</div>
    </Back-top>
    <Spin size="small"></Spin>
    <Spin></Spin>
    <Spin size="large"></Spin>
    <Row>
        <i-col class="demo-spin-col" span="8">
            <Spin fix>加载中...</Spin>
        </i-col>
        <i-col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </i-col>
        <i-col class="demo-spin-col" span="8">
            <Spin fix>
                <div class="loader">
                  <!-- @todo 无效果 -->
                    <svg class="circular" viewBox="25 25 50 50">
                      <i-circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" v-pre></i-circle>
                    </svg>
                </div>
            </Spin>
        </i-col>
    </Row>
</div>
</template>
<style scoped>
.demo-affix {
    display: inline-block;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    background: rgba(0,153,229,.9);
}
.top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}
</style>
<script>
    export default {

    }
</script>