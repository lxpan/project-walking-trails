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

export const onInitializeOvermind = async ({ state, effects }) => {
    // effects.api.initialize();
    // state.trails = await effects.api.getTrails();
};

// calls the backend and loads resulting data into state
export const getTrails = async ({ state, effects }) => {
    state.loading = true;
    effects.api.initialize();
    const trails = await effects.api.nodeQuery();
    state.trails = trails;
    state.loading = false;
};

export const migrateTrailsData = async ({ effects }) => {
    effects.api.initialize();

    await effects.api.wipeTrails();
    sleep(5000);
    effects.api.migrateTrails();
};
