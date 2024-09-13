var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.outStack.length){
        this.inToOut();
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.outStack.length){
        this.inToOut();
    }
    return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0&&this.outStack.length === 0; 
};

MyQueue.prototype.inToOut = function() {
    while(this.inStack.length){
        this.outStack.push(this.inStack.pop())
    }
}