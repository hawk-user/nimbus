
import { 
    StandardError,
    StandardInput,
    StandardOutput,
    StandardStream,
    StreamIdentifier 
} from '@ueye/infra/terminal';

class SayHello extends StandardStream {

  protected async executeImpl(
      stdin: StandardInput,
      stdout: StandardOutput,
      stderr: StandardError
  ): Promise<void> {
    try {

        const name = await this.promptForImput(
            { stdin, stdout },
            'What\'s your name? '
        );
        
        stdout.write(`Hello ${name}!\n`);
        this.closeWithDone(stdout, `Done in ${process.uptime()}s`);
        
    } catch (error) {
        if (error instanceof Error) {
            this.CloseWithUnspecifiedError(stderr, error);
        } else {
            this.CloseWithUnspecifiedError(stderr);
        }
    }
    
  }

}

const stdin: StandardInput = {
    identifier: StreamIdentifier.INPUT,
    on: process.stdin.on.bind(process.stdin)
}

const stderr: StandardError = { 
    write: process.stderr.write.bind(process.stderr),
    identifier: StreamIdentifier.ERROR
}

const stdout: StandardOutput = { 
    write: process.stdout.write.bind(process.stdout),
    identifier: StreamIdentifier.OUTPUT,
    fallback: stderr
}

new SayHello().execute(stdin, stdout, stderr);