import length from '@turf/length';
import geoJson from './geoJson/buninyong.json';

export default function geoRoutes() {
    // calculate distance using geoJson
    const distance = length(geoJson);

    // Calculate elevation gain using coordinate data
    const { coordinates } = geoJson.features[0].geometry;
    let elevationGain = 0;

    console.log(`Arr length: ${coordinates[0].length}`);

    coordinates[0].forEach((coord, index) => {
        // stop 1 point early since comparison requires 2 points
        if (index === coordinates[0].length - 1) {
            return;
        }
        // console.log(index);
        const elevationDifference = coordinates[0][index + 1][2] - coordinates[0][index][2];

        if (elevationDifference > 0) {
            elevationGain += elevationDifference;
        }
    });

    return {
        geoJson,
        distance,
        elevationGain,
    };
}
