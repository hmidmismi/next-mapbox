import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 0;
  const lat = 0;
  const initialZoom = 1; // Set your initial zoom level here
  const minZoom = 1; // Set the minimum zoom level here
  const maxZoom = 15; // Optionally, set the maximum zoom level here

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/hemidemisemi/clxca0awm04wt01qmfqtj3xiq',
      center: [lng, lat],
      zoom: initialZoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
      projection: 'mercator',
    });

    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker at the specified location
    // Create a custom marker with text
    const markerEl = document.createElement('div');
    markerEl.style.backgroundColor = 'white';
    markerEl.style.border = '1px solid black';
    markerEl.style.borderRadius = '3px';
    markerEl.style.padding = '5px';
    markerEl.innerText = 'Jason lives here';

    // Add the custom marker to the map
    new mapboxgl.Marker(markerEl)
      .setLngLat([-73.982697, 40.693192])
      .addTo(map.current);
  }, []);
  return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
