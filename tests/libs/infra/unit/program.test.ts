
import { Program } from '@ueye/infra';

describe('Program specifications', () => {

    it('should create an Program instance', () => {
        const program = Program.create();
        expect(program).toBeInstanceOf(Program);
    });


})