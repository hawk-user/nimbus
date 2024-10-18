
import { 
    BaseEvent, 
    TimePoint, 
    UniqueIdentifier
} from '@ueye/core';

import assert from 'node:assert';

describe('BaseEvent specification', () => {

    it('should create an event with specified type and data', () => {
        const eventType = 'TestEventType';
        const eventData = { key: 'value' };
        const event = BaseEvent.create(eventType, eventData);

        assert.ok(event);
        assert.strictEqual(event.type, eventType);
        assert.strictEqual(event.data, eventData);

        assert.ok(event.uniqueIdentifier);
        assert.ok(event.uniqueIdentifier instanceof UniqueIdentifier);

        assert.ok(event.timePoint);
        assert.ok(event.timePoint instanceof TimePoint);

    });

    it('should have a unique identifier and timestamp upon creation', () => {
        const event = BaseEvent.create('TestEventType', { key: 'value' });
        const anotherEvent = BaseEvent.create('AnotherEventType', { key: 'anotherValue' });

        assert.notStrictEqual(event.uniqueIdentifier, anotherEvent.uniqueIdentifier)
        assert.ok(event.timePoint);
    });

    it('should handle different types of data', () => {
        const stringData = 'string data';
        const numberData = 123;
        const objectData = { key: 'value' };

        const stringEvent = BaseEvent.create('StringEventType', stringData);
        const numberEvent = BaseEvent.create('NumberEventType', numberData);
        const objectEvent = BaseEvent.create('ObjectEventType', objectData);

        assert.strictEqual(stringEvent.data, stringData);
        assert.strictEqual(numberEvent.data, numberData);
        assert.strictEqual(objectEvent.data, objectData);
    });

});