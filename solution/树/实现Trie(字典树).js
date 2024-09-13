var Trie = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children;
    for(const ch of word) {
        if(!node[ch]){
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children;
    for(const ch of prefix) {
        if(!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node;
}

Trie.prototype.search = function(word) {
    let node = this.searchPrefix(word);
    return node !== undefined && node.isEnd !== undefined;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix);
};