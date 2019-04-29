import React from 'react';
import '@/css/home.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

// import Info from '@/components/router/homeItem/info'
// import User from '@/components/router/homeItem/user'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('接受路由', this.props.routes);
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="leftBar">
                        <Link to='/home' >个人中心</Link>
                        <br />
                        <Link to='/home/User' >用户信息</Link>
                    </div>
                    <div className="rightBar">
                        {this.props.routes.map((item) => {
                            if (item.exact) {
                                return <Route key={item.path} exact path={item.path} component={item.component}/>
                            } else {
                                return <Route key={item.path} path={item.path} component={item.component}/>
                            }
                        })}

                    </div>
                </Router>
            </div>
        );
    }
}