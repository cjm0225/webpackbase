// 当前文件的绝对路径
const path = require("path")
// vue-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 入口,在vue中一般是main.js,是以package.json为准的相对路径
    entry: "./src/main.js",
    // 输出,就是在打包之后指定文件夹中存放打包后的文件
    output: {
        // resolve()方法会将当前文件的绝对路径与第二个参数进行字符串拼接
        path: path.resolve(__dirname, "../dist"),
        // [name]是指入口文件名字
        filename: "[name].js"
    },
    // 模块加载器:让webpack能够去处理其他类型的文件
    module: {
        rules: [
            // JS加载器,把浏览器不支持的ES6语法编译为浏览器支持的ES5语法
            {
                //test属性: 识别哪些文件会被转换
                test: /\.js$/,
                // 因为有些文件已经打包过了,所以不需要重新打包
                exclude: /node_modules/,
                // use属性:定义在进行转换时,需要使用哪个loader(加载器)
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // css加载器
            {
                test: /\.css$/i,
                // 作用同LESS加载器
                use: ['style-loader', 'css-loader'],
            },
            // less加载器
            {
                test: /\.less$/,
                // 需要三个加载器一起作用才能成功在浏览器上使用
                // style-loader:从 JS 中创建样式节点
                // css-loader: 转化 CSS 为 CommonJS
                // less-loader:编译 Less 为 CSS
                use: ['style-loader', 'css-loader', 'less-loader']

            },
            // vue加载器:可以在vue官方文档中找到教程
            {
                test: /\.vue$/,
                loader: 'vue-loader'

            },
            // 图片加载器
            {
                // 匹配所有格式的图片
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        // 加载器名字
                        loader: 'file-loader',
                    },
                ]
            }

        ]
    },
    // 插件
    plugins: [
        // vue的加载器插件
        new VueLoaderPlugin()
    ],
    // 文件解析
    resolve: {
        // 带有这些后缀名的文件引入的时候都不需要加上后缀名,webpack自动加上
        extensions: [".js", ".json", ".vue"]
    }

}