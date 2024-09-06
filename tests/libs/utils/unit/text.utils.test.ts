
import { TextUtils } from '@ueye/utils';

describe('TextUtils specifications', () => {

    describe('areIdentical', () => {
        it('should return true for identical strings', () => {
            expect(TextUtils.areIdentical('identical', 'identical')).toBe(true);
        });
    
        it('should return false for different strings', () => {
            expect(TextUtils.areIdentical('identical', 'different')).toBe(false);
        });
    
        it('should return false for strings with different cases', () => {
            expect(TextUtils.areIdentical('lower', 'Lower')).toBe(false);
        });
    
        it('should return false for empty string compared to non-empty string', () => {
            expect(TextUtils.areIdentical('', 'nonempty')).toBe(false);
        });
    
        it('should return true for two empty strings', () => {
            expect(TextUtils.areIdentical('', '')).toBe(true);
        });

    });

    describe('generateUniqueId', () => {

        it('should generate a unique identifier', () => {
            const id1 = TextUtils.generateUniqueId();
            const id2 = TextUtils.generateUniqueId();
            
            expect(id1).toBeDefined();
            expect(id2).toBeDefined();
            expect(id1).not.toBe(id2);
        });

        it('should generate an identifier as a string with length between 13 and 20 characters', () => {
            const id = (TextUtils as any).generateUniqueId();

            expect(typeof id).toBe('string');
            expect(id.length).toBeGreaterThanOrEqual(13);
            expect(id.length).toBeLessThanOrEqual(20);
        });

        it('should generate different identifiers in quick succession', () => {
            const id1 = TextUtils.generateUniqueId();
            const id2 = TextUtils.generateUniqueId();

            expect(id1).not.toBe(id2);
        });
    });

    describe('isEmpty', () => {
        
        it('should return true when text is an empty string', () => {
            expect(TextUtils.isEmpty('')).toBe(true);
        });

        it('should return false when text is not an empty string', () => {
            expect(TextUtils.isEmpty('Oupsi')).toBe(false);
        });

        it('should return false when text is a string with spaces', () => {
            expect(TextUtils.isEmpty('   ')).toBe(false);
        });

    });

    describe('stripWhitespace', () => {

        it('should remove leading and trailing whitespace from a string', () => {
            const text = '  Hello World  ';
            expect(TextUtils.stripWhitespace(text)).toBe('Hello World');
        });

        it('should return the same string if there is no leading or trailing whitespace', () => {
            const text = 'HelloWorld';
            expect(TextUtils.stripWhitespace(text)).toBe('HelloWorld');
        });

        it('should return an empty string if the input is only whitespace', () => {
            const text = '   ';
            expect(TextUtils.stripWhitespace(text)).toBe('');
        });

        it('should handle strings with only leading whitespace', () => {
            const text = '   Hello';
            expect(TextUtils.stripWhitespace(text)).toBe('Hello');
        });

        it('should handle strings with only trailing whitespace', () => {
            const text = 'Hello   ';
            expect(TextUtils.stripWhitespace(text)).toBe('Hello');
        });
    });

});