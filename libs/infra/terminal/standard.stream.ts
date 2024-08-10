
import { 
    ReturnCode,
    StandardCodes,
    StandardErrorCodes
} from './return.code';

import { 
    StandardOutput,
    StandardInput,
    StandardError
} from './interfaces';


export abstract class StandardStream {

    protected abstract executeImpl(
        stdin: StandardInput,
        stdout: StandardOutput,
        stderr: StandardError
    ): Promise<void>;


    public async execute(
        stdin: StandardInput,
        stdout: StandardOutput,
        stderr: StandardError
    ): Promise<void> {
        try {
            await this.executeImpl(stdin, stdout, stderr);
        } catch (error: unknown) {
            if(error instanceof Error) {
                this.internal(stderr, error.message)
            } else {
                this.internal<undefined>(stderr);
            }
            
        }
    }

    private outputError<T>(
        stderr: StandardError,
        errcode: StandardErrorCodes,
        msg: string,
        error: T
    ): void {
        stderr.displayError(errcode, msg, error);
    }

    private output<T>(
        stdout: StandardOutput,
        stdcode: StandardCodes,
        msg: string,
        data: T
    ): void {
        stdout.display(stdcode, msg, data);
    }


    protected ok<T>(
        stdout: StandardOutput,
        data?: T
    ): void {
        const msg = 'The program ran smoothly and successfully.';
        return this.output(stdout, ReturnCode.OK, msg, data);
    }

    protected internal<T>(
        stderr: StandardError,
        error?: T
    ): void {
        const msg = 'The program encountered an unexpected condition.';
        return this.outputError(stderr, ReturnCode.INTERNAL, msg, error);
    }

    protected idea<T>(
        stderr: StandardError,
        hint?: T
    ): void {
        const msg = 'The program understood part of the request but was unable to fully process it.';
        return this.outputError(stderr, ReturnCode.INTERNAL, msg, hint);
    }

    protected notFound<T>(
        stderr: StandardError,
        cause?: T
    ): void {
        const msg = 'The program was unable to find the requested resource.';
        return this.outputError(stderr, ReturnCode.INTERNAL, msg, cause);
    }

}