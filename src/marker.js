const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
    activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = function (type, coords) {
    
    const markerLocation = document.createElement('div');
    markerLocation.style.width = '30px';
    markerLocation.style.height = '35px';
    markerLocation.style.backgroundImage = iconURLs[type];
    return new mapbox.Marker(markerLocation).setLngLat(coords)
};

module.exports = buildMarker;