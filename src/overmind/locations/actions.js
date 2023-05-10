function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// calls the backend and loads resulting data into state
export const getLocations = async ({ state, effects }) => {
    // state.loading = true;
    effects.locations.api.initialize();
    // .trails needed due to use of namespaces
    const locations = await effects.locations.api.nodeQuery();
    // console.log(trails);
    state.locations = locations;
    // state.loading = false;
};

export const onInitializeOvermind = async ({ state, actions, effects }, overmind) => {
    actions.locations.getLocations();
};

export const migrate = async ({ effects }) => {
    effects.locations.api.initialize();

    await effects.locations.api.wipeTrails();
    sleep(2000);
    effects.locations.api.migrateTrails();
};
