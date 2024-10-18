
import { BufferHelpers } from '@ueye/core';
import assert from 'node:assert';

describe('BufferHelpers specifications', () => {

    describe('toUTF8String', () => {

        it('should convert a Buffer to a UTF-8 string', () => {
            const buffer = Buffer.from('Hello World', 'utf8');
            assert.strictEqual(BufferHelpers.toUTF8String(buffer), 'Hello World');
        });

    });

    describe('toUTF8StringTrimmed', () => {

        it('should convert a Buffer to a trimmed UTF-8 string', () => {
            const buffer = Buffer.from('  Hello World  ', 'utf8');
            assert.strictEqual(BufferHelpers.toUTF8StringTrimmed(buffer), 'Hello World');
        });

        it('should return an empty string when the Buffer only contains whitespace', () => {
            const buffer = Buffer.from('   ', 'utf8');
            assert.strictEqual(BufferHelpers.toUTF8StringTrimmed(buffer), '');
        });

    });

});