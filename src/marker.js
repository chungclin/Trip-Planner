const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {

    if (type === 'activities'){
        const markerLocation = document.createElement('div');
        markerLocation.style.width = '30px';
        markerLocation.style.height = '35px';
        markerLocation.style.backgroundImage = iconURLs.activities;
        return new mapbox.Marker(markerLocation).setLngLat(coords)
    } else if (type === 'restaurants'){
        const markerLocation = document.createElement('div');
        markerLocation.style.width = '30px';
        markerLocation.style.height = '35px';
        markerLocation.style.backgroundImage = iconURLs.restaurants;
        return new mapbox.Marker(markerLocation).setLngLat(coords)
    } else {
        const markerLocation = document.createElement('div');
        markerLocation.style.width = '30px';
        markerLocation.style.height = '35px';
        markerLocation.style.backgroundImage = iconURLs.activities;
        return new mapbox.Marker(markerLocation).setLngLat(coords) 
                
    }
};

module.exports = buildMarker;