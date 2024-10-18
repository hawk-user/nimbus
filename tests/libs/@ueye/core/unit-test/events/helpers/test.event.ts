
import { 
    Event,
    UniqueIdentifier,
    TimePoint,
} from '@ueye/core';

export class TestEvent implements Event {
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