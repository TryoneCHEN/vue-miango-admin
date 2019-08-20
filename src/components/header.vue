<template>
    <div
        style="padding:0 20px;background-color:#333;display:flex;align-items: center;justify-content: space-between"
    >
        <div style="color:#fff；font-size:22px">爱国</div>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
        
    }
}
</script>

<style>
</style>