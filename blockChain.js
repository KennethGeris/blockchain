import Block from './block.js';

/**
 * Blockchain class
 */
export default class Blockchain {

    /**
     * Create a new BlockChain by initializing the chain starting with a Genesis Block 
     */
    constructor() {
        this.blockchain = [this.createGenesisBlock()];
    }

    /**
     * Add a new Block to the chain
     * @param {Object} newBlock 
     */
    addNewBlock(newBlock) {
        newBlock.prevHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }

    /**
     * Create a Genesis Block to start
     * @returns {Object}
     */
    createGenesisBlock() {
        return new Block("Genesis Block", 0);
    }

    /**
     * Get the last Block on the chain
     * @returns {Object}
     */
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    /**
     * Validate the BlockChain by checking all the Blocks
     * @returns {Boolean}
     */
    validateBlockChain() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currBlock = this.blockchain[i];
            const prevBlock = this.blockchain[i - 1];

            // Check if hash is correctly computed
            if (currBlock.hash !== currBlock.computeHash()) {
                return false;
            }

            // Check previous Block's hash
            if (currBlock.prevHash !== prevBlock.hash) {
                return false;
            }

        }
        return true;
    }
}