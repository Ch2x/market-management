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
                    <el-popover width="160" v-model="visible" trigger="manual">
                        <p>确定删除吗？</p>
                        <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                        </div>
                        <el-button slot="reference" size="mini" @click="visible = true">删除</el-button>
                    </el-popover>
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
import { getAllComments, getCommentCount } from '../service/api';
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
