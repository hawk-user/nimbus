
import { UniqueIdentifier } from '@ueye/core';

describe('UniqueIdentifier specifications', () => {

    describe('create', () => {

        it('should create an instance with a provided identifier', () => {
            const customId = 'customid';
            const instance = UniqueIdentifier.create(customId);
            expect(instance).toBeInstanceOf(UniqueIdentifier);

            const anotherInstance = UniqueIdentifier.create(customId);
            expect(instance.isEqualTo(anotherInstance)).toBe(true);
        });

        it('should create an instance with a generated identifier if none provided', () => {
            const instance = UniqueIdentifier.create();
            expect(instance).toBeInstanceOf(UniqueIdentifier);

            const anotherInstance = UniqueIdentifier.create();
            expect(instance.isEqualTo(anotherInstance)).toBe(false);
        });

    });

    describe('constructor', () => {

        it('should initialize with a provided identifier', () => {
            const customId = 'provided-id';
            const instance = UniqueIdentifier.create(customId);
            expect(instance).toBeInstanceOf(UniqueIdentifier);

            const anotherInstance = UniqueIdentifier.create(customId);
            expect(instance.isEqualTo(anotherInstance)).toBe(true);
        });

        it('should initialize with a generated identifier if none provided', () => {
            const instance = UniqueIdentifier.create();
            expect(instance).toBeInstanceOf(UniqueIdentifier);

            const anotherInstance = UniqueIdentifier.create();
            expect(instance.isEqualTo(anotherInstance)).toBe(false);
        });

    });

});