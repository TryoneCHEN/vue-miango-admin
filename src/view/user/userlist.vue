<template>
    <div>
        <div style="margin:10px 0">
            <el-button type="primary" plain @click="dialogVisible = true">添加用户</el-button>
        </div>
        <el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%">
            <el-form label-width="80px">
                <el-form-item label="日期">
                    <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item  label="性别">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-table :data="tableData" style="width: 100%" border v-loading="loading">
            <el-table-column align="center" prop="date" label="日期" width="180"></el-table-column>
            <el-table-column align="center" prop="title" label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- 法一:加一个自定义的 :formatter="fmtGender"-->
            <el-table-column align="center" prop="sex" :formatter="fmtGender" label="性别"></el-table-column>
            <!-- 法二自定义模板 -->
            <!-- <el-table-column prop="sex" label="性别">
                <template slot-scope="scope">
                    {{scope.row.sex==0?'男':'女'}}
                </template>
            </el-table-column>-->

            <el-table-column align="center" prop="address" label="地址"></el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini">详情</el-button>
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
import axios from 'axios'
export default {
    data() {
        return {
            form:{
                date:"",
                name:"",
                sex:1,
                address:""
            },
            tableData: [],
            loading: false,
            dialogVisible: false
        }
    },
    methods: {
        fmtGender(row) {
            return ['女', '男'][row.sex] || '未知'
        },
        deleteRow(index, rows) {
            this.$confirm(`此操作将永久删除这一行?是否继续?`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$success('删除成功!')
                    rows.splice(index, 1)
                })
                .catch(() => {
                    this.$fail('已取消删除')
                })
        },
        getUserList() {
            this.loading = true
            setTimeout(() => {
                axios.get('/mock/news').then(res => {
                    this.tableData = res.data
                    this.loading = false
                })
            }, 2000)
        }
    },
    created() {
        this.getUserList()
    }
}
</script>

<style>
</style>