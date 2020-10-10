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
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
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
import * as api from '@/api/user'
export default {
    name: "login",
    data() {
        return {
            ruleForm: {
                username: '',
                password: '',
                grant_type: 'password',
            },
            rules: {
                username: [
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
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let formData = new FormData()
                    for (let key in this.ruleForm) {
                        if (this.ruleForm[key]) {
                            formData.append(key, this.ruleForm[key])
                        }
                    }
                    // 进行认证
                    api.authToken(formData).then(response => {

                        sessionStorage.setItem('token', response.data.access_token)

                        return api.login(formData)
                        // 进行登录
                    }).then(response => {
                        // 存储个人信息、跳转到首页
                        this.$store.commit('SET_USER', response)
                        this.$router.replace({ path: '/' })
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
        margin-top: 10%;
        width: 370px;
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
