<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="注册账号" prop="account">
                <el-input type="text" v-model="ruleForm.account"
                          placeholder="请输入账号"
                          minlength="8"
                          maxlength="10"
                          clearable
                          show-word-limit
                          autocomplete="off"
                          @change="changeCheckDb($event)"
                ></el-input>
                &#160;&#160;<el-button @click="clickCheckDb(ruleForm.account)" type="warning">检测</el-button>
            </el-form-item>
            <el-form-item label="密码" prop="Pass">
                <el-input type="password" v-model="ruleForm.Pass"
                          placeholder="请输入密码"
                          minlength="7"
                          maxlength="10"
                          show-password
                          onpaste="return false"
                          autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input v-model="ruleForm.checkPass"
                          show-password
                          minlength="7"
                          maxlength="10"
                          onpaste="return false"
                          placeholder="确认密码"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')" type="danger">重置</el-button>
            </el-form-item>
        </el-form>
        <el-button @click="login" type="primary">登录</el-button>
    </div>
</template>

<script>
    // 账号 密码 正则检测
    const accountRe = /^\w{8,10}$/;
    const numberRe = /^\d+$/;
    const alRe = /^[a-zA-Z]+$/;
    const pwdRe = /^.{7,10}$/;
    const white = /\s/;

    export default {
        name: "resign",
        data() {
            var accountPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('账号不能为空'));
                } else {
                    // 如果下面的 accountPass 不为空 则自动填入
                    // if (this.ruleForm.accountPass !== '') {
                    //     this.$refs.ruleForm.validateField('ac0countPass');
                    // }
                    // 正则匹配
                    if (numberRe.test(value)) {
                        callback(new Error('不能纯数字'));
                    } else if (alRe.test(value)) {
                        callback(new Error('不能纯英文'));

                    }

                   if (accountRe.test(value)){
                        callback();
                    }
                    callback(new Error('账号需为8-10位英文+数字的组合'));
                }
            };

            var pwdPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                }  else {
                    if (numberRe.test(value)) {
                        callback(new Error('不能纯数字'));
                    } else if (alRe.test(value)) {
                        callback(new Error('不能纯英文'));
                    } else if (white.test(value)) {
                        callback(new Error('不能出现空格'))
                    } else if (pwdRe.test(value)){
                        callback();
                    }
                    callback(new Error('密码需为7-10位没有空格的随机组合'));
                }
            }

            var checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.Pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                checkAccount: false,
                ruleForm: {
                    account: '',
                    Pass: '',
                    checkPass: ''
                },
                computed: {

                },
                rules: {
                    account: [
                        { validator: accountPass, trigger: 'blur' }
                    ],
                    Pass: [
                        { validator: pwdPass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: checkPass, trigger: 'blur' }
                    ]
                }
            };
        },

        methods: {
            submitForm(formName) {
                // validate 任一表单被校验后触发
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.checkAccount) {
                            this.$notify.error({
                                title: '失败',
                                message: '注册失败: 账号重复',
                                position: 'top-left'
                            })
                            return false;
                        }

                    //     注册成功访问数据库
                        this.$axios.post('/resign',{
                            account: this.ruleForm.account,
                            password: this.$md5(this.ruleForm.Pass)
                        })
                        .then((response) => {
                            if (response.data.resign) {
                                this.$notify({
                                    title: '成功',
                                    message: '注册成功',
                                    type: 'success',
                                    position: 'top-left'
                                })
                                this.$router.push({name: 'loginComponentLogin'})
                            }
                            else {
                                console.log('注册失败')
                            }

                        })
                        .catch((e) => {
                            console.log(e);
                        })
                    } else {
                        this.$notify.error({
                            title: '失败',
                            message: '注册失败: 账号/密码格式不对',
                            position: 'top-left'
                        })
                        return false;
                    }
                });
            },
            // 默认这种 post(url, data) 是 Content-Type: application/json 格式
            // 所以flask后台接收的是 request.get_json()
            // 可以在 axios 中设置Content-type: application/x-www-form-urlencoded
            // 这样flask后台就可以接收 request.form.get('')
            changeCheckDb(value) {
                this.$axios.post('/checkResign', {
                    account: value
                })
                .then((response) => {
                    this.checkAccount = response.data.check;
                 })
            },
            clickCheckDb(value) {
                this.$axios.post('/checkResign', {
                    account: value
                })
                .then((response) => {
                    this.checkAccount = response.data.check;
                    if (this.checkAccount) {
                        this.$notify.error({
                            title: '失败',
                            message: '检测失败: 账号重复',
                            position: 'top-left'
                        })
                    } else {
                        this.$notify({
                            title: '成功',
                            message: '检测通过',
                            type: 'success',
                            position: 'top-left'
                        });
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            },


            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            login() {
                this.$router.push({name: 'loginComponentLogin'})
            }
        }
    }
</script>

<style scoped>
    ::v-deep .el-input{
        width: 300px;
    }
</style>