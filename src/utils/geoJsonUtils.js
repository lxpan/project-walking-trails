const routes = () => {
    const routeFilePaths = fs
        .readdirSync(ROUTES_PATH)
        // Only include gpx files
        .filter((p) => /\.json?$/.test(p));

    console.log(routeFilePaths);
};

export default routes;
