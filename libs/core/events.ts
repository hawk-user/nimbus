
import { ObjectUtils, ArrayUtils } from '@ueye/utils';
import { UniqueIdentifier } from './unique.identifier';
import { TimePoint } from './time.point';

/**
    * Represents an event with a unique identifier
    * and a timestamp.
*/

export interface Event {

    /**
        * The unique identifier associated with the event,
        * which is used to uniquely identify the event across the system.
    */

    uniqueIdentifier: UniqueIdentifier;

    /**
        * The time point that represents when the event actually took place.
    */

    timePoint: TimePoint;

}

/**
    * A function type that handles an event.
    * @param event The event to handle.
*/

export type EventHandler = (event: Event) => void;

/**
    * A mapping of event types to their associated handlers.
    * Each event type has an array of handlers that respond
    * to that type of event.
*/

export type EventMap = Record<string, EventHandler[]>;

/**
    * Interface representing an Aggregator of events.
*/

export interface Aggregator {

    /**
        * Gets the unique identifier for the aggregator.
        * @returns The unique identifier.
    */

    getUniqueIdentifier(): UniqueIdentifier;

    /**
        * Retrieves the list of events.
        * @returns An array of events.
    */

    getEvents(): Event[];

    /**
        * Adds an event to the aggregator.
        * @param event - The event to add.
    */

    addEvent(event: Event): void;

    /**
        * Compares this aggregator to another aggregator.
        * @param comparison - The other aggregator to compare to.
        * @returns True if the aggregators are equal, false otherwise.
    */

    isEqualTo(comparison: Aggregator): boolean;

}

/**
    * A class to manage and dispatch events.
*/

export class Events {

    /**
        * A map that stores event handlers indexed by event name.
        * @private
    */

    private static map: EventMap = {};

    /**
        * A list of aggregates that need to be processed.
        * @private
    */

    private static aggregates: Aggregator[] = [];

    /**
        * Checks if an event type is registered.
        * @param name - The name of the event type.
        * @returns True if the event type is registered, false otherwise.
        * @template E - The type of the event name.
        * @private
    */

    private static isRegistered<E extends string>(name: E): boolean {
        return ObjectUtils.hasDirectProperty(this.map, name);
    }

    /**
        * Checks if an event type is not registered.
        * @param name - The name of the event type.
        * @returns True if the event type is not registered, false otherwise.
        * @template L - The type of the event name.
        * @private
    */

    private static isNotRegistered<L extends string>(name: L): boolean {
        return !this.isRegistered(name);
    }

    /**
        * Finds an aggregate by its unique identifier.
        * @param identifier - The unique identifier of the aggregate.
        * @returns The aggregate if found, undefined otherwise.
        * @private
    */

    private static findAggregateByIdentifier(
        identifier: UniqueIdentifier
    ): Aggregator | undefined {
        return ArrayUtils.findByPredicate(
            this.aggregates,
            aggregate => aggregate.getUniqueIdentifier().isEqualTo(identifier)
        )
    }

    /**
        * Checks if an aggregate exists in the list of aggregates.
        * @param aggregate - The aggregate to check.
        * @returns True if the aggregate exists, false otherwise.
        * @private
    */

    private static aggregateExists(aggregate: Aggregator): boolean {
        return Boolean(this.findAggregateByIdentifier(aggregate.getUniqueIdentifier()));
    }

    /**
        * Checks if an aggregate does not exist in the list of aggregates.
        * @param aggregate - The aggregate to check.
        * @returns True if the aggregate does not exist, false otherwise.
        * @private
    */

    private static aggregateDoesNotExist(aggregate: Aggregator): boolean {
        return !this.aggregateExists(aggregate);
    }

    /**
        * Dispatches an event to its registered handlers.
        * @param event - The event to dispatch.
        * @protected
    */

    protected static dispatchEvent(event: Event): void {
        const name = event.constructor.name;
        const handlers = this.map[name];

        if (this.isRegistered(name) && handlers) {
            handlers.forEach(handle => handle(event));
        }
    }

    /**
        * Dispatches all pending events associated with an aggregate.
        * @param aggregate - The aggregate whose events are to be dispatched.
        * @private
    */

    private static dispatchPendingEvents(
        aggregate: Aggregator
    ): void {
        aggregate.getEvents().forEach(event =>
            this.dispatchEvent(event)
        )
    }

    /**
        * Removes a marked aggregate from the list of aggregates.
        * @param aggregate - The aggregate to remove.
        * @private
    */

    private static removeMarkedAggregate(
        aggregate: Aggregator
    ): void {
        ArrayUtils.removeByPredicate(
            this.aggregates, 
            aggr => aggr.isEqualTo(aggregate)
        );
    }

    /**
        * Registers an event type with a handler.
        * @param name - The name of the event type.
        * @param handler - The handler function for the event.
    */

    public static registerEvent(
        name: string,
        handler: EventHandler
    ): void {
        if (this.isNotRegistered(name)) this.map[name] = [];
        ArrayUtils.safePush(this.map[name], handler)
    }

    /**
        * Clears all registered events.
    */

    public static clearEvents(): void {
        this.map = {};
    }

    /**
        * Marks an aggregate for dispatch.
        * @param aggregate - The aggregate to mark for dispatch.
    */

    public static markAggregateForDispatch(
        aggregate: Aggregator
    ): void {
        if (this.aggregateDoesNotExist(aggregate)) {
            this.aggregates.push(aggregate);
        }
    }

    /**
        * Dispatches events for an aggregate identified by the event's unique identifier.
        * @param event - The event containing the unique identifier of the aggregate.
    */

    public static dispatchEventForAggregate(event: Event): void {
        const identifier = UniqueIdentifier.create(event.uniqueIdentifier.toValue());
        const aggregate = this.findAggregateByIdentifier(identifier);

        if(aggregate) {
            this.dispatchPendingEvents(aggregate);
            this.clearEvents();
            this.removeMarkedAggregate(aggregate);
        }
    }

    /**
        * Clears all marked aggregates.
    */

    public static clearAggregates(): void {
        this.aggregates = [];
    }

}