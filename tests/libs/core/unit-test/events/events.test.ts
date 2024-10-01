
import { 
    Events,
    Event,
    UniqueIdentifier,
    TimePoint,
    Aggregator 
} from '@ueye/core';

class TestEvent implements Event {
    uniqueIdentifier: UniqueIdentifier;
    timePoint: TimePoint;
    type = 'TestEvent';
    data: unknown;

    constructor(id: string, timestamp?: number) {
        this.uniqueIdentifier = UniqueIdentifier.create(id);
        this.timePoint = TimePoint.create(timestamp);
        this.data = {};
    }
}

class TestAggregator implements Aggregator {
    private uniqueIdentifier: UniqueIdentifier;
    private events: Event[] = [];

    constructor(id: UniqueIdentifier) {
        this.uniqueIdentifier = id;
    }

    getUniqueIdentifier(): UniqueIdentifier {
        return this.uniqueIdentifier;
    }

    getEvents(): Event[] {
        return this.events;
    }

    addEvent(event: Event): void {
        this.events.push(event);
        Events.markAggregateForDispatch(this);
    }

    isEqualTo(other: Aggregator): boolean {
        return this.uniqueIdentifier.isEqualTo(other.getUniqueIdentifier());
    }
}

describe('Events specifications', () => {
    let event: TestEvent;
    let aggregator: TestAggregator;

    beforeEach(() => {
        Events.clearEvents();
        Events.clearAggregates();
        event = new TestEvent('1', Date.now());
        aggregator = new TestAggregator(UniqueIdentifier.create('1'));
    });

    test('should register an event with a handler', () => {
        const handler = jest.fn();
        Events.registerEvent('TestEvent', handler);
        expect(Events['map']['TestEvent']).toContain(handler);
    });

    test('should dispatch an event to its handlers', () => {
        const handler = jest.fn();
        Events.registerEvent('TestEvent', handler);
        Events['dispatchEvent'](event);
        expect(handler).toHaveBeenCalledWith(event);
    });

    test('should mark aggregate for dispatch', () => {
        Events.markAggregateForDispatch(aggregator);
        expect(Events['aggregates']).toContain(aggregator);
    });

    test('should dispatch events for an aggregate', () => {
        const handler = jest.fn();
        aggregator.addEvent(event);

        Events.registerEvent('TestEvent', handler);
        expect(aggregator.getEvents()).toContain(event);

        Events.dispatchEventForAggregate(event);
        expect(handler).toHaveBeenCalledWith(event);
        expect(Events['aggregates']).not.toContain(aggregator);
    });

    test('should not register the same event type multiple times', () => {
        const handler1 = jest.fn();
        const handler2 = jest.fn();

        Events.registerEvent('TestEvent', handler1);
        Events.registerEvent('TestEvent', handler2);

        const handlers = Events['map']['TestEvent'];
        expect(handlers).toContain(handler1);
        expect(handlers).toContain(handler2);
    });

    test('should clear all events', () => {
        const handler = jest.fn();
        Events.registerEvent('TestEvent', handler);
        Events.clearEvents();
        expect(Events['map']['TestEvent']).toBeUndefined();
    });

    test('should clear all marked aggregates', () => {
        Events.markAggregateForDispatch(aggregator);
        Events.clearAggregates();
        expect(Events['aggregates']).not.toContain(aggregator);
    });

    test('should not add the same aggregate twice', () => {
        Events.markAggregateForDispatch(aggregator);
        Events.markAggregateForDispatch(aggregator);
        const aggregates = Events['aggregates'];
        expect(aggregates.length).toBe(1);
    });

});