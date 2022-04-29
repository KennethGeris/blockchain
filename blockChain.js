const { Block } = require('./block');

/**
 * Blockchain class
 */
class Blockchain {

    /**
     * Create a new BlockChain by initializing the chain starting with a Genesis Block 
     */
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
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
    startGenesisBlock() {
        return new Block("genesis block", 0);
    }

    /**
     * Get the last Block on the chain
     * @returns {Object}
     */
    obtainLatestBlock() {
        console.log(this.blockchain.length);
        return this.blockchain[this.blockchain.length - 1];
    }

    /**
     * Validate the BlockChain by checking all the Blocks
     * @returns {Boolean}
     */
    validateBlockChain() {
        for (let i = 1; i < this.blockchain.length; i++) { // Start after the Genesis Block
            const currBlock = this.blockchain[i];
            const prevBlock = this.blockchain[i - 1];

            // Is the hash correctly computed?
            if (currBlock.hash !== currBlock.computeHash()) {
                return false;
            }

            // Is the hash matching the previous Block's hash
            if (currBlock.prevHash !== prevBlock.hash) {
                return false;
            }

        }
        return true;
    }
}

module.exports = {
    Blockchain
};
