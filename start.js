



$(document).ready(function () {
    //hide the banner red
    $('.alert').hide();
    //get device location
    navigator.geolocation.getCurrentPosition(success, error);
     
       function success(position) {
         var latitude  = position.coords.latitude;
         var longitude = position.coords.longitude;
         weather(latitude,longitude);
     }
       function error() {
        console.log( "Unable to retrieve your location");
        $('.alert').slideDown(2000);
       }
     
     
  //ajax function for url fetch and all
    function weather(latitude,longitude){
       var url= `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
      $.getJSON(url,function(res) {
        console.log(res);
        updateDOM(res);
       // geoFindMe();
         })
       }
   

    //changing the name of city
    function updateDOM(res) {
        var city=res.name;
        var temp=Math.round(res.main.temp);
        var desc=res.weather[0].description;
        var icon=res.weather[0].icon;
        var country=res.sys.country;
        var ferh=Math.round((temp*1.8)+32);
        $('#city').html(city);
        $('#temp').html(temp+"&deg;"+"c");
        $('#desc').html(desc);
        $('#img-weath').attr('src',icon);
        
        $(".btn-outline-info").click(function(){
            $("#temp").html(ferh+"f");
        });
        $(".btn-outline-warning").click(function(){
            $("#temp").html(temp+"&deg;"+"c");
        });
        
        
    };
});
