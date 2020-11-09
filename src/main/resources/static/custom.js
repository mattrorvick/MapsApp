
let map;
let marker;
// let coords = {lat: 35.227085, lng: -80.843124};
let contentString = '<h2>' + city + ', ' + state + '</h2>';



function initMap() {

    let infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    let image = {url: '/flower.png', scaledSize: new google.maps.Size(50,50)};

    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 10,
        scrollwheel: false
    });

    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
    });


    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });
    
}