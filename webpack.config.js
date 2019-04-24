// 向外暴露一个打包的配置对象
// 因为webpack是基于Node构建的，所以webpack是支持所有的Node语法的。

// webpack-dev-server 打包好的main.js是托管到内存中(内存读写快)，所以我们项目的根目录下看不到
// 但是，我们可以认为在项目的跟目录中有一个看不见的main.js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成 index 页面的插件


module.exports = {
    // 在webpack4.X中有一个很大的特性，就是  约定大于配置（目的就是：减小配置文件的大小）， 
    // 约定：默认的打包入口文件路径是 src->index.js  出口文件 dist->main.js
    mode: "development", //development(开发模式，不压缩) production(生产模式，压缩)
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', //就是html文件的文件名，默认是index.html
            template: path.join(__dirname, "./src/index.html"), //指定你生成的文件所依赖哪一个html文件模板
            // inject 表示引入打包好的js文件放在页面的那个位置， react要放在底部，要是放在头部的话，此时DOM还没有建立完毕，会报错 not a DOM element
            inject: 'body' //inject有四个值： true body head false
            //true 默认值，script标签位于html文件的 body 底部
            //body script标签位于html文件的 body 底部
            //head script标签位于html文件的 head中
            //false 不插入生成的js文件，这个几乎不会用到的
        })
    ],

    module: {
        // 所有第三方模块的配置文件规则
        // webpack默认只能打包js文件 其他类型文件无法主动处理，所以要配置第三方 loader
        rules: [
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/ //千万不要忘记添加 exclude 排除项
            },
            // 处理scss
            {

                test: /\.scss$/,
                // use标准顺序 => 从右往左开始识别，右边处理完之后，交给前一项处理。直到第一项处理完，再打包
                // css-loader之后可以通过 ? 的方式追加参数，
                // ?modules 就是为普通的css样式表，启用模块化
                // &localIdentName 自定义命名规则
                /** 
                 * &localIdentName 可选参数
                 * [path] 样式表相对于项目根目录所在的路径
                 * [name] 样式表文件名称
                 * [local] 表示样式的类名定义名称
                 * [hash:length] 表示length位(默认32位)hash值, length表示截取多少位
                */
                //  这样写的话 就会把第三方的样式表也模块化了，不方便写样式名字。 
                // ---------------所以我们规定：---------------
                // 自己写的样式表都用 .scss 或者 .less 来写。
                // 第三方的样式表都是 .css 结尾的。
                // 所以我们就不要给 .css 结尾的文件启用模块化，只为 .scss 或者 .less 启用模块化

                use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader']
            },
            // 处理字体文件
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader'
            },
            // 处理css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //表示这几个文件后缀可以不用写，webpack会根据这个数组的顺序尝试添加后缀名
        alias: {
            '@': path.join(__dirname, './src')  //配置项目的根路径   @ 就表示根目录中的src文件
        }
    },
}