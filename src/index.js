console.log('hi line 1 index.js');
const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

const marker = buildMarker("activity", [-74.009151, 40.705086]);

mapboxgl.accessToken = 'pk.eyJ1IjoidHNhbnRhbWFyaWEiLCJhIjoiY2plenN6ejk0MGZlYTJ5bm5xNDFvNHJrMiJ9.wN8V8F88nW9p94aEPm9g1Q';

const map = new mapboxgl.Map({
  container: 'map',
 center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v9' // mapbox has lots of different map styles available.
});

console.log(marker);

marker.addTo(map);

