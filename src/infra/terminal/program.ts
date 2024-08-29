
import { 
    StandardError,
    StandardInput,
    StandardOutput,
    StandardStream,
    StreamIdentifier 
} from '@ueye/infra/terminal'

class SayHello extends StandardStream {

  protected async executeImpl(
      _stdin: StandardInput,
      stdout: StandardOutput,
      stderr: StandardError
  ): Promise<void> {
    try {
        this.closeWithDone(stdout);
      
    } catch (error) {
        this.closeWithInternalError(stderr);
    }
    
  }

}

const stdin: StandardInput = { 
    identifier: StreamIdentifier.INPUT
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