
import { ObjectHelpers } from '@ueye/core';
import assert from 'node:assert';

describe('ObjectHelpers specifications', () => {

    describe('hasDirectProperty', () => {
        
        it('should return true if the property exists directly on the object', () => {
            assert.ok(ObjectHelpers.hasDirectProperty({ a: 1 }, 'a'));
        });

        it('should return false if the property does not exist on the object', () => {
            assert.ok(!ObjectHelpers.hasDirectProperty({ a: 1 }, 'b'));
        });

        it('should return false if the property exists on the prototype chain but not directly on the object', () => {
            const obj = Object.create({ a: 1 });
            assert.ok(!ObjectHelpers.hasDirectProperty(obj, 'a'));
        });

        it('should return false if the target is an empty object and property does not exist', () => {
            assert.ok(!ObjectHelpers.hasDirectProperty({}, 'a'));
        });

        it('should handle properties with undefined values', () => {
            assert.ok(ObjectHelpers.hasDirectProperty({ a: undefined }, 'a'));
        });

        it('should return false if property is an empty string', () => {
            assert.ok(ObjectHelpers.hasDirectProperty({ '': 1 }, ''));
        });

    });

    describe('toString', () => {

        it('should return the JSON string representation of an object', () => {
            const obj = { name: 'John', age: 30 };
            assert.strictEqual(ObjectHelpers.toString(obj), JSON.stringify(obj));
        });

        it('should handle an empty object correctly', () => {
            const obj = {};
            assert.strictEqual(ObjectHelpers.toString(obj), JSON.stringify(obj));
        });

        it('should return a string for nested objects', () => {
            const obj = { person: { name: 'John', age: 30 }, active: true };
            assert.strictEqual(ObjectHelpers.toString(obj), JSON.stringify(obj));
        });

        it('should handle objects with arrays correctly', () => {
            const obj = { names: ['John', 'Jane'], count: 2 };
            assert.strictEqual(ObjectHelpers.toString(obj), JSON.stringify(obj));
        });

    });

});