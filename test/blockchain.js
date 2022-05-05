
import { expect } from 'chai';
import { Block } from '../block.js';
import { Blockchain } from '../blockchain.js';
process.env.DIFFICULTY = 5;

describe('Blockchain Class', () => {
    it('Initialize a Blockchain', () => {
        const chain = new Blockchain();

        expect(chain.blockchain).to.be.an('array');
    });

    it('Add Block to chain', () => {
        const chain = new Blockchain();

        let b1 = new Block("Second Block");

        chain.addNewBlock(b1);

        expect(chain.blockchain[1]).to.be.equal(b1);
    });

    it('Calculate computed previous Block hash', () => {
        const chain = new Blockchain();

        let b1 = new Block("Second Block");
        let b2 = new Block("Third Block");

        chain.addNewBlock(b1);
        chain.addNewBlock(b2);

        expect(chain.blockchain[0].hash).to.be.equal(chain.blockchain[1].prevHash);
    });

    it('Verify Blockchain validity', () => {
        const chain = new Blockchain();

        let b1 = new Block("Second Block");
        let b2 = new Block("Third Block");

        chain.addNewBlock(b1);
        chain.addNewBlock(b2);

        expect(chain.validateBlockChain()).to.be.true;
    });

    it('Tempered Blockchain', () => {
        const chain = new Blockchain();

        let b1 = new Block("Second Block");
        let b2 = new Block("Third Block");

        chain.addNewBlock(b1);
        chain.blockchain[1].data = "Tempered Block";
        chain.addNewBlock(b2);

        expect(chain.validateBlockChain()).to.be.false;
    });
});