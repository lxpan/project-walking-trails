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

export const onInitializeOvermind = async ({ state, actions, effects }, overmind) => {
    const initialRoutes = effects.trails.api.loadRoutes();
    state.routes = initialRoutes;
};

// calls the backend and loads resulting data into state
export const getTrails = async ({ state, effects }) => {
    state.loading = true;
    effects.trails.api.initialize();
    // .trails needed due to use of namespaces
    const trails = await effects.trails.api.nodeQuery();
    state.trails = trails;
    state.loading = false;
};

export const migrateTrailsData = async ({ effects }) => {
    effects.api.initialize();

    await effects.api.wipeTrails();
    sleep(5000);
    effects.api.migrateTrails();
};
