import React from 'react'; //创建组件，虚拟DOM元素，生命周期
// 暴露出去
export default function Clock(props) {
    console.log('props',props);
    return <h1>{props.name}{props.age}{props.sex}</h1>
}