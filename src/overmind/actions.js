export const onInitializeOvermind = async ({ state, effects, actions }) => {
    effects.api.initialize();
    state.trails = await effects.api.getTrails();
};
