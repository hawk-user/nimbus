
import { UniqueIdentifier } from '@ueye/core';
import assert from 'node:assert';

describe('UniqueIdentifier specifications', () => {

    describe('create', () => {

        it('should create an instance with a provided identifier', () => {
            const instance = UniqueIdentifier.create('customid');
            assert.ok(instance instanceof UniqueIdentifier);
        });

        it('should create an instance with a generated identifier if none provided', () => {
            const instance = UniqueIdentifier.create();
            assert.ok(instance instanceof UniqueIdentifier);
        });

    });

    describe('isEqualTo', () => {

        it('should return true for instances with the same identifier', () => {
            const customId = 'customid';
            const instance = UniqueIdentifier.create(customId);
            const anotherInstance = UniqueIdentifier.create(customId);
            assert.ok(instance.isEqualTo(anotherInstance));
        });

        it('should return false for instances with different identifiers', () => {
            const instance = UniqueIdentifier.create();
            const anotherInstance = UniqueIdentifier.create();
            assert.ok(!instance.isEqualTo(anotherInstance));
        });

    });

});