"use strict";
$(document).ready(function() {
    console.log("ready!");
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('select').material_select();


    //loadPalettes();

    // var url = "https://g-colourlovers.herokuapp.com/api/palettes?format=json&hex=990000&numResults=3";
    //
    // $.getJSON(url,function(response) {
    //   console.log('response: ' + response);
    // });



    $('#wordsSubmit').on('click', function() {
        if ($('#simple').is(':checked')) {
          localStorage.setItem("userWord", $('#simple').val());
        } else if ($('#retro').is(':checked')){
          localStorage.setItem("userWord", $('#retro').val());
        } else if ($('#dramatic').is(':checked')) {
          localStorage.setItem("userWord", $('#dramatic').val());
        } else if ($('#spaceAged').is(':checked')) {
          localStorage.setItem("userWord", $('#spaceAged').val());
        }
    });

    $('#wordsSubmit').on('click', function() {
        if ($('#modern').is(':checked')) {
          localStorage.setItem("userWord2", $('#modern').val());
        } else if ($('#classic').is(':checked')){
          localStorage.setItem("userWord2", $('#classic').val());
        } else if ($('#whimsical').is(':checked')) {
          localStorage.setItem("userWord2", $('#whimsical').val());
        } else if ($('#crafty').is(':checked')) {
          localStorage.setItem("userWord2", $('#crafty').val());
        }
    });

  $('#wordsSubmit').on('click', function(){
    window.location='../html/typeface.html';
  });



var localStorageWordOne = localStorage.userWord;
console.log(localStorageWordOne);

switch (localStorageWordOne) {
  case ('retro'):
  $('#a1').html('Krona One');
  //$('#a1').css('font-family', 'Krona One' 'sans-serif')
  $('#a2').html('Ultra');
  //$('#a2').css('font-family', 'Krona One' 'sans-serif')
  $('#a3').html('Shrikhand');
  //$('#a3').css('font-family', 'Krona One' 'sans-serif')
  $('select').material_select();
    break;
    case ('simple'):
    $('#a1').html('Gruppo');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a2').html('Megrim');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a3').html('Carrois');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
    case ('space aged'):
    $('#a1').html('Bungee Hairline');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a2').html('Bungee Shade');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a3').html('Space Mono');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
    case ('dramatic'):
    $('#a1').html('Montserrat Subrayada');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a2').html('Six Caps');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#a3').html('Rubik Mono One');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
  default:

}

$('#typeSubmit').on('click', function() {
    if ($('#a1').is(':selected')) {
      localStorage.setItem("userType", $('#a1').text());
    } else if ($('#a2').is(':selected')){
      localStorage.setItem("userType", $('#a2').text());
    } else if ($('#a3').is(':selected')) {
      localStorage.setItem("userType", $('#a3').text());
    }
});

var localStorageWordTwo = localStorage.userWord2;
console.log(localStorageWordTwo);

switch (localStorageWordTwo) {
  case ('modern'):
  $('#b1').html('Poiret One');
  //$('#a1').css('font-family', 'Krona One' 'sans-serif')
  $('#b2').html('Comfortaa');
  //$('#a2').css('font-family', 'Krona One' 'sans-serif')
  $('#b3').html('Cinzel');
  //$('#a3').css('font-family', 'Krona One' 'sans-serif')
  $('select').material_select();
    break;
    case ('classic'):
    $('#b1').html('Petit Formal Script');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b2').html('Trirong');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b3').html('Josefin Slab');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
    case ('whimsical'):
    $('#b1').html('Codystar');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b2').html('Cormorant SC');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b3').html('Petit Formal Script');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
    case ('crafty'):
    $('#b1').html('Pacifico');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b2').html('Amatic SC');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('#b3').html('Chathura');
    //$('#a1').css('font-family', 'Krona One' 'sans-serif')
    $('select').material_select();
    break;
  default:

}

$('#typeSubmit').on('click', function() {
    if ($('#b1').is(':selected')) {
      localStorage.setItem("userType2", $('#b1').text());
    } else if ($('#b2').is(':selected')){
      localStorage.setItem("userType2", $('#b2').text());
    } else if ($('#b3').is(':selected')) {
      localStorage.setItem("userType2", $('#b3').text());
    }
});

$('#typeSubmit').on('click', function(){
  window.location='../html/palette.html';
});



function pickColorButt(){
  var tempHex = ($('#colorPicker').val());
var userHex = tempHex.substring(1);
console.log(userHex);

  var url = "https://g-colourlovers.herokuapp.com/api/palettes?format=json&hex="+ userHex + "&numResults=3";

$.getJSON(url).done(function(data) {
          var colorData = data;

          for (var prop in colorData) {
          console.log(data[prop].colors);
$('#paletteOne').append("<div id=colorAOne></div>");
$('#colorAOne').css('background-color','black');

          }
          //console.log(data[0].colors);
      });


}

$("#colorButton").on('click',pickColorButt);


function clearStorage(){
  localStorage.clear();
}

$("#clear").on('click', clearStorage);



});







// function loadPalettes() {
//     var url = "https://g-colourlovers.herokuapp.com/api/palettes?format=json&hex=990000&numResults=3";
//
//     $.getJSON(url).done(function(data) {
//         console.log(data);
//     });
//}
