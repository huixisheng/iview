<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ivu-modal{
        top: 0;
    }

    .placeholder {
        min-height: 2000px;
        width: 1px;
    }
    .ivu-btn{ margin-bottom: 20px; }
</style>
<template>
<div>
    <i-button @click.native="showModal1">距离顶部 20px</i-button>
    <Modal
            ref="modal1"
            title="对话框标题"
            :visible="modal9"
            :style="{top: '20px'}">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click.native="showModal2">垂直居中</i-button>
    <Modal
            ref="modal2"
            title="对话框标题"
            :visible="modal10"
            class-name="vertical-center-modal">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button @click.native="instance(true)">Create Instance Scrollable</i-button>
    <i-button @click.native="instance(false)">Create Instance Non-scrollable</i-button>
    <div class="placeholder"></div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
                modal1: false,
                scrollable: false
            }
        },
        methods: {
            showModal1 () {
                this.$refs.modal1.visible = true;
            },
            showModal2 () {
                this.$refs.modal2.visible = true;
            },
            ok () {
                this.$nextTick(() => this.modal1 = true);
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },
            instance (scrollable) {
                this.$Modal.info({
                    title: 'test',
                    content: 'test',
                    scrollable: scrollable
                });
            }
        }
    }
</script>
