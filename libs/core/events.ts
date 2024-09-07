
/**
    * Represents an event with a unique identifier
    * and a timestamp.
*/

export interface Event {

    /**
        * A unique identifier for the event.
    */

    uniqueIdentifier: string;

    /**
        * The date and time when the event occurred.
    */

    occurredAt: Date;

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