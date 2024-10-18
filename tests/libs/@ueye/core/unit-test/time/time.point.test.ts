
import { TimePoint } from '@ueye/core';
import assert from 'node:assert';

describe('TimePoint', () => {

    it('should create a TimePoint instance with the current time if no timestamp is provided', () => {
        const now = Date.now();
        const timePoint = TimePoint.create();
        assert.ok(timePoint.getUnixTime() >= now);
        assert.ok(timePoint.getUnixTime() <= now + 1000);
    });

    it('should create a TimePoint instance with the specified timestamp', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        assert.strictEqual(timePoint.getUnixTime(), timestamp);
    });

    it('should return the correct ISO string representation', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        assert.strictEqual(timePoint.getISO(), '2021-01-01T00:00:00.000Z');
    });

    it('should return the correct UTC string representation', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        assert.strictEqual(timePoint.getUTC(), 'Fri, 01 Jan 2021 00:00:00 GMT');
    });

});