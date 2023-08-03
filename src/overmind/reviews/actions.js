/*
An action can :

    Mutate state
    Trigger another action
    Call a side effect
    Be async
*/

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// calls the backend and loads resulting data into state
export const getReviews = async ({ state, effects }) => {
    state.loading = true;
    effects.reviews.api.initialize();
    // .trails needed due to use of namespaces
    const reviews = await effects.reviews.api.nodeQuery();
    // console.log(trails);
    state.reviews = reviews;
    state.loading = false;
};

export const onInitializeOvermind = async ({ state, actions, effects }, overmind) => {
    actions.reviews.getReviews();
};

export const migrate = async ({ effects }) => {
    effects.reviews.api.initialize();

    await effects.reviews.api.wipeReviews();
    sleep(2000);
    effects.reviews.api.migrateReviews();
};
