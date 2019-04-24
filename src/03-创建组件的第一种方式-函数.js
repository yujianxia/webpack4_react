// 1，导入包
import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()

// 如果在一个组件中return一个 null。 表示这个组件是空的，什么都不会渲染
// 组件的名称首字母必须是大写的
function Clock(props) {
    console.log('props',props);
    // 无论是react或者vue。组件中的props永远都是只读的，不能被重新赋值。
    // props.name = '小黄'; //报错（props属性是只读的）
    return <h1>{props.name}{props.age}{props.sex}</h1>
}

const dog = {
    name:"黄钩子",
    age:"12",
    sex:"公"
};

  ReactDOM.render(
    // 利用展开运算符 传递对象
    <Clock {...dog}/>,
    document.getElementById('root')
  );





