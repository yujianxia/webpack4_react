import React from 'react';

import { Link } from "react-router-dom";

// import NewsDetails from './components/News_details'

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: "1",
                    title: "我是新闻111"
                },
                {
                    id: "2",
                    title: "我是新闻222"
                },
                {
                    id: "3",
                    title: "我是新闻333"
                },
                {
                    id: "4",
                    title: "我是新闻444"
                }
            ]
        };
    }
    render() {
        return (
            <div>动态路由
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (<li key={item.id}>
                                <Link to={`/NewsDetails/${item.id}`}> {item.title}</Link>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}