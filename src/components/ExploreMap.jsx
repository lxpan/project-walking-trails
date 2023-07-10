import React, { useRef, useEffect, useState } from 'react';
import bbox from '@turf/bbox';
import { useAppState } from '../overmind';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapCore from './MapCore';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Map.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoibHBhbmRldiIsImEiOiJjbGdlZnFvNDEwdTF0M3JyeW5nNjF0bHg2In0.FeOaetmAXx5D4hb1A4e-hg';

function ExploreMap(props) {
    console.log(props);
    const { colours, mapCentre } = props;
    const { routes } = useAppState();

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [zoom, setZoom] = useState(13.2);

    // initialise the map right after component load
    useEffect(() => {
        // console.log('routes state in Map component');
        // console.log(routes);

        // function: initMap(map, style)
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [mapCentre.lng, mapCentre.lat],
            zoom,
        });

        // function: processEachRoute(map)
        map.current.on('load', () => {
            map.current.resize();
            routes.forEach((route) => {
                const { slug } = route;
                // 1. Add the source using the slug as unique id
                map.current.addSource(slug, {
                    type: 'geojson',
                    data: route.geoJson,
                });

                // 2. Add a layer displaying our route
                map.current.addLayer({
                    id: slug,
                    type: 'line',
                    source: slug, // same id as above
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': colours.shift(),
                        'line-width': 4,
                    },
                });

                map.current.addLayer({
                    id: `${slug}-fill`,
                    type: 'fill',
                    source: slug,
                    paint: {
                        'fill-color': 'transparent',
                        'fill-outline-color': 'transparent',
                    },
                });

                // Change cursor on route fill hover
                map.current.on('mouseenter', `${slug}-fill`, () => {
                    map.current.getCanvas().style.cursor = 'pointer';
                    map.current.setPaintProperty(slug, 'line-width', 6);
                });

                // Restore cursor on route fill exit
                map.current.on('mouseleave', `${slug}-fill`, () => {
                    map.current.getCanvas().style.cursor = '';
                    map.current.setPaintProperty(slug, 'line-width', 4);
                });

                map.current.on('click', `${slug}-fill`, () => {
                    const bounds = bbox(route.geoJson);

                    // pan map to bounds
                    map.current.fitBounds(bounds, {
                        padding: 20,
                    });
                });
            });
        });
        // clean up map object when component unmounts or user leaves page
        return () => map.current.remove();
    }, []); // runs when component mounts

    // store new coordinates as user moves the map
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className="map-container">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

const _mapCentre = {
    lng: 143.9221,
    lat: -37.655,
};

export default MapCore(ExploreMap, _mapCentre);
