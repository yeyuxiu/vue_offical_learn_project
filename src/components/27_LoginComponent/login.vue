<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="登录账号" prop="account">
                <el-input type="text" v-model="ruleForm.account"
                          autocomplete="on"
                          placeholder="请输入账号"

                ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"
                          autocomplete="off"
                          show-password
                          placeholder="请输入密码"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resign" type="primary" plain>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",

        data() {
            const white = /\s/;
            var accountPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('账号不能为空'));
                } else {
                    if (white.test(value)) {
                        callback(new Error('账号不能有空格'))
                    }
                    callback();
                }

            };
            var passwordPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                }

                callback();
            };

            return {
                ruleForm: {
                    account: '',
                    password: '',
                },
                //  <el-form-item label="密码" prop="password"> prop 要跟 rules ruleForm字段要一样才生效
                rules: {
                    account: [
                        { validator: accountPass, trigger: 'blur' }
                    ],
                    password: [
                        { validator: passwordPass, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                let session = window.sessionStorage;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/login', {
                            account: this.ruleForm.account,
                            password: this.$md5(this.ruleForm.password)
                        })
                        .then((response) => {
                            if (response.data.result.login) {
                                this.$notify({
                                    title: '成功',
                                    message: response.data.result.reason,
                                    type: 'success',
                                    position: 'top-left'
                                });
                                // 登录成功的后续
                                session.setItem('login', true)
                                this.$router.push({name: 'LoginComponentShowMe'})


                            } else {
                                this.$notify.error({
                                    title: '失败',
                                    message: response.data.result.reason,
                                    position: 'top-left'
                                })
                                return false
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                    }
                });
            },
            resign() {
                this.$router.push({name: 'loginComponentResign'})
            }
        }
    }
</script>

<style scoped>
    ::v-deep .el-input{
        width: 300px;
    }
</style>