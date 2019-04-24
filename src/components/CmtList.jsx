import React from 'react'; //创建组件，虚拟DOM元素，生命周期
import CmtItem from '@/components/CmtItem' //导入子组件
import cssObj from '@/css/index.scss';  //导入自定义样式表

import 'bootstrap/dist/css//bootstrap.css'; //导入第三方样式表
// 暴露出去
export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            setList: [
                { id: 1, user: "老大", content: "老大说的" },
                { id: 2, user: "老二", content: "老二说的" },
                { id: 3, user: "老三", content: "老三说的" },
                { id: 4, user: "老四", content: "老四说的" },
            ]
        }
    } 
    render() {
        return <div>
            <h1 style={{fontSize:"30px",textAlign:"center"}} className="color_red">这是评论列表的</h1>
            <p className={["test",cssObj.color_red].join(' ')}>评论列表小标题</p>
            <button className="btn btn-primary">按钮</button>
            {this.state.setList.map(item => {
                return <CmtItem {...item} key={item.id}></CmtItem>
            })}
        </div>
    }
}