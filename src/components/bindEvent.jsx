import React from 'react'; //创建组件，虚拟DOM元素，生命周期
// #region 介绍react绑定事件和this.setState({})
// // 暴露出去
// export default class BindEvent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             info: "初始值",
//             name: "张三",
//             age: 123
//         }
//         // this.btnFun = this.btnFun.bind(this);
//     }
//     btnFun = (e, val) => {
//         // 在react中，想要改变this.state中的值，要调用this.setState({})方法， 不能直接this.state.xxx = "";
//         // 注意： 在this.setState({})方法中， 只会把对应的state状态更新，不会覆盖其他的state状态
//         this.setState({
//             info: val
//         }, function () {
//             // 注意：this.setState({})方法是异步的（React 为了优化性能，有可能会将多个 setState() 调用合并为一次更新）
//             // ,改变之后想要立即获取this.state的值， 要在this.setState({},function(){})的回调函数中获取。
//             console.log('更新之后的state', this.state);
//         });
//         console.log('e', e.target.innerText); // 传入的 this
//     }
//     render() {
//         return <div>
//             <hr />
//             BindEvent组件
//             <hr />
//             <p>{this.state.info}</p>
//             <button onClick={(e) => this.btnFun(e, "猪八盖")}>组件按钮</button>
//         </div>
//     }
// }
// #endregion


// #region '绑定文本框的值----受控组件和非受控组件'

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            info: "初始值",
            text: "11111"
        }
    }


    componentDidMount() {
        fetch("https://www.duba.com/main3_pannel.html?pi=4&index=2&type=https&_=20190423143128")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('获取的数据', result);
                },
                (error) => {
                    console.log('获取数据出错', error);
                }
            )
    }

    btnFun = (e, val) => {
        this.setState({
            info: val
        }, function () {
            console.log('更新之后的state', this.state);
        });
    }
    inputChange = (e) => {
        this.setState({
            info: e.target.value
        });
    }
    // ref使用
    btnFunRef = (e, val) => {
        this.setState({
            text: val
        }, function () {
            console.log('ref更新之后的state', this.state);
        });
    }
    inputChangeRef = () => {
        this.setState({
            text: this.refs.txt.value
        });
    }
    render() {
        return <div>
            <hr />
            绑定文本框的值
            <hr />
            {/* 当给input绑定了value之后， 要么同时提供一个readonly。要么，绑定一个onchange事件。 不然会报错 */}
            <input type="text" value={this.state.info} onChange={(e) => this.inputChange(e)} />
            <button onClick={(e) => this.btnFun(e, "猪八盖")}>组件按钮</button>
            <br />
            <br />

            <input type="text" value={this.state.text} onChange={() => this.inputChangeRef()} ref='txt' />
            <button onClick={(e) => this.btnFunRef(e, "ref用法")}>ref用法</button>
            <br />
            <br />
            <br />
            <br />
        </div>
    }
    
}
function confirm() {
        Modal.confirm({
          title: 'Confirm',
          content: 'Bla bla ...',
          okText: '确认',
          cancelText: '取消',
        });
      }
// #endregion