import { expect } from 'chai';
import { Block } from '../block.js';

describe('Block Class', () => {
    it('Create a new Block', () => {
        let b1 = new Block("create a new block");
        expect(b1).to.be.an.instanceof(Block);
    });

    it('Create a Genesis Block', () => {
        let b1 = new Block({
            "firstName": "block",
            "lastName": "chain"
        }, 0);

        expect(b1.data).not.equal(null);
        expect(b1.timestamp).to.be.an('number');
        expect(b1.hash).not.equal(null);
        expect(b1.prevHash).equal(0);
    });
});


