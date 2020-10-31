import App from "./App"
import Vue from "vue"

// vue的根实例
new Vue({
    // vue实例绑定的根元素
    el: "#app",
    // 形参接收一个方法:创建一个HTML元素容器来显示项目内容
    render: (createElement) => createElement(App)
})