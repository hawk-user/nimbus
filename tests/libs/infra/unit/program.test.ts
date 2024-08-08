
import { 
    Program,
    ReturnCode,
    StandardOutput, 
    StandardInput 
} from '@ueye/infra';


class TestSubclass extends Program {
    
    protected async executeImpl(
        _stdin: StandardInput,
        _stdout: StandardOutput
    ): Promise<void> {}

    public callOk(stdout: StandardOutput, data?: any): void {
        this.ok(stdout, data);
    }

    public callIdea(stdout: StandardOutput, data?: any): void {
        this.idea(stdout, data);
    }

    public callNotFound(stdout: StandardOutput, data?: any): void {
        this.notFound(stdout, data);
    }

    public callInternal(stdout: StandardOutput, data?: any): void {
        this.internal(stdout, data);
    }
}

describe('Program specifications', () => {
    let program: TestSubclass;
    let mockStdout: jest.Mocked<StandardOutput>;
    let mockStdin: jest.Mocked<StandardInput>;

    beforeEach(() => {
        program = new TestSubclass();
        mockStdout = {
            display: jest.fn(),
        } as any;
        mockStdin = {} as any;
    });

    test('should call executeImpl and succeed', async () => {
        const executeImplSpy = jest.spyOn(program as any, 'executeImpl').mockResolvedValue(undefined);

        await program.execute(mockStdin, mockStdout);

        expect(executeImplSpy).toHaveBeenCalledWith(mockStdin, mockStdout);
        expect(mockStdout.display).not.toHaveBeenCalled(); // Ensure `internal` is not called
    });

    test('should call internal on error with correct message', async () => {
        const error = new Error('Test error');
        const executeImplSpy = jest.spyOn(program as any, 'executeImpl').mockRejectedValue(error);

        await program.execute(mockStdin, mockStdout);

        expect(executeImplSpy).toHaveBeenCalledWith(mockStdin, mockStdout);
        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program encountered an unexpected condition.',
            error.message
        );
    });

    test('should call internal with undefined on non-Error with correct message', async () => {
        const executeImplSpy = jest.spyOn(program as any, 'executeImpl').mockRejectedValue('Not an Error');

        await program.execute(mockStdin, mockStdout);

        expect(executeImplSpy).toHaveBeenCalledWith(mockStdin, mockStdout);
        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program encountered an unexpected condition.',
            undefined
        );
    });

    test('should call ok method with correct message', () => {
        program.callOk(mockStdout);

        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program ran smoothly and successfully.',
            undefined
        );
    });

    test('should call idea method with correct message', () => {
        program.callIdea(mockStdout);

        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program only partially understood what was being asked of it.',
            undefined
        );
    });

    test('should call notFound method with correct message', () => {
        program.callNotFound(mockStdout);

        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program was unable to find the requested resource.',
            undefined
        );
    });

    test('should call internal method with correct message', () => {
        program.callInternal(mockStdout);

        expect(mockStdout.display).toHaveBeenCalledWith(
            ReturnCode.INTERNAL,
            'The program encountered an unexpected condition.',
            undefined
        );
    });

});