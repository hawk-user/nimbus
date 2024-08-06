
import { StandardCodes, StandardOutput } from '@ueye/infra';

export class StandardOutputSimulacrum implements StandardOutput {

    private code: StandardCodes | undefined;
    private data: any;

    setCode(stdcode: StandardCodes): this {
        this.code = stdcode;
        return this;
    }

    display<T>(data?: T): void {
        this.data = data;
    }

    getCode(): StandardCodes | undefined {
        return this.code;
    }

    getData(): any {
        return this.data;
    }

    public static mock(): StandardOutputSimulacrum {
        return new StandardOutputSimulacrum();
    }

}