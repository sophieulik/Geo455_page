//Creating the map variable
var mymap = L.map("map", {
    center: [40.433754350687515, -99.77635567694074], 
    zoom: 4});

// Set up baselayers
var outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
});


var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});


//Set up icon variables
var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon.png',
    iconSize: [15, 15],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});



// Create custom popups with images
var greatsmokyPopup = "<a href='https://www.nps.gov/grsm/index.htm' target='_blank'>Great Smoky Mountain National Park <br/><img src='images/greatSM.jpg' width='150px'/>";

var zionPopup = "<a href='https://www.nps.gov/zion/index.htm' target='_blank'>Zion National Park</a> <br/><img src='images/zion.jpg' width='150px'/>";

var yellowstonePopup = "<a href='https://www.nps.gov/yell/index.htm' target='_blank'>Yellowstone National Park <br/><img src='images/yellowstone.jpg' width='150px'/>";

var grandcanyonPopup = "<a href='https://www.nps.gov/grca/index.htm' target='_blank'>Grand Canyon National Park <br/><img src='images/grandcanyon.jpg', width='150px'/>";

var rockymtPopup = "<a href='https://www.nps.gov/romo/index.htm' target='_blank'>Rocky Mountain National Park <br/><img src='images/rockymt.jpg' width='150px'/>";

var acadiaPopup = "<a href='https://www.nps.gov/acad/index.htm' target='_blank'>Acadia National Park <br/><img src='images/acadia.jpg' width='150px'/>";

var grandtetonPopup = "<a href='https://www.nps.gov/grte/index.htm' target='_blank'>Grand Teton National Park <br/><img src='images/grandteton.jpg' width='150px'/>";

var yosemitePopup = "<a href='https://www.nps.gov/yose/index.htm' target='_blank'>Yosemite National Park <br/><img src='images/yosemite.jpg' width='150px'/>";

var indianaPopup = "<a href='https://www.nps.gov/indu/index.htm' target='_blank'>Indiana Dunes National Park <br/><img src='images/indiana.jpg' width='150px'/>";


// Create custom popups with images part 2
var greatsmokyPopup2 = "<a href='https://www.alltrails.com/trail/us/tennessee/alum-cave-trail-to-mount-leconte' target='_blank'>Alum Cave Trail to Mount LeConte </a> <br> 11.0 mi <br> 3,061 ft elevation gain <br> rated: hard <img src='images/alum_cave.jpg' width='150px'/>";

var zionPopup2 = "<a href='https://www.alltrails.com/trail/us/utah/angels-landing-trail' target='_blank'>Angels Landing Trail </a> <br> 4.4 mi <br> 1,604 ft elevation gain <br> rated: hard <br/><img src='images/angels_landing.jpg' width='150px'/>";

var yellowstonePopup2 = "<a href='https://www.alltrails.com/trail/us/wyoming/grand-prismatic-hot-spring' target='_blank'>Grand Prismatic Hot Springs </a> <br> 1.5 mi <br> 200 ft elevation gain <br> rated: easy <img src='images/hot_springs.jpg' width='150px'/>";

var grandcanyonPopup2 = "<a href='https://www.alltrails.com/trail/us/arizona/south-kaibab-trail' target='_blank'>South Kaibab Trail to Cedar Ridge </a> <br> 2.8 mi <br> 1,102 ft elevation gain <br> rated: moderate <img src='images/south_kaibab.jpg', width='150px'/>";

var rockymtPopup2 = "<a href='https://www.alltrails.com/trail/us/colorado/emerald-lake-trail' target='_blank'>Emerald Lake Trail </a> <br> 3.2 mi <br> 698 ft elevation <br> rated: moderate <img src='images/emerald_lake.jpg' width='150px'/>";

var acadiaPopup2 = "<a href='https://www.alltrails.com/trail/us/maine/the-beehive-loop-trail' target='_blank'>The Beehive Loop Trail </a><br> 1.5 mi <br> 508 ft elevation gain <br> rated: hard <img src='images/beehive_loop.jpg' width='150px'/>";

var grandtetonPopup2 = "<a href='https://www.alltrails.com/trail/us/wyoming/cascade-canyon-trail' target='_blank'>Cascade Canyon Trail </a> <br> 9.1 mi <br> 1,102 ft elevation gain <br> rated: moderate <img src='images/cascade_canyon.jpg' width='150px'/>";

var yosemitePopup2 = "<a href='https://www.alltrails.com/trail/us/california/vernal-and-nevada-falls-via-the-mist-trail' target='_blank'>Vernal and Nevada Falls via Mist Trail </a> <br> 6.0 mi <br> 2,162 ft elevation gain <br> rated: hard <img src='images/vernal_nevada.jpg' width='150px'/>";

var indianaPopup2 = "<a href='https://www.alltrails.com/trail/us/indiana/cowles-bog-trail--4' target='_blank'>Cowles Bog Trail </a> <br> 4.3 mi <br> 216 ft elevation gain <br> rated: moderate <img src='images/cowles_bog.jpg' width='150px'/>";


var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [35.634353512844655, -83.55740154526205],
    [37.3105412877557, -113.02607600704096],
    [44.58833724550095, -110.5938352757673],
    [36.33978538040136, -112.82723916698846],
    [40.35692622582843, -105.68129229058606],
    [44.34367173110419, -68.27346551760803],
    [43.80531366190578, -110.67932888833144],
    [37.87653513778651, -119.5387574704375],
    [41.65118729821241, -87.0710750842804]
];


// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon1}).bindPopup(greatsmokyPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon1}).bindPopup(zionPopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon1}).bindPopup(yellowstonePopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon1}).bindPopup(grandcanyonPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon1}).bindPopup(rockymtPopup, customOptions).addTo(loc);
L.marker(coords[5], {icon: myIcon1}).bindPopup(acadiaPopup, customOptions).addTo(loc);
L.marker(coords[6], {icon: myIcon1}).bindPopup(grandtetonPopup, customOptions).addTo(loc);
L.marker(coords[7], {icon: myIcon1}).bindPopup(yosemitePopup, customOptions).addTo(loc);
L.marker(coords[8], {icon: myIcon1}).bindPopup(indianaPopup, customOptions).addTo(loc);
loc.addTo(mymap);


coords2 = [
    [35.62955274451139, -83.45149397850035],
    [37.259247419635464, -112.95139700174332],
    [44.5154563373353, -110.8325108885765],
    [36.05299366985901, -112.08362460136414],
    [40.31195717723627, -105.64565777778624],
    [44.331538349719, -68.18519443273544],
    [43.76719045715556, -110.74421592056751],
    [37.732778859926555, -119.55781996250151],
    [41.644958166425006, -87.0867696404457]
];

// Marker Layergroup
var loc2 = L.layerGroup();
L.marker(coords2[0], {icon: myIcon2}).bindPopup(greatsmokyPopup2, customOptions).addTo(loc2);
L.marker(coords2[1], {icon: myIcon2}).bindPopup(zionPopup2, customOptions).addTo(loc2);
L.marker(coords2[2], {icon: myIcon2}).bindPopup(yellowstonePopup2, customOptions).addTo(loc2);
L.marker(coords2[3], {icon: myIcon2}).bindPopup(grandcanyonPopup2, customOptions).addTo(loc2);
L.marker(coords2[4], {icon: myIcon2}).bindPopup(rockymtPopup2, customOptions).addTo(loc2);
L.marker(coords2[5], {icon: myIcon2}).bindPopup(acadiaPopup2, customOptions).addTo(loc2);
L.marker(coords2[6], {icon: myIcon2}).bindPopup(grandtetonPopup2, customOptions).addTo(loc2);
L.marker(coords2[7], {icon: myIcon2}).bindPopup(yosemitePopup2, customOptions).addTo(loc2);
L.marker(coords2[8], {icon: myIcon2}).bindPopup(indianaPopup2, customOptions).addTo(loc2);


//propcircles
function getRadius(area) {
  var radius = Math.sqrt(area/Math.PI);
  return radius *0.013;
}

var propcircles = new L.geoJson(propcircles, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>Name: <b>'+feature.properties.name+'</b></br>' +
			       'Number of Visitors: '+feature.properties.visitors+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "#920101", 
          color: '#920101',
          weight: 1,       
          radius: getRadius(feature.properties.visitors),
          fillOpacity: .35
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
}).addTo(mymap);

// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);


//boundary
var bound = L.geoJSON(bound);

//trails
var trails = L.geoJSON(trails);



// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Outdoors': outdoors,
    'Satellite': satellite,
	};


var overlays = {
    'National Parks': loc,
    'Most Popular Trails': trails,
    'Trailheads': loc2,
    'Visitors': propcircles,
    'Boundaries': bound,

};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); //collapsed: true is defaults

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    minimized: true,
    position: 'bottomleft'
}).addTo(mymap);

//Pop-up for showing XY coordinates on map
//// Create an empty popup

            
//// Function to set popup contents
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
        "You clicked the map at: <br>" + 
        "<b>long:</b> " + e.latlng.lng + "<br>" + 
        "<b>lat:</b> " + e.latlng.lat
    ).openOn(mymap);}




//// Add event listener for click events to show lat long on the map
mymap.addEventListener("click", onMapClick);

// Add Navigation Buttons
L.easyButton(('#1 height=50%'), function(btn, map){
    map.setView(coords[0], 10);
}).addTo(mymap);
L.easyButton(('#2 height=50%'), function(btn, map){
    map.setView(coords[1], 11);
}).addTo(mymap);
L.easyButton(('#3 height=50%'), function(btn, map){
    map.setView(coords[2], 9);
}).addTo(mymap);
L.easyButton(('#4 height=50%'), function(btn, map){
    map.setView(coords[3], 9);
}).addTo(mymap);
L.easyButton(('#5 height=50%'), function(btn, map){
    map.setView(coords[4], 10);
}).addTo(mymap);
L.easyButton(('#6 height=50%'), function(btn, map){
    map.setView(coords[5], 11);
}).addTo(mymap);
L.easyButton(('#7 height=50%'), function(btn, map){
    map.setView(coords[6], 10);
}).addTo(mymap);
L.easyButton(('#8 height=50%'), function(btn, map){
    map.setView(coords[7], 9);
}).addTo(mymap);
L.easyButton(('#9 height=50%'), function(btn, map){
    map.setView(coords[8], 11);
}).addTo(mymap);
L.easyButton(('<img src="images/USA.svg", height=55%>'), function(btn, map){
    map.setView([40.433754350687515, -99.77635567694074], 4);
}).addTo(mymap);

