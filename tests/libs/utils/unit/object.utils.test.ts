
import { ObjectUtils } from '@ueye/utils';

describe('ObjectUtils specifications', () => {

    describe('toString', () => {

        it('should return the JSON string representation of an object', () => {
            const obj = { name: 'John', age: 30 };
            expect(ObjectUtils.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should handle an empty object correctly', () => {
            const obj = {};
            expect(ObjectUtils.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should return a string for nested objects', () => {
            const obj = { person: { name: 'John', age: 30 }, active: true };
            expect(ObjectUtils.toString(obj)).toBe(JSON.stringify(obj));
        });

        it('should handle objects with arrays correctly', () => {
            const obj = { names: ['John', 'Jane'], count: 2 };
            expect(ObjectUtils.toString(obj)).toBe(JSON.stringify(obj));
        });

    });

});