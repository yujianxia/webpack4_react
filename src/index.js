// // 渲染一个评论列表
// import React from 'react'; //创建组件，虚拟DOM元素，生命周期
// import ReactDOM from 'react-dom'; // 把创建好的组件和虚拟DOM放到页面上去 例如： ReactDOM.render()

// // 引入组件
// import CmtList from '@/components/CmtList'
// import BindEvent from '@/components/bindEvent'

// import { BrowserRouter as Router, Route, Link,Switch  } from "react-router-dom";

// // 路由模块化
// import modelRouter from '@/model/router'

// ReactDOM.render(
//   <div>
//     {/* <CmtList></CmtList>
//     <BindEvent></BindEvent> */}
//     <br />
//     <hr />
//     {/* 路由 */}
//     <Router>
//       <div>
//         <Link style={{ marginRight: "20px" }} to='/' >首页</Link>
//         <Link style={{ marginRight: "20px" }} to='/news' >新闻</Link>
//         <Link style={{ marginRight: "20px" }} to='/about' >About</Link>
//         <Link style={{ marginRight: "20px" }} to='/NewsDetails' >NewsDetails</Link>

//         {/* 模块化路由 子组件，通过传值的方式获取路由模块*/}
//         <Switch>
//         {
//           modelRouter.map((item) => {
//             if (item.exact) {
//               return <Route key={item.path} exact path={item.path}
//               render={(props)=>(<item.component {...props} routes={item.routes} />)}
//               />
//             } else {
//               return <Route key={item.path} path={item.path}
//               render={(props)=>(<item.component {...props} routes={item.routes} />)}/>
//             }

//           })
//         }
//         </Switch>
//       </div>
//     </Router>
//   </div>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Index() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}
const App = () => (
<Router>
  <div>
    <ul>
      <li>
        <Link to="/" replace>Home</Link>
      </li>
      <li>
        <Link to="/about/" replace>About</Link>
      </li>
      <li>
        <Link to="/users/" replace>Users</Link>
      </li>
    </ul>
    <Route path="/" exact component={Index} />
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
  </div>
</Router>
)

ReactDOM.render(<App />, document.getElementById('root'))


