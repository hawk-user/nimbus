
import { TextHelpers } from '@ueye/core';
import assert from 'node:assert';

describe('TextHelpers specifications', () => {

    describe('areIdentical', () => {

        it('should return true for identical strings', () => {
            assert.ok(TextHelpers.areIdentical('identical', 'identical'));
        });
    
        it('should return false for different strings', () => {
            assert.ok(!TextHelpers.areIdentical('identical', 'different'));
        });
    
        it('should return false for strings with different cases', () => {
            assert.ok(!TextHelpers.areIdentical('lower', 'Lower'))
        });
    
        it('should return false for empty string compared to non-empty string', () => {
            assert.ok(!TextHelpers.areIdentical('', 'nonempty'))
        });
    
        it('should return true for two empty strings', () => {
            assert.ok(TextHelpers.areIdentical('', ''))
        });

    });

    describe('generateUniqueId', () => {

        it('should generate an identifier as a string with length between 13 and 20 characters', () => {
            const id = (TextHelpers as any).generateUniqueId();

            assert.ok(typeof id === 'string');
            assert.ok(id.length >= 13);
            assert.ok(id.length <= 20);
        });

        it('should generate different identifiers in quick succession', () => {
            const id1 = TextHelpers.generateUniqueId();
            const id2 = TextHelpers.generateUniqueId();

            assert.notStrictEqual(id1, id2);
        });

    });

    describe('isEmpty', () => {
        
        it('should return true when text is an empty string', () => {
            assert.ok(TextHelpers.isEmpty(''));
        });

        it('should return false when text is not an empty string', () => {
            assert.ok(!TextHelpers.isEmpty('Oupsi'));
        });

        it('should return false when text is a string with spaces', () => {
            assert.ok(!TextHelpers.isEmpty('   '));
        });

    });

    describe('isNotEmpty', () => {
        
        it('should return true when text is not an empty string', () => {
            assert.ok(TextHelpers.isNotEmpty('notEmpty'));
        });

        it('should return false when text is an empty string', () => {
            assert.ok(!TextHelpers.isNotEmpty(''));
        });

        it('should return true when text is a string with spaces', () => {
            assert.ok(TextHelpers.isNotEmpty('   '));
        });

    });

    describe('stripWhitespace', () => {

        it('should remove leading and trailing whitespace from a string', () => {
            assert.strictEqual(TextHelpers.stripWhitespace('  Hello World  '), 'Hello World');
        });

        it('should return the same string if there is no leading or trailing whitespace', () => {
            assert.strictEqual(TextHelpers.stripWhitespace('HelloWorld'), 'HelloWorld');
        });

        it('should return an empty string if the input is only whitespace', () => {
            assert.strictEqual(TextHelpers.stripWhitespace(''), '');
        });

        it('should handle strings with only leading whitespace', () => {
            assert.strictEqual(TextHelpers.stripWhitespace('   Hello'), 'Hello');
        });

        it('should handle strings with only trailing whitespace', () => {
            assert.strictEqual(TextHelpers.stripWhitespace('Hello   '), 'Hello');
        });

    });

    describe('trimAndAddTrailingSpace', () => {

        it('should remove leading and trailing whitespace and add a trailing space', () => {
            assert.strictEqual(TextHelpers.trimAndAddTrailingSpace('  hello you  '), 'hello you ');
        });

        it('should add a trailing space to an already trimmed string', () => {
            assert.strictEqual(TextHelpers.trimAndAddTrailingSpace('yo'), 'yo ');
        });

        it('should handle an empty string correctly', () => {
            assert.strictEqual(TextHelpers.trimAndAddTrailingSpace(''), ' ');
        });

    });

});