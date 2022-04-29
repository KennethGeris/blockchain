const { Block } = require('./block');
const { Blockchain } = require('./blockChain');

let a = new Block("first block");
let b = new Block("second block");

let chain = new Blockchain();

chain.addNewBlock(a);
chain.addNewBlock(b);

const validity = chain.validateBlockChain();

console.log(validity);
console.log(JSON.stringify(chain, null, 4));