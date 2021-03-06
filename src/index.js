const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiY2h1bmcyNTA5IiwiYSI6ImNqZXp0OHhyMjBmajAyeG9oc2lya2NqNXEifQ.sQo4xnsQxm3QasvkfO23pg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
const restaurantsMarker = buildMarker("restaurants", [-87.6354, 41.8885]);
restaurantsMarker.addTo(map);
const hotelsMarker = buildMarker("hotels", [-76.521672, 41.906284])
hotelsMarker.addTo(map);


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.6354, 41.8885]for Chicago