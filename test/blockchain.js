
const expect = require('chai').expect;
const { Block } = require('../block');
const { Blockchain } = require('../blockchain');

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

});