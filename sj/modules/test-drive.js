// es6 模块化语法 module
// js 变量或常量 它的类型由值决定
const testDrive = () => {
    // 用内置的来自于微信的API
    // 原生的api 大部分的小程序是html5 
    // webview nativeview
    // wx 
    // 性能上比原生的慢一些
    wx.showToast({
        title: '暂不支持'
    })
}
export default testDrive