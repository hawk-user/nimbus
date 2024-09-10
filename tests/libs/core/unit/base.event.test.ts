
import { 
    UniqueIdentifier,
    TimePoint,
    BaseEvent 
} from '@ueye/core';

describe('BaseEvent specification', () => {

    test('should create an event with specified type and data', () => {
        const eventType = 'TestEventType';
        const eventData = { key: 'value' };

        const event = BaseEvent.create(eventType, eventData);

        expect(event).toBeDefined();
        expect(event.type).toBe(eventType);
        expect(event.data).toBe(eventData);

        expect(event.uniqueIdentifier).toBeDefined();
        expect(event.uniqueIdentifier).toBeInstanceOf(UniqueIdentifier);

        expect(event.timePoint).toBeDefined();
        expect(event.timePoint).toBeInstanceOf(TimePoint);
    });

    test('should have a unique identifier and timestamp upon creation', () => {
        const event = BaseEvent.create('TestEventType', { key: 'value' });

        const anotherEvent = BaseEvent.create('AnotherEventType', { key: 'anotherValue' });
        expect(event.uniqueIdentifier).not.toEqual(anotherEvent.uniqueIdentifier);
        expect(event.timePoint).toBeDefined();
    });

    test('should handle different types of data', () => {
        const stringData = 'string data';
        const numberData = 123;
        const objectData = { key: 'value' };

        const stringEvent = BaseEvent.create('StringEventType', stringData);
        const numberEvent = BaseEvent.create('NumberEventType', numberData);
        const objectEvent = BaseEvent.create('ObjectEventType', objectData);

        expect(stringEvent.data).toBe(stringData);
        expect(numberEvent.data).toBe(numberData);
        expect(objectEvent.data).toEqual(objectData);
    });

});