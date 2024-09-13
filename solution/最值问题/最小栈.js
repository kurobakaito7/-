
var MinStack = function() {
    this.stack = [];
    this.min_stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(val <= this.getMin() || this.min_stack.length === 0){
        this.min_stack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let out = this.stack.pop();
    if(this.getMin() === out) {
        this.min_stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};