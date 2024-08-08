
import { Program, StandardOutput } from '@ueye/infra';
import { ConsoleLogger } from '@ueye/core';

const logger = ConsoleLogger.create()

const stdoutImpl: StandardOutput = {
    display: (stdcode, msg, data) => logger.debug({ stdcode, msg, data })
};

class HelloWorld extends Program {
    protected async executeImpl(
        _stdin: object,
        stdout: StandardOutput
    ): Promise<void> {
        return this.ok(stdout, { msg: 'Hello World!' })
    }

    static run(
        stdin: object,
        stdout: StandardOutput
    ) {
        new HelloWorld().execute(stdin, stdout);
    }
}

HelloWorld.run({}, stdoutImpl);