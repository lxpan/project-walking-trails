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
export const getTrails = async ({ state, effects }) => {
    state.loading = true;
    effects.trails.api.initialize();
    // .trails needed due to use of namespaces
    const trails = await effects.trails.api.nodeQuery();
    // console.log(trails);
    state.trails = trails;
    state.loading = false;
};

export const onInitializeOvermind = async ({ state, actions, effects }, overmind) => {
    actions.trails.getTrails();
};

export const migrate = async ({ effects }) => {
    effects.trails.api.initialize();

    await effects.trails.api.wipeTrails();
    // sleep(5000);
    effects.trails.api.migrateTrails();
};
