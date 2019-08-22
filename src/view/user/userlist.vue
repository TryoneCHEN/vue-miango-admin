<template>
    <div>
        <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <!-- 法一:加一个自定义的 :formatter="fmtGender"-->
            <el-table-column prop="sex" :formatter="fmtGender" label="性别"></el-table-column>
            <!-- 法二自定义模板 -->
            <!-- <el-table-column prop="sex" label="性别">
                <template slot-scope="scope">
                    {{scope.row.sex==0?'男':'女'}}
                </template>
            </el-table-column> -->

            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini">编辑</el-button>
                    <el-button
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        type="text"
                        size="mini"
                    >移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align:center;margin:10px 0;">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex: 2,
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    sex: 1,
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1516 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    sex: 0,
                    address: '上海市普陀区金沙江路 1519 弄'
                }
            ]
        }
    },
    methods: {
        fmtGender(row){
            return ["女","男"][row.sex]||'未知';
        },
        deleteRow(index, rows) {
            this.$confirm(`此操作将永久删除这一行?是否继续?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                    rows.splice(index, 1)
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        }
    }
}
</script>

<style>
</style>