import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()


// createElement() 三个参数 1.标签 2.属性 3.文本值
const myH1 = React.createElement('h1', {title:"啊！五环", id:"abc"}, '你比四环多一环')
const myH2 = React.createElement('div', null, myH1) //嵌套

ReactDOM.render(
    myH2,
    document.getElementById('root')
);