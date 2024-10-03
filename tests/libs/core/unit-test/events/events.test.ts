
import { Events, UniqueIdentifier } from '@ueye/core';
import { TestEvent, TestAggregator } from './helpers';
import sinon from 'sinon';
import assert from 'node:assert';

describe('Events specifications', () => {

    var event: TestEvent;
    var aggregator: TestAggregator;

    beforeEach(() => {
        Events.clearEvents();
        Events.clearAggregates();
        event = new TestEvent('1', Date.now());
        aggregator = new TestAggregator(UniqueIdentifier.create('1'));
    });

    it('should register an event with a handler', () => {
        const handler = sinon.fake();
        Events.registerEvent('TestEvent', handler);
        assert.ok(Events['map']['TestEvent']?.includes(handler));
    });

    it('should dispatch an event to its handlers', () => {
        const handler = sinon.fake();
        Events.registerEvent('TestEvent', handler);
        Events['dispatchEvent'](event);
        assert.ok(handler.calledWith(event));
    });

    it('should mark aggregate for dispatch', () => {
        Events.markAggregateForDispatch(aggregator);
        assert.ok(Events['aggregates'].includes(aggregator));
    });

    it('should dispatch events for an aggregate', () => {
        const handler = sinon.fake();
        aggregator.addEvent(event);

        Events.registerEvent('TestEvent', handler);
        assert.ok(aggregator.getEvents().includes(event));

        Events.dispatchEventForAggregate(event);
        assert.ok(handler.calledWith(event));
        assert.ok(!Events['aggregates'].includes(aggregator))
    });

    it('should not register the same event type multiple times', () => {
        const handler1 = sinon.fake();
        const handler2 = sinon.fake();

        Events.registerEvent('TestEvent', handler1);
        Events.registerEvent('TestEvent', handler2);

        const handlers = Events['map']['TestEvent'];
        assert.strictEqual(handlers?.length, 2);
        assert.ok(handlers?.includes(handler1));
        assert.ok(handlers?.includes(handler2));
    });

    it('should clear all events', () => {
        const handler = sinon.fake();
        Events.registerEvent('TestEvent', handler);
        Events.clearEvents();
        assert.ok(!Events['map']['TestEvent'])
    });

    it('should clear all marked aggregates', () => {
        Events.markAggregateForDispatch(aggregator);
        Events.clearAggregates();
        assert.ok(!Events['aggregates'].includes(aggregator))
    });

    it('should not add the same aggregate twice', () => {
        Events.markAggregateForDispatch(aggregator);
        Events.markAggregateForDispatch(aggregator);
        const aggregates = Events['aggregates'];
        assert.strictEqual(aggregates.length, 1);
    });

});