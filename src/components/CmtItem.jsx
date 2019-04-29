import React from 'react'; //创建组件，虚拟DOM元素，生命周期

// 样式抽离 方式一 (合并成一个对象)
const styles = {
  divStyle:{border:"1px dashed #ccc",marginBottom:"10px"},
  h4Style:{fontSize:"16px"}
}

// 样式抽离 方式二（封装成js文件）
import styles1 from '@/components/styles'; 


// 样式抽离 方式三 （css样式表）
// 这种方式相当于在页面上写style标签
// 导入的css，全局生效。样式可能会冲突
// react如何像vue中（<style scoped></style>）解决样式冲突？
// import csss from '@/css/index.scss'; //导入css样式表
// console.log('1212212',csss);

export default function CmtItem(poros) {
  return <div style={styles.divStyle}>
    <h1 style={styles1.h4Style}>评论人：{poros.user}</h1>
    {/* <p className={csss.pStyle}>评论内容：{poros.content}</p> */}

  </div>
}