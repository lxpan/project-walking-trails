import { api } from '../effects';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Api', () => {
    beforeEach(() => {
        api.initialize();
    });

    test.skip('should get reviews by querying firestore', async () => {
        api.initialize();
        const reviews = await api.nodeQuery();
        console.log(reviews);
    });

    test('should wipe reviews collection', async () => {
        // api.initialize();
        await api.wipeReviews();
        await sleep(500);
        const reviews = await api.nodeQuery();
        expect(Object.keys(reviews).length).toEqual(0);
    });

    test('should write seed review data', async () => {
        // api.initialize();
        await api.migrateReviews();
        await sleep(500);
        const reviews = await api.nodeQuery();
        expect(Object.keys(reviews).length).toEqual(2);
    });

    test('write document to collection', async () => {
        // api.initialize();
        const document = {
            'test-trail-route': [
                {
                    username: 'Foobar 2000',
                    rating: 5,
                    comment: 'An extremely good trail 10/10',
                    date: '1888-01-01',
                },
            ],
        };

        await api.writeDocument(Object.keys(document)[0], document);

        const reviews = await api.nodeQuery();
        expect(Object.keys(reviews)).toContain('test-trail-route');
        console.log(Object.keys(reviews));
    });

    test('should add 1 review to review document', () => undefined);
});
