"use strict"
$( document ).ready(function() {
    console.log( "ready!" );
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('select').material_select();


// var url =
// "http://www.colourlovers.com/api/palettes?format=json&hex=990000&numResults=3"
//
// $.getJSON(url,function(response) {
//   console.log(response)
// })


});
