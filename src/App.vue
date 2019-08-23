<template>
    <div id="app">
        <myheader />
        <section style="display:flex;flex:1;">
            <div style="background-color:#333;text-align:center;">
                <myleft @collapse="leftcollapse" />
            </div>
            <article
                :style="{width:'calc(100vw - '+leftW+'px)'}"
                style="padding:10px;box-sizing: border-box;"
                
            >
                <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:10px 0">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>

<script>
import { myheader, myleft } from './components'
export default {
    name: 'app',
    data() {
        return {
            leftW: 201
        }
    },
    components: {
        myheader,
        myleft
    },
    methods: {
        leftcollapse(val) {
            this.leftW = val ? 65 : 201
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
    
}
</style>
