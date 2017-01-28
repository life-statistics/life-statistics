import { expect } from 'chai';
import * as utils from './';


describe('utils', () => {
    describe('is function check', () => {
        it('should return true only if a function is passed', () => {
            expect(utils.isFunction(true)).to.equal(false);
            expect(utils.isFunction()).to.equal(false);
            expect(utils.isFunction(null)).to.equal(false);
            expect(utils.isFunction({})).to.equal(false);
            expect(utils.isFunction('function')).to.equal(false);
            
            expect(utils.isFunction(()=>{console.log('this is a function')})).to.equal(true);
        });
    });
});