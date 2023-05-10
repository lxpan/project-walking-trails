export const onInitializeOvermind = async ({ state, actions, effects }, overmind) => {
    const initialRoutes = effects.routes.api.loadRoutes();
    // console.log(initialRoutes);
    state.routes = initialRoutes;
};

export const getRoute = async ({ state, effects }, routeId) => {
    await effects.routes.api.initialize();
    // effects.routes.api.getData();
    effects.routes.api.getDataOnce(routeId);
};

export const migrate = async ({ state, effects }) => {
    await effects.routes.api.initialize();
    // effects.routes.api.getData();
    effects.routes.api.migrateRoutes();
};
