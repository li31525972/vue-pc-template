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
            <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" class="ruleForm">
                <el-form-item  prop="username" >
                    <el-input class="username" type="text" v-model="ruleForm.username" placeholder="请输入用户名">
                        <template slot="prepend"><span class="el-icon-user el-input__icon"></span></template>
                    </el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" @keyup.enter.native="submitForm('ruleForm')" v-model="ruleForm.password" placeholder="请输入密码">
                        <template slot="prepend"><span class="el-icon-lock el-input__icon"></span></template>
                    </el-input>
                </el-form-item>
                <el-form-item class="submit-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
        width: 340px;
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
        padding: 20px 20px 20px 20px;
        background-color: #fff;
        border-radius: 10px;
        .el-input {
            height: 100%;
            /deep/ input {
                height: 100%;
            }
        }

        /deep/.el-input-group__prepend {
            padding: 0 5px;
        }

        /deep/.submit-btn .el-form-item__content {
            display: flex;
            flex-direction: column;

            .el-button {
                flex: 1;
            }
            .el-button + .el-button {
                margin-left: 0;
                margin-top: 10px;
            }
        }

    }
}
</style>
