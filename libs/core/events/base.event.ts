
import { Event } from './events';
import { UniqueIdentifier, TimePoint } from '@ueye/core';

/**
    * Represents a generic event.
    * 
    * @template K - The type of data associated with the event.
*/

export class BaseEvent<K>  implements Event<K> {

    uniqueIdentifier: UniqueIdentifier;

    timePoint: TimePoint;

    type: string;

    data: K;

    protected constructor(type: string, data: K) {
        this.uniqueIdentifier = UniqueIdentifier.create();
        this.timePoint = TimePoint.create();
        this.type = type
        this.data = data;
    }

    /**
        * Creates a new `BaseEvent` with the specified data.
        * 
        * @template Q - The type of data associated with the event.
        * @param data - The data that triggered the event.
        * @returns A new instance of `BaseEvent` with the specified data.
    */

    public static create<Q>(type: string, data: Q): BaseEvent<Q> {
        return new BaseEvent(type, data);
    }

}