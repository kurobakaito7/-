// hash路由
class HashRouter {
    constructor() {
        this.routes = {};// 存储路由映射的哈希表
        window.addEventListener('hashchange', this.load.bind(this), false); // 添加hashchange事件监听器，调用load方法
    }

    register(hash, callback = function(){}) {
        // 注册路由，将特定的hash值映射到一个回调函数
        this.routes[hash] = callback;
    }
    registerIndex(callback = function() {}) {
        // 注册首页的回调函数
        this.routes['index'] = callback;
    }
    load() { // 路由加载函数
        let hash = location.hash.slice(1); // 获取当前URL的hash值，去除开头的#  去掉# 方为路由
        let handler;  // 将要执行的处理函数
        if(!hash) { // 如果hash为空，加载首页
            handler = this.routes['index'];
        }else { // 否则，加载对应hash的页面
            handler = this.routes[hash];
        }
        handler && handler.call(this); // 如果handler存在，执行它
    }
}