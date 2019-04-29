import React from 'react';

export default class NewsDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // 生命周期函数里面获取传过来的值
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>我是新闻详情页面，我的参数这个
            </div>
        );
    }
}