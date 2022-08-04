
function initMap(){var map = L.map('map').setView([34.054917, -117.650979], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.054917, -117.650979]).addTo(map)
.bindPopup('<p> the Fashion Pet H.Q </p>')
.openPopup();

var circle = L.circle([34.054917, -117.650979], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
}