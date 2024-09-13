class EventEmitter {
  constructor() {
    this.clientList = {}; // 保存订阅对象的列表
  }
  on(key, callback) {
    if (!this.clientList[key]) {
      // 假设没有该订阅事件，则初始化该事件
      this.clientList[key] = [];
    }
    this.clientList[key].push(callback); // 存放订阅事件的回调函数
  }
  emit(key) {
    let data = this.clientList[key];
    if (!data || data.length === 0) return;
    data.map((item, index) => {
      item(arguments); // 将需要发布的消息作为参数，直接调用订阅时存入的回调函数
    });
  }
}

class EventEmitter {
  constructor() {
      this.handlerList = {}
  }

  addEventListener(type, handler) {
      if(!this.handlerList(type)) {
          this.handlerList[type] = [];
      }
      this.handlerList[type].push(handler);
  } 

  dispatchEvent(type, params) {
      if(!this.handlerList[type]) {
          return new Error('该事件未注册！')
      }
      this.handlerList[type].map(item => item(...params));
  }

  removeEventListener(type, handler) {
      if(!this.handlerList[type]) {
          return new Error('没有该事件')
      }
      if(!handler) {
          delete this.handlerList[type];
      }else {
          let Index = this.handlerList[type].findIndex(item => item === handler);
          if(Index === -1) {
              return new Error('无该绑定事件')
          }
          this.handlerList[type].splice(Index, 1);
          if(this.handlerList[type].length === 0) {
              delete this.handlerList[type];
          }
      }
  }
}