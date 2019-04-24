
import React, { Component } from 'react';
/**
 * —————————————————————— React 两种创建组件的区别  ——————————————————————
 * 
 *  注意：用class创建的组件有自己的私有数据和生命周期;
 *  注意：用function 创建的组件只有props，没有自己的私有数据和生命周期;
 * 
 *  用function（构造函数）创建的组件叫：“无状态组件”【用的不多】
 *  用class 创建的组件叫：“有状态组件”【常用方式】
 * 
 *  ---无状态组件和有状态组件 最本质的区别就是： 有无state属性。
 * 
 *  什么时候用无状态组件？什么时候用有状态组件？
 *   。如果组件需要有私有数据，则推荐使用：class（有状态组件）
 *   。如果组件不需要有私有数据，则推荐使用：function（无状态组件）
 *   。React官网说：无状态组件，由于没有生命周期函数和自己的state，所以他的运行效率更高。 但是实际开发项目，业务中无状态组件不常用。
 */

 

/**
 *  组件中的 props 和 state/data(react/vue) 之间的区别？
 * 
 *  props 都是外界传过来的。并且是只读的，不能重新赋值
 *  state/data 中的数据都是私有的。（ajax获取的数据，一般是私有的。 并且是可读可写的
 * 
 */

export default class Creat_class extends React.Component {
    //必须的。 render()的作用：渲染当前组件对应的虚拟DOM结构
    // render()中必须返回合法的jsx 虚拟DOM结构。  没有要返回一个null
    // render() 就是class Creat_class 的一个实例方法

    /**
     * ——————————————————————  注意  ——————————————————————
     * 
     * 在class的内部，this 表示当前组件的实例对象（es6 一致）
     */
    constructor() {
        // 调用父类的构造函数
        super();
        //这个this.state = {}; 就相当于vue组件中的data(){return{ }}   (私有的数据)
        // 可读可写的
        this.state = {
            setState: "设置的state"
        };
    }
    render() {
        // class创建的组件中，使外界传过来的 prop。  不需要单独接收，直接使用 this.props.xxx  就可以使用了
        // props 同样是只读的
        this.state.setState = "state的值被修改了";
        return <div>
            我是class创建的
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            <p>{this.props.sex}</p>
            <hr/>

            <p>{this.state.setState}</p>
        </div>
    }
}


// export default  class Creat_class_component extends Component {
//     // 使用按需映入的 Component
//     render() {
//         return <div>我按需引入的Component创建的</div>
//     }
// }