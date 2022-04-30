import Block from './block.js';
import Blockchain from './blockchain.js';

const chain = new Blockchain();
let a = new Block("first block");
let b = new Block("second block");

chain.addNewBlock(a);
chain.addNewBlock(b);

const validity = chain.validateBlockChain();

console.log(validity);
console.log(JSON.stringify(chain, null, 4));