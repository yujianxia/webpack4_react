// 1，导入包
import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()

// 2，创建虚拟DOM
const div1 = React.createElement('div', { title: "我是title" }, "我是一个div")

// 在js文件中不能直接使用jsx； 要用 babel 来转换
// 注意：jsx语法的本质还是在运行的时候，被转换成了React.createElement()的形式来执行
let num = 12;
let str = "你好中国";
let bol = true;
let title = "我是title";
const h1 = <h1 onClick={h1Click}>我是h1</h1>;
function h1Click() {
    console.log('我被点击了', );
}
// jsx数组
const arr = [
    <h2 key="1">我是h2</h2>,
    <h3 key="2">我是h3</h3>
]
// 普通数组（推荐用map方式）
const strArr = ['羽毛球', '足球', '篮球'];
const listItems = strArr.map((item) =>
    <i key={item}>{item}</i>
);
console.log('listItems', listItems)

// 什么情况下需要使用 {} 语法？ 当我们需要在 jsx 中使用 js表达式的时候就需要把js代码写在 {} 中
const div2 = <div id="divID">
    <p>{num + 12}</p>
    <hr />
    {str}
    <hr />
    {bol ? "真的" : "假的"}
    <hr />
    <p title={title}>title</p>
    <hr />
    {h1}
    <hr />
    {arr}
    <hr />
    {listItems}
</div>

// 3,调用 render 渲染函数

ReactDOM.render(div2, document.getElementById('root'));