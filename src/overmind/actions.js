export const onInitializeOvermind = async ({ state, effects }, migration = false) => {
    effects.api.initialize();

    if (migration) {
        effects.api.migrateTrails();
    }

    state.trails = await effects.api.getTrails();
};
