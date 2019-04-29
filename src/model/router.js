
import Home from '@/components/router/Home'
import News from '@/components/router/News'
import About from '@/components/router/About'
import NewsDetails from '@/components/router/News_details'

// 子组件
import Info from '@/components/router/homeItem/info'
import User from '@/components/router/homeItem/user'

let routers = [
    { 
        path: '/', 
        component: Home, 
        exact: true,
        routes:[ // 嵌套路由的配置
            { 
                path: '/home/',
                component: Info 
            },{
                path: '/home/User',
                component: User 
            },
        ]
    },
    { 
        path: '/news',
        component: News 
    },
    { 
        path: '/about', 
        component: About 
    },
    { 
        path: '/NewsDetails/:id',
         component: NewsDetails 
    }
];
export default routers;