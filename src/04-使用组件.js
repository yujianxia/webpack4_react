// 1，导入包
import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()

// 导入组件（webpack（resolve里的extensions）没有单独配置是不能省略文件后缀的）
import Hello from "@/components/hello"

const dog = {
    name:"黄钩子",
    age:"12",
    sex:"公"
};

  ReactDOM.render(
    // 利用展开运算符 传递对象
    <Hello {...dog}/>,
    document.getElementById('root')
  );





