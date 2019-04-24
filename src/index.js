// 渲染一个评论列表
import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()

// 引入组件
import CmtList from '@/components/CmtList'
import BindEvent from '@/components/bindEvent'

ReactDOM.render(
  <div>
    <CmtList></CmtList>
    <BindEvent></BindEvent>
  </div>,
  document.getElementById('root')
);





