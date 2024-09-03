
import { 
    StreamActions,
    StreamActionResolvers 
} from '@ueye/infra/terminal';

describe('StreamActions specifications', () => {

    let actionResolvers: StreamActionResolvers;

    beforeEach(() => {
        actionResolvers = {
            onSuccess: jest.fn(),
            onError: jest.fn()
        };
    });

  describe('toCleanString', () => {

    const cleanBuffer = Buffer.from('   Done  \n ', 'utf8');
    const errorBuffer = Buffer.from('invalid');

    it('should call onSuccess with cleaned UTF-8 string on successful conversion', () => {
        StreamActions.toCleanString(cleanBuffer, actionResolvers);

        expect(actionResolvers.onSuccess).toHaveBeenCalledWith('Done');
        expect(actionResolvers.onError).not.toHaveBeenCalled();
    });

    it('should call onError if an error occurs during conversion', () => {

        jest.spyOn(errorBuffer, 'toString').mockImplementation(() => {
            throw new Error('Conversion error');
        });

        StreamActions.toCleanString(errorBuffer, actionResolvers);

        expect(actionResolvers.onError).toHaveBeenCalledWith(new Error('Conversion error'));
        expect(actionResolvers.onSuccess).not.toHaveBeenCalled();
    });

    });

});