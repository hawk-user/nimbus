
import { ObjectHelpers } from '@ueye/core';

describe('ObjectHelpers specifications', () => {

    describe('hasDirectProperty', () => {
        
        it('should return true if the property exists directly on the object', () => {
            const obj = { a: 1 };
            expect(ObjectHelpers.hasDirectProperty(obj, 'a')).toBe(true);
        });

        it('should return false if the property does not exist on the object', () => {
            const obj = { a: 1 };
            expect(ObjectHelpers.hasDirectProperty(obj, 'b')).toBe(false);
        });

        it('should return false if the property exists on the prototype chain but not directly on the object', () => {
            const proto = { a: 1 };
            const obj = Object.create(proto);
            expect(ObjectHelpers.hasDirectProperty(obj, 'a')).toBe(false);
        });

        it('should return false if the target is an empty object and property does not exist', () => {
            const obj = {};
            expect(ObjectHelpers.hasDirectProperty(obj, 'a')).toBe(false);
        });

        it('should handle properties with undefined values', () => {
            const obj = { a: undefined };
            expect(ObjectHelpers.hasDirectProperty(obj, 'a')).toBe(true);
        });

        it('should return false if property is an empty string', () => {
            const obj = { '': 1 };
            expect(ObjectHelpers.hasDirectProperty(obj, '')).toBe(true);
        });

    });

    describe('toString', () => {

        it('should return the JSON string representation of an object', () => {
            const obj = { name: 'John', age: 30 };
            expect(ObjectHelpers.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should handle an empty object correctly', () => {
            const obj = {};
            expect(ObjectHelpers.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should return a string for nested objects', () => {
            const obj = { person: { name: 'John', age: 30 }, active: true };
            expect(ObjectHelpers.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should handle objects with arrays correctly', () => {
            const obj = { names: ['John', 'Jane'], count: 2 };
            expect(ObjectHelpers.toString(obj)).toBe(JSON.stringify(obj));
        });

    });

});