// create the map and set the center of the map and its zoom setting
const map = L.map("map", { scrollWheelZoom: false }).setView([37.968923, -122.0711], 17);

//create a set of user selectable map tile layers. You must have at least one tile layer.
const basemaps = {
    StreetView: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }),

    OpenTopoMap: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }),

    CyclOSM: L.tileLayer("https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
            '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }),

    Stadia_StamenWatercolor: L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}",
        {
            attribution:
                '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            ext: "jpg",
        }
    ),

    Esri_WorldImagery: L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
            attribution:
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
        }
    ),
};

//create the UI to select different map layers
L.control.layers(basemaps).addTo(map);

//initialize the map with the StreetView map tiles
basemaps.StreetView.addTo(map);

// specify an icon to be used for the custom map markers
const customMarker = L.icon({ iconUrl: "i/marker.svg", iconSize: [40, 40] });

// create a set of custom map markers and add them to the map
const marker1 = L.marker([37.969568, -122.068908], { icon: customMarker })
    .bindPopup("Location of New Art/ARTDM Building")
    .addTo(map);

const marker2 = L.marker([37.969978, -122.071118], { icon: customMarker })
    .bindPopup("Old Art Building")
    .addTo(map);

const marker3 = L.marker([37.969172, -122.07244], { icon: customMarker })
    .bindPopup("My Physical Office FO-152")
    .addTo(map);

const marker4 = L.marker([37.969411, -122.071072], { icon: customMarker })
    .bindPopup("Cafateria")
    .addTo(map);
