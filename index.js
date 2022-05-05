import { Block } from './block.js';
import { Blockchain } from './blockchain.js';
import dotenv from 'dotenv';
dotenv.config();

const chain = new Blockchain();
const a = new Block("first block");
const b = new Block("second block");
const c = new Block("third block");

console.log("Mining block 1...");
chain.addNewBlock(a);

console.log("Mining block 2...");
chain.addNewBlock(b);

console.log("Mining block 3...");
chain.addNewBlock(c);

// Tamper with the chain
chain.blockchain[1].data = "tampered block";

// Blockchain validity
console.log('Blockchain valid? ' + chain.validateBlockChain()); // will return false!

console.log(JSON.stringify(chain, null, 4));