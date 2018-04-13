<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="from_uid"
                label="评论人ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="content"
                label="评论内容"
                width="180">
            </el-table-column>
            <el-table-column
                prop="commentTime"
                label="评论时间">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger"  @click="handleDelete(scope.$index)">删除</el-button>
                </template>
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
import { getAllComments, getCommentCount, delComments } from '../service/api';
export default {
    data() {
        return {
            tableData: [],
            total: 0,
            pageSize: '',
            page: '',
            currentPage: 1,
            visible: false,
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
            const result = await getCommentCount();
            if(result.status) {
                this.total = result.total
            }
            this.getList();
        },
        async getList() {
            const result = await getAllComments({pageSize: this.pageSize, page: this.page,});
            this.tableData = result;
        },
        async handleDelete(index) {
            const result = await delComments(this.tableData[index].comment_id);
            if(result.status) {
                this.tableData.splice(index, 1);
                this.total--;
                this.$message({
                    showClose: true,
                    message: '删除成功',
                    type: 'success'
                });
            }else {
                this.$message({
                    showClose: true,
                    message: '删除失败',
                    type: 'error'
                });
            }
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
