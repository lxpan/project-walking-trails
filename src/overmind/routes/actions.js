export const getRoute = async ({ state, effects }, routeId) => {
    await effects.routes.api.initialize();
    // effects.routes.api.getData();
    effects.routes.api.getDataOnce(routeId);
};

export const writeRoutesToDatabase = async ({ state, effects }) => {
    await effects.routes.api.initialize();
    // effects.routes.api.getData();
    effects.routes.api.migrateRoutes();
};
