var mymap = L.map("map").setView([47.619475221074325, -122.67101692418846], 7.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'icons/map-pin.svg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var Seattle = L.marker([47.606343503450006, -122.33206940061395], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Seattle");

var Mt_Rainier = L.marker([46.85284971330777, -121.75219468531986], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Mt. Rainier National Park");

var Ruby_Beach = L.marker([47.711448995855086, -124.41583164775255], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Ruby Beach");

var Lake_Crescent = L.marker([48.058221866889006, -123.81777550485565], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Lake Crescent");

var Hurricane_Ridge = L.marker([47.9692261394738, -123.49851445556568], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Hurricane Ridge");

var Mt_Ellinor = L.marker([47.52201034677776, -123.26043975427342], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Mt. Ellinor");

var Diablo_Lake = L.marker([48.71253882382891, -121.11355825466009], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Diablo Lake");

var Cascade_Pass = L.marker([48.468641935609426, -121.06011240070285], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Cascade Pass");

var Blanca_Lake = L.marker([47.941320054498576, -121.34018140441366], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Blanca Lake");

var Mt_Helens = L.marker([46.192289952718106, -122.19555090436619], {icon: myIcon1})
    .addTo(mymap)
    .bindPopup("<b>Mt. St. Helens");