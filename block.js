import { createHash } from 'crypto';

/**
 * Block Class
 */
export class Block {

    /**
    * Create a new Block
    * @param {*} data 
    * @param {string} prevHash 
    */
    constructor(data, prevHash) {
        this.index = 0;
        this.timestamp = Date.now();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.computeHash();
        this.nonce = 0;
    }

    /**
    * Compute Block's hash
    * @returns {string}
    */
    computeHash() {
        const strBlock = this.index + this.prevHash + this.timestamp + JSON.stringify(this.data) + this.nonce;

        return createHash('sha256').update(strBlock).digest('hex');
    }

    /**
    * Mine the new Block
    * @param {Object} newBlock
    * @param {Object} newBlock 
    * @param {Object} newBlock
    */
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.computeHash();
        }
        console.log(`Block mined, nonce: ${this.nonce}, hash: "${this.hash}`)
    }
}
