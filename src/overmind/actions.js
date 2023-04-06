export const onInitializeOvermind = async ({ state, effects }, migration = false) => {
    effects.api.initialize();

    if (migration) {
        await effects.api.wipeTrails();
        effects.api.migrateTrails();
    }

    state.trails = await effects.api.getTrails();
};
