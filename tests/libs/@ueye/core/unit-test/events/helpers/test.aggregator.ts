
import { 
    Events,
    Event,
    UniqueIdentifier,
    Aggregator 
} from '@ueye/core';

export class TestAggregator implements Aggregator {

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