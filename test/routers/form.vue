<template>
    <i-form ref="form-validate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <Form-item label="输入框" prop="input">
            <i-input :value="formValidate.input" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="Ajax：" prop="ajax">
            <div slot="label">
                <span>Ajax</span>
                <Tooltip content="基于 axios">
                    <Icon type="ios-help" size="14" color="#3399ff"></Icon>
                </Tooltip>
                <span>：</span>
            </div>
            <i-switch :checked="formValidate.ajax"></i-switch>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click.native="handleSubmit('form-validate')">提交</i-button>
            <i-button type="ghost" @click.native="handleReset('form-validate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    input: '123',
                    ajax: true
                },
                ruleValidate: {

                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
