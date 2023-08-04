import { createOvermindMock } from 'overmind';
import { config } from '../..';

describe('State', () => {
    test('should be able to set state', async () => {
        const overmind = createOvermindMock(config, (state) => {
            state.author = ['Janet'];
        });
        expect(overmind.state.author).toEqual(['Janet']);
    });
});
