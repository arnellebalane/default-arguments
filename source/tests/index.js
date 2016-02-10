import assert from 'assert';
import sinon from 'sinon';
import defaultArguments from '../index';


let fn = (a, b, c) => a + b + c;


describe('defaultArguments', () => {
    it('should return a function', () => {
        let wrapped = defaultArguments(fn);
        assert.equal(typeof wrapped, 'function');
    });


    it('wrapper function should call given function', () => {
        let fnspy = sinon.spy(fn);
        let wrapped = defaultArguments(fnspy);
        let result = wrapped(1, 2, 3);
        assert.ok(fnspy.called);
    });


    it('default arguments should be used for missing arguments', () => {
        let wrapped = defaultArguments(fn, { c: 5 });
        let wrappedResult = wrapped(1, 2);
        let fnResult = fn(1, 2, 5);
        assert.strictEqual(wrappedResult, fnResult);
    });


    it('default arguments should be overriden by given arguments', () => {
        let wrapped = defaultArguments(fn, { c: 5 });
        let wrappedResult = wrapped(1, 2, 3);
        let fnResult = fn(1, 2, 3);
        assert.strictEqual(wrappedResult, fnResult);
    });


    it('wrapper and given functions should return the same results', () => {
        let wrapped = defaultArguments(fn);
        let wrappedResult = wrapped(1, 2, 3);
        let fnResult = fn(1, 2, 3);
        assert.strictEqual(wrappedResult, fnResult);
    });
});
