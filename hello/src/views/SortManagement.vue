<template>
    <div>
        <el-button @click="dialogVisible = true"   >添加分类</el-button>
        <el-dialog title="添加分类" :visible.sync="dialogVisible" width="25%">
            分类名称：
            <el-input
                placeholder="请输入分类名称"
                v-model="sort">
            </el-input>
             <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd">确 定</el-button>
            </span>
        </el-dialog>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="sort_id"
                label="分类ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="sortName"
                label="分类名称"
                width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger"  @click="handleModify(scope.$index)">修 改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="修改分类名称" :visible.sync="dialogVisible1" width="25%">
            分类名称：
            <el-input
                v-model="target.sortName"
            >
            </el-input>
             <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="handleChange">确 定</el-button>
            </span>
        </el-dialog>
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
import { getAllSorts, getSortCount, addSort, editSort } from '../service/api';
export default {
    data() {
        return {
            tableData: [],
            total: 0,
            pageSize: '',
            page: '',
            currentPage: 1,
            dialogVisible: false,
            dialogVisible1: false,
            sort: '',
            target: {},
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
            const result = await getSortCount();
            if(result.status) {
                this.total = result.total
            }
            this.getList();
        },
        async getList() {
            const result = await getAllSorts({pageSize: this.pageSize, page: this.page,});
            this.tableData = result;
        },
        async handleAdd() {
            const result = await addSort({sortName: this.sort});
            console.log(result);
            if(result.status) {
                this.sort = '';
                this.total++;
                this.getList();
                this.$message({
                    showClose: true,
                    message: '添加成功',
                    type: 'success'
                });
                this.dialogVisible = false;
            } else {
                this.$message({
                    showClose: true,
                    message: '添加失败',
                    type: 'error'
                });
            }
            
        },
        handleModify(index) {
            this.target  = this.tableData[index];
            this.dialogVisible1 = true;
        },
        async handleChange() {
            const result = await editSort({sort_id: this.target.sort_id, sortName: this.target.sortName});
            console.log(result);
            if(result.status == 1) {
                this.dialogVisible1 = false;
                this.target = {};
                this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                });
            } else {
                this.$message({
                    showClose: true,
                    message: '修改失败',
                    type: 'error'
                });
            }
        }
    }
}
</script>
<style>
 
</style>
