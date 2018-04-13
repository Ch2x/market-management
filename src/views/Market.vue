<template>
    <div class="fillcontainer">
        <el-header>
            <h3>二手买卖后台管理系统</h3>
            <el-dropdown  @command="handleCommand">
                <i class="el-icon-setting" style="margin-right: 15px">admin</i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="signout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-row style="height: 100%" :gutter="20">
            <el-col :span="4" style="min-height: 100%; background-color: rgb(238, 241, 246);">
                <el-menu
                        :default-active="defaultActive"
                        class="el-menu-vertical-demo"
                        background-color="rgb(238, 241, 246)"
                        text-color="#000"
                        active-text-color="rgb(73,138,245)"
                    router>
                    <el-menu-item index="UserManagement">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="ProductManagement">
                    <i class="el-icon-document"></i>
                    <span slot="title">产品管理</span>
                    </el-menu-item>
                    <el-menu-item index="CommentManagement">
                    <i class="el-icon-document"></i>
                    <span slot="title">评论管理</span>
                    </el-menu-item>
                </el-menu>  
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
		defaultActive: function(){
			return this.$route.path.replace('/', '');
		}
	},
    methods: {
        handleCommand(command) {
            console.log(1);
            if(command === 'signout') {
                console.log(1);
                this.$message({
	                type: 'success',
	                message: '退出成功'
	            });
	            this.$router.push('/');
            }
        }
    }
}
</script>
<style lang="less" scoped>
     .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
    }   
</style>

