<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="userName"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="user_id"
                label="用户ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="registered_time"
                label="注册时间">
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="10"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </div>
</template>
<script>
import { getAllUsers, getOrdersCount } from '../service/api';
export default {
    data() {
        return {
            tableData: [],
            total: 0,
            pageSize: '',
            page: '',
            currentPage: 1,
        }
    },
    created() {
        this.init();
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.page = val;
            this.getList();
        },
        async init(payload) {
            const result = await getOrdersCount();
            if(result.status) {
                this.total = result.total
            }
            this.getList();
        },
        async getList() {
            const result = await getAllUsers({pageSize: this.pageSize, page: this.page,});
            this.tableData = result;
        }
    }
}
</script>
<style>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
    .el-aside {
        color: #333;
    }
</style>
