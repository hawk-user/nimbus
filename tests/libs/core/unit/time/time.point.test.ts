
import { TimePoint } from '@ueye/core';

describe('TimePoint', () => {

    test('should create a TimePoint instance with the current time if no timestamp is provided', () => {
        const now = Date.now();
        const timePoint = TimePoint.create();
        expect(timePoint.getUnixTime()).toBeGreaterThanOrEqual(now);
        expect(timePoint.getUnixTime()).toBeLessThanOrEqual(now + 1000);
    });

    test('should create a TimePoint instance with the specified timestamp', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        expect(timePoint.getUnixTime()).toBe(timestamp);
    });

    test('should return the correct Unix time', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        expect(timePoint.getUnixTime()).toBe(timestamp);
    });

    test('should return the correct ISO string representation', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        expect(timePoint.getISO()).toBe('2021-01-01T00:00:00.000Z');
    });

    test('should return the correct UTC string representation', () => {
        const timestamp = 1609459200000;
        const timePoint = TimePoint.create(timestamp);
        expect(timePoint.getUTC()).toBe('Fri, 01 Jan 2021 00:00:00 GMT');
    });

});