import length from '@turf/length';
import routeImports from './routeImports';

const geoRoutes = Object.entries(routeImports).map(([routeId, geoJson]) => {
    const slug = routeId;

    // calculate distance using geoJson
    const distance = length(geoJson);

    // calculate elevation gain using coordinate data
    const { coordinates } = geoJson.features[0].geometry;
    // total elevation gain
    let elevation = 0;

    // console.log(`Arr length: ${coordinates[0].length}`);

    coordinates[0].forEach((coord, index) => {
        // stop 1 point early since comparison requires 2 points
        if (index === coordinates[0].length - 1) {
            return;
        }
        // console.log(index);
        const elevationDifference = coordinates[0][index + 1][2] - coordinates[0][index][2];

        if (elevationDifference > 0) {
            elevation += elevationDifference;
        }
    });
    // geoJson, slug, distance, elevation
    return {
        slug,
        id: slug,
        geoJson,
        distance,
        elevation,
        coordinates,
    };
});

export default geoRoutes;
