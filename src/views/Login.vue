<template>
    <div class="fillcontainer login-page">
        <section class="login-form">
            <h2>二手买卖后台管理系统</h2>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="userName">
                    <el-input v-model="form.userName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item props="password">
                    <el-input type="password" placeholder="密码" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin('form')" class="login-btn">登录</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                userName: '',
                password: '',
            },
            rules: {
				userName: [
			        { required: true, message: '请输入用户名', trigger: 'blur' },
			    ],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				],
			},
        }
    },
    methods: {
        onLogin(form) {
            this.$refs.form.validate((valid) => {
                if(valid) {
                    if(this.form.userName === 'admin' && this.form.password === '123') {
                        this.$router.push('/market');
                    }else {
                        this.$message({
                            showClose: true,
                            message: '用户名或者密码错误',
                            type: 'error'
                        });
                    }
                }
            });
        }
    }
}
</script>
<style lang="less" scoped>
.login-page {
    background-color: rgb(193,193,193);
}
.login-form {
    width: 400px;;
    height: 300px;
    padding: 30px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-top: -150px;
    margin-left: -200px;
    >h2 {
        padding-bottom: 50px;
    }
    .login-btn {
        width: 100%;
    }
}
</style>
