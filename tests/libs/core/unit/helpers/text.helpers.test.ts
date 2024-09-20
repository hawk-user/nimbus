
import { TextHelpers } from '@ueye/core';

describe('TextHelpers specifications', () => {

    describe('areIdentical', () => {
        
        it('should return true for identical strings', () => {
            expect(TextHelpers.areIdentical('identical', 'identical')).toBe(true);
        });
    
        it('should return false for different strings', () => {
            expect(TextHelpers.areIdentical('identical', 'different')).toBe(false);
        });
    
        it('should return false for strings with different cases', () => {
            expect(TextHelpers.areIdentical('lower', 'Lower')).toBe(false);
        });
    
        it('should return false for empty string compared to non-empty string', () => {
            expect(TextHelpers.areIdentical('', 'nonempty')).toBe(false);
        });
    
        it('should return true for two empty strings', () => {
            expect(TextHelpers.areIdentical('', '')).toBe(true);
        });

    });

    describe('generateUniqueId', () => {

        it('should generate a unique identifier', () => {
            const id1 = TextHelpers.generateUniqueId();
            const id2 = TextHelpers.generateUniqueId();
            
            expect(id1).toBeDefined();
            expect(id2).toBeDefined();
            expect(id1).not.toBe(id2);
        });

        it('should generate an identifier as a string with length between 13 and 20 characters', () => {
            const id = (TextHelpers as any).generateUniqueId();

            expect(typeof id).toBe('string');
            expect(id.length).toBeGreaterThanOrEqual(13);
            expect(id.length).toBeLessThanOrEqual(20);
        });

        it('should generate different identifiers in quick succession', () => {
            const id1 = TextHelpers.generateUniqueId();
            const id2 = TextHelpers.generateUniqueId();

            expect(id1).not.toBe(id2);
        });
    });

    describe('isEmpty', () => {
        
        it('should return true when text is an empty string', () => {
            expect(TextHelpers.isEmpty('')).toBe(true);
        });

        it('should return false when text is not an empty string', () => {
            expect(TextHelpers.isEmpty('Oupsi')).toBe(false);
        });

        it('should return false when text is a string with spaces', () => {
            expect(TextHelpers.isEmpty('   ')).toBe(false);
        });

    });

    describe('stripWhitespace', () => {

        it('should remove leading and trailing whitespace from a string', () => {
            const text = '  Hello World  ';
            expect(TextHelpers.stripWhitespace(text)).toBe('Hello World');
        });

        it('should return the same string if there is no leading or trailing whitespace', () => {
            const text = 'HelloWorld';
            expect(TextHelpers.stripWhitespace(text)).toBe('HelloWorld');
        });

        it('should return an empty string if the input is only whitespace', () => {
            const text = '   ';
            expect(TextHelpers.stripWhitespace(text)).toBe('');
        });

        it('should handle strings with only leading whitespace', () => {
            const text = '   Hello';
            expect(TextHelpers.stripWhitespace(text)).toBe('Hello');
        });

        it('should handle strings with only trailing whitespace', () => {
            const text = 'Hello   ';
            expect(TextHelpers.stripWhitespace(text)).toBe('Hello');
        });
    });

});