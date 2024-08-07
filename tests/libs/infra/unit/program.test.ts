
import { 
    Program, 
    ReturnCode, 
    StandardOutput, 
    StandardInput 
} from '@ueye/infra';

import { StandardOutputSimulacrum } from './mocks';

class TestProgram extends Program {
    protected async executeImpl(
        _stdin: StandardInput,
        stdout: StandardOutput
    ): Promise<void> {
        stdout.setCode(ReturnCode.OK);
        stdout.display('Test executed successfully.');
    }
}

describe('Program specifications', () => {

    let stdout: StandardOutputSimulacrum;
    let program: TestProgram;

    beforeEach(() => {
        stdout = StandardOutputSimulacrum.mock();
        program = new TestProgram();
    });

    test('execute should call executeImpl and handle errors', async () => {
        await program.execute({}, stdout);

        expect(stdout.getCode()).toBe(ReturnCode.OK);
        expect(stdout.getData()).toBe('Test executed successfully.');
    });

    test('execute should handle errors from executeImpl', async () => {
        class ErrorProgram extends Program {
            protected async executeImpl(
                _stdin: StandardInput, 
                _stdout: StandardOutput
            ): Promise<void> {
                throw new Error('Test error');
            }
        }

        const errorProgram = new ErrorProgram();
        await errorProgram.execute({}, stdout);

        expect(stdout.getCode()).toBe(ReturnCode.INTERNAL);
        expect(stdout.getData()).toBe('The program encountered an unexpected condition.');
    });

    test('internal should handle errors correctly', () => {
        program.internal(stdout, 'Some error data');
        
        expect(stdout.getCode()).toBe(ReturnCode.INTERNAL);
        expect(stdout.getData()).toBe('Some error data');
    });

    test('internal should handle errors with default message', () => {
        program.internal(stdout);
        
        expect(stdout.getCode()).toBe(ReturnCode.INTERNAL);
        expect(stdout.getData()).toBe('The program encountered an unexpected condition.');
    });

    test('output should set code and display data', () => {
        Program.output(stdout, ReturnCode.NOT_FOUND, 'Resource not found');

        expect(stdout.getCode()).toBe(ReturnCode.NOT_FOUND);
        expect(stdout.getData()).toBe('Resource not found');
    });

    test('output should handle various data types', () => {
        Program.output(stdout, ReturnCode.OK, 12345);
        expect(stdout.getCode()).toBe(ReturnCode.OK);
        expect(stdout.getData()).toBe(12345);

        Program.output(stdout, ReturnCode.OK, { key: 'value' });
        expect(stdout.getCode()).toBe(ReturnCode.OK);
        expect(stdout.getData()).toEqual({ key: 'value' });
    });
});