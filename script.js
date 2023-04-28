$('#searchButton').click(function(){
    let location = $('#searchInput').val();
    callApi(location);
});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        let location = $('#searchInput').val();
        callApi(location);
    }
});

function callApi(location){
    let string_norm  = location.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    $.ajax({
        url: "https://api.weatherapi.com/v1/current.json?key=862defbfa1764dd4b10220355232704&q="+string_norm+"&aqi=yes"
    }).done(function (data) {
        let currentData = data.current;
        let locationData = data.location;
        $('#tempIcon').html('<img src="'+ currentData.condition.icon +'" alt="tempIcon">');
        $('#tempCelsius').text(currentData.temp_c+'°');
        $('#locationName').text(locationData.name + ', ' + locationData.country);
    });
}