const crypto = require('crypto');

/**
 * Block Class
 */
class Block {

    /**
     * Create a new Block
     * @param {*} data 
     * @param {string} prevHash 
     */
    constructor(data, prevHash) {
        this.timestamp = Date.now();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
    }

    /**
     * Compute Block's hash
     * @returns {string}
     */
    computeHash() {
        let strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data);

        return crypto.createHash('sha256').update(strBlock).digest('hex');
    }
}

module.exports = {
    Block
}