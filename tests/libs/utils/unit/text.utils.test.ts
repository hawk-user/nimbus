
import { TextUtils } from '@ueye/utils';

describe('TextUtils specifications', () => {

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

});