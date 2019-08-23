// mock.js

// 引入mockjs
import Mock from 'mockjs'
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = [
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
];
// 请求该url，就可以返回newsList
Mock.mock("/mock/news", produceNewsData); // 后面讲这个api的使用细节
