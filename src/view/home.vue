<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" style="height: 350px;">
                        <div slot="header" class="clearfix">
                            <span>快捷方式</span>
                        </div>
                        <el-row :gutter="20" class="anniu">
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <el-button type="primary" round>
                                        <i class="el-icon-edit"></i>新增会员
                                    </el-button>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple-light">
                                    <el-button type="success" round>
                                        <i class="el-icon-delete-solid"></i>用户管理
                                    </el-button>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <el-button type="warning" round>
                                        <i class="el-icon-platform-eleme"></i>帖子管理
                                    </el-button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" class="anniu">
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <el-button type="primary" round>
                                        <i class="el-icon-edit"></i>投诉管理
                                    </el-button>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple-light">
                                    <el-button type="success" round>
                                        <i class="el-icon-delete-solid"></i>主要按钮
                                    </el-button>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <el-button type="warning" round>
                                        <i class="el-icon-platform-eleme"></i>系统设置
                                    </el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card" style="height: 350px;">
                        <div slot="header" class="clearfix">
                            <span>数据统计</span>
                        </div>
                        <el-row :gutter="50" class="sjtj">
                            <el-col class="item" :span="12">
                                新增用户/
                                <span>15</span>人
                            </el-col>
                            <el-col class="item" :span="12">
                                新增帖子/
                                <span>20</span>条
                            </el-col>
                            <el-col class="item" :span="12">
                                新增充值/
                                <span>25</span>元
                            </el-col>
                            <el-col class="item" :span="12">
                                新增投诉/
                                <span>1</span>条
                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" style="height: 350px;">
                       <iframe allowtransparency="true" frameborder="0" width="140" height="278" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=1&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=140&h=278&align=center"></iframe>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
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
    data() {
      return {
        value: new Date()
      }
    },
    components: {
        chartscolumn,
        chartsline,
        chartspie
    }
}
</script>

<style>
.el-calendar-table .el-calendar-day{
    height: 30px;
    
}
.anniu {
    margin-top: 30px;
}
.sjtj .item {
    padding: 20px;
    font-size: 14px;
}
.sjtj .item span {
    color: red;
    font-size: 32px;
}
</style>