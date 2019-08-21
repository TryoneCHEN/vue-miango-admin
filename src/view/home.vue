<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>柱状图</span>
                        </div>
                        <chartscolumn id="c1" width="500px" height="300px"></chartscolumn>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>折线图</span>
                        </div>
                        <chartsline id="c2" width="500px" height="300px"></chartsline>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>饼图</span>
                        </div>
                        <chartspie id="c3" width="500px" height="300px"></chartspie>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { chartscolumn, chartsline, chartspie } from '@/components'
export default {
    components: {
        chartscolumn,
        chartsline,
        chartspie
    }
}
</script>

<style>
</style>