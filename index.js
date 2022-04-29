const { Block } = require('./block');
const { Blockchain } = require('./blockChain');

let a = new Block("first block");
let b = new Block("second block");

let chain = new Blockchain();

chain.addNewBlock(a);
chain.addNewBlock(b);

console.log(chain);

const validity = chain.validateBlockChain();

console.log(validity);