
/**
    * Class representing a point in time.
*/

export class TimePoint {

    /**
        * The Unix time of the time point.
        * @private
    */

    private unixTime: number;

    /**
        * Constructs a new TimePoint instance.
        * 
        * @param timestamp - The Unix timestamp. If not provided, the current time is used.
        * @private
    */

    private constructor(timestamp?: number) {
        this.unixTime = timestamp !== undefined 
            ? timestamp 
            : Date.now();
    }

    /**
        * Creates a new TimePoint instance.
        * 
        * @param timestamp - The Unix timestamp. If not provided, the current time is used.
        * @returns  The newly created TimePoint instance.
    */

    public static create(timestamp?: number): TimePoint {
        return new TimePoint(timestamp);
    }

    /**
        * Gets the Unix time of this TimePoint.
        * 
        * @returns The Unix time.
    */

    public getUnixTime(): number {
        return this.unixTime;
    }

    /**
        * Converts a Unix time to a Date object.
        * 
         * @param unixTime - The Unix time to convert.
        * @returns The corresponding Date object.
        * @private
    */

    private toDate(unixTime: number): Date {
        return new Date(unixTime);
    }

    /**
        * Gets the ISO 8601 string representation of this TimePoint.
        * 
        * @returns The ISO string.
    */

    public getISO(): string {
        return this.toDate(this.unixTime).toISOString();
    }

    /**
        * Gets the UTC string representation of this TimePoint.
        * 
        * @returns The UTC string.
    */
   
    public getUTC(): string {
        return this.toDate(this.unixTime).toUTCString();
    }

}