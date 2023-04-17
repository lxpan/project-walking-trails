import length from '@turf/length';
// import geoJson from './geoJson/buninyong.json';

// const geoJSON = {
//     buninyong: {
//         slug: 'mt-buninyong-walk',
//         path: './geoJson/buninyong.json',
//     },
// };

const geoJson = require('./geoJson/buninyong.json');

console.log(geoJson);

export default function geoRoutes() {
    // Calculate distance using geoJson
    const distance = length(geoJson);

    // Calculate elevation gain using coordinate data
    let elevationGain = 0;
    let posElevationCount = 0;
    let negElevationCount = 0;

    const { coordinates } = geoJson.features[0].geometry;
    // console.log(`Arr length: ${coordinates[0].length}`);
    coordinates[0].forEach((coord, index) => {
        // stop 1 point early since comparison requires 2 points
        if (index === coordinates[0].length - 1) {
            return;
        }
        // console.log(index);
        const elevationDifference = coordinates[0][index + 1][2] - coordinates[0][index][2];

        if (elevationDifference > 0) posElevationCount += 1;
        if (elevationDifference < 0) negElevationCount += 1;

        if (elevationDifference > 0) {
            elevationGain += elevationDifference;
        }
    });

    console.log(`Pos gain count: ${posElevationCount}, neg gain count: ${negElevationCount}`);

    return {
        geoJson,
        distance,
        elevationGain,
    };
}
