class EventEmitter {
    constructor() {
        // 定义事件容器，存放事件数组
        this.handlers = {}
    }

    // 添加事件 参数：事件名，回调函数
    addEventListener(type, handler) {
        if(!this.handlers[type]) {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    }

    // 触发事件 参数：事件名 参数
    dispatchEvent(type, params) {
        let data = this.handlers[type];
        if(!data) return new Error('未注册该事件');
        data.map((item, index) => {
            item(...params);
        })
    }

    // 移除事件 参数：事件名 要删除的回调函数，若无第二个参数则删除整个事件的订阅
    removeEventListener(type, handler) {
        if(!this.handlers[type]) {
            return new Error('事件无效')
        }

        if(!handler) {
            // 移除事件
            delete this.handlers[type];
        }else {
            const Index = this.handlers[type].findIndex(item => item === handler);
            if(Index === -1) {
                return new Error('无该绑定事件')
            }
            this.handlers[type].splice(Index,1);
            if(this.handlers[type].length === 0) {
                delete this.handlers[type]
            }
        }
    }
}