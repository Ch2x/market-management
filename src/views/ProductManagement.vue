<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="商品描述:">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                prop="title"
                label="商品标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格￥"
                width="180">
            </el-table-column>
            <el-table-column
                prop="sort"
                label="分类"
                width="180">
            </el-table-column>
            <el-table-column
                prop="releaseTime"
                label="发布时间"
                width="180">
            </el-table-column>
            <el-table-column
                label="状态"
                width="180">
                <template slot-scope="scope">
                    <el-tag
                        :type="scope.row.isBuy ? 'danger' : 'success'"
                        close-transition>{{scope.row.isBuy?'已出售':'未出售'}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    :disabled="scope.row.isBuy"
                    :type="scope.row.isCheck ? 'danger' : 'success'"
                    @click="handleCheck(scope.$index)">{{scope.row.isCheck ? '下架' : '通过'}}</el-button>
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
import { getAllProducts, getProductsCount, changeProductChecked } from '../service/api';
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
            const result = await getProductsCount();
            if(result.status) {
                this.total = result.total
            }
            this.getList();
        },
        async getList() {
            const result = await getAllProducts({pageSize: this.pageSize, page: this.page,});
            this.tableData = result;
        },
        async handleCheck(index) {
            const result = await changeProductChecked(this.tableData[index].product_id, this.tableData[index].isCheck);
            if(result.status === 1) {
                this.$message({
                    showClose: true,
                    message: '更改成功',
                    type: 'success'
                });
                this.tableData[index].isCheck = !this.tableData[index].isCheck;
            }
        }
    }
}
</script>
<style>

</style>
