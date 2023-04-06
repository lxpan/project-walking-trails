function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const onInitializeOvermind = async ({ state, effects }, migration = false) => {
    effects.api.initialize();

    if (migration) {
        await effects.api.wipeTrails();
        sleep(5000);
        effects.api.migrateTrails();
    }

    state.trails = await effects.api.getTrails();
};
