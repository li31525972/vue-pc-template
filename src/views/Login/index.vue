/**
* @file 登录
* @date 2020-01-03
* @author Yahui Li
*/
<template>
    <div class="login">
        <section class="form-container">
            <div class="title">
                <span>后台管理系统</span>
            </div>
            <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" label-width="100px" class="ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" @keyup.enter.native="submitForm('ruleForm')" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>

export default {
    name: "login",
    data() {
        return {
            ruleForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在2到20之间', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在6到20之间', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        /**
         * form表单验证，通过之后进行登录，登录完毕之后将返回的数据存储到vuex
         * @param formName
         */
        submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    
                    this.$store.dispatch('login', this.ruleForm).then(() => {
                        this.$router.replace('/')
                    })
                } else {
                    
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/bg.jpeg');
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    .form-container {
        position: absolute;
        width: 370px;
        top: 10%;
        margin: auto;
        padding: 25px;
        border-radius: 5px;
        
        .title {
            text-align: center;
            font-weight: 700;
            font-size: 20px;
            color: #fff;
        }
    }
    
    .ruleForm {
        margin-top: 20px;
        padding: 20px 40px 20px 20px;
        background-color: #fff;
        border-radius: 10px;
        
        .submit-btn {
            margin-left: 20px;
        }
    }
}
</style>
