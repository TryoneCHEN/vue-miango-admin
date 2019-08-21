<template>
    <div style="position: relative;">
        <el-menu
            :default-active="activeIndex"
            background-color="#333"
            text-color="#fff"
            active-text-color="#ffd04b"
            class="el-menu-vertical-demo"
            :collapse="iscollapse"
            router
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" route="/user">用户列表</el-menu-item>
                    <el-menu-item index="1-2" route="/">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <i
            class="allow"
            :class="!iscollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"
            @click="iscollapse=!iscollapse"
        ></i>
    </div>
</template>


<script>
export default {
    data() {
        return {
            iscollapse: false,
            activeIndex: '2'
        }
    },
    watch: {
        iscollapse(newval,oldval){
            this.$emit("collapse",newval)
        }
    },
   
}
</script>

<style scoped>
.allow {
    position: absolute;
    bottom: -260px;
    left:calc(50%-25px);
    width: 20px;
    height: 20px;
    /* background: red; */
    font-size: 20px;
    color: antiquewhite;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>