const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activity: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = function (type, coords) {

  let markerDomEl = document.createElement("div");

  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  markerDomEl.style.backgroundImage = iconURLs[type];
  console.log(type);
  // console.log(new mapbox.Marker(markerDomEl).setLngLat(coords).addTo(map))
  return new mapbox.Marker(markerDomEl).setLngLat(coords);

};

module.exports = buildMarker;
