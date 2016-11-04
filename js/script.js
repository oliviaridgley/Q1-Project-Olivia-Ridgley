"use strict";

var palettes = [];


$(document).ready(function() {
    console.log("ready!");
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('select').material_select();



    var localStorageWordOne = localStorage.userWord;
    console.log(localStorageWordOne);

    var localStorageWordTwo = localStorage.userWord2;
    console.log(localStorageWordTwo);


//=========== Checking Word Submitted and Storing ===========//

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
console.log(localStorage.userWord);

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
console.log(localStorage.userWord2);

  $('#wordsSubmit').on('click', function(){
    window.location='../html/typeface.html';
  });


//======= Placing Typeface Choices from Word Selection  +  Store ======//



switch (localStorageWordOne) {
  case ('retro'):
    $('#a1').val('Krona One');
    $('#a1').css('font-family', 'Krona One');
    $('#a2').val('Ultra');
    $('#a2').css('font-family', 'Ultra');
    $('#a3').val('Shrikhand');
    $('#a3').css('font-family', 'Shrikhand');
    break;
  case ('simple'):
    $('#a1').val('Gruppo');
    $('#a1').css('font-family', 'Gruppo');
    $('#a2').val('Megrim');
    $('#a2').css('font-family', 'Megrim');
    $('#a3').val('Carrois');
    $('#a3').css('font-family', 'Carrois');
    break;
  case ('space aged'):
    $('#a1').val('Bungee Hairline');
    $('#a1').css('font-family', 'Bungee Hairline');
    $('#a2').val('Bungee Shade');
    $('#a2').css('font-family', 'Bungee Shade');
    $('#a3').val('Space Mono');
    $('#a3').css('font-family', 'Space Mono');
    break;
  case ('dramatic'):
    $('#a1').val('Montserrat Subrayada');
    $('#a1').css('font-family', 'Montserrat Subrayada');
    $('#a2').val('Six Caps');
    $('#a2').css('font-family', 'Six Caps');
    $('#a3').val('Rubik Mono One');
    $('#a3').css('font-family', 'Rubik Mono One');
    break;
  default:
    break;
}

$('#a1').on('click', function(){
      localStorage.setItem("userType", $('#a1').val());
    });

$('#a2').on('click', function(){
      localStorage.setItem("userType", $('#a2').val());
    });

$('#a3').on('click', function(){
      localStorage.setItem("userType", $('#a3').val());
    });



switch (localStorageWordTwo) {
  case ('modern'):
    $('#b1').val('Poiret One');
    $('#b1').css('font-family', 'Poiret One');
    $('#b2').val('Comfortaa');
    $('#b2').css('font-family', 'Comfortaa');
    $('#b3').val('Cinzel');
    $('#b3').css('font-family', 'Cinzel');
    break;
  case ('classic'):
    $('#b1').val('Petit Formal Script');
    $('#b1').css('font-family', 'Petit Formal Script');
    $('#b2').val('Trirong');
    $('#b2').css('font-family', 'Trirong');
    $('#b3').val('Josefin Slab');
    $('#b3').css('font-family', 'Josefin Slab');
    break;
  case ('whimsical'):
    $('#b1').val('Codystar');
    $('#b1').css('font-family', 'Codystar');
    $('#b2').val('Cormorant SC');
    $('#b2').css('font-family', 'Cormorant SC');
    $('#b3').val('Petit Formal Script');
    $('#b3').css('font-family', 'Petit Formal Script');
    break;
  case ('crafty'):
    $('#b1').val('Pacifico');
    $('#b1').css('font-family', 'Pacifico');
    $('#b2').val('Amatic SC');
    $('#b2').css('font-family', 'Amatic SC');
    $('#b3').val('Chathura');
    $('#b3').css('font-family', 'Chathura');
    break;
  default:
    break;

}

$('#b1').on('click', function(){
      localStorage.setItem("userType2", $('#b1').val());
    });

$('#b2').on('click', function(){
      localStorage.setItem("userType2", $('#b2').val());
    });

$('#b3').is('click', function(){
      localStorage.setItem("userType2", $('#b3').val());
    });

$('#typeSubmit').on('click', function(){
  localStorage.setItem("userName", $('#projectName').val());
  window.location='../html/palette.html';
});

//================ Api Call to ColourLovers ==============//

function pickColorButton(){
  var tempHex = ($('#colorPicker').val());
var userHex = tempHex.substring(1);
console.log(userHex);

  var url = "https://g-colourlovers.herokuapp.com/api/palettes?format=json&hex="+ userHex + "&numResults=3";

$.getJSON(url).done(function(data) {
  console.log(data);
          var colorData = data;
          palettes = data;

          for (var prop in colorData) {
            console.log(data[prop].colors);
            for (var j in colorData[prop].colors){
              // $('#paletteOne').append("<div id=colorAOne></div>");
              $('#p' + (+prop + 1) + '-' + (+j + 1)).css('background-color','#' + colorData[prop].colors[j]);
              console.log('#p' + (+prop + 1) + '-' + (+j + 1) + "set to " + colorData[prop].colors[j]);
            }


          }

          //console.log(data[0].colors);
      });


}

$("#colorButton").on('click',pickColorButton);

//=============== Storing User palette ========//

$('#paletteSubmit').on('click', function(){
  var selected = $('input:radio[name=paletteRadio]:checked').val();
  localStorage.userPalette = JSON.stringify(palettes[selected - 1].colors);
   window.location='../html/wireframe.html';
});

// $('#testStorage').on('click', function () {
//   console.log(JSON.parse(localStorage.userPalette));
// });

//================ Wireframe ==============//

$('#wireframeSubmit').on('click',function(){
  if ($('#checkboxOne')[0].checked === true) {
    localStorage.setItem("userWireframe", $('#srcOne')[0].src);

  } else if ($('#checkboxTwo')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcTwo')[0].src);

  } else if ($('#checkboxThree')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcThree')[0].src);

  } else if ($('#checkboxFour')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcFour')[0].src );

  } else if ($('#checkboxFive')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcFive')[0].src);

  } else if ($('#checkboxSix')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcSix')[0].src);

  } else if ($('#checkboxSeven')[0].checked === true) {
    localStorage.setItem("userWireframe", $('#srcSeven')[0].src);

  } else if ($('#checkboxEight')[0].checked === true){
    localStorage.setItem("userWireframe", $('#srcEight')[0].src);
  }



  window.location='../html/styleSheet.html';
});

//============== Appending from localStorage=============//

$('#nameBox').append().html("<h2 class='flexBox'>" + localStorage.userName + "</h2>")

var typeface1 = 'font-family:'+ localStorage.userType;
console.log(typeface1);

$('#moodBoxOne').append().html("<h2 class='flexBox' style='"+ typeface1 + "'>" + localStorage.userWord + "</h2>");

var typeface2 = 'font-family:'+ localStorage.userType2;
console.log(typeface2);

$('#moodBoxTwo').append().html("<h2 class='flexBox' style='"+ typeface2 + "'>" + localStorage.userWord2 + "</h2>");

$('#wireframeBox').css("background-image", "url("+localStorage.userWireframe+")");
$('#wireframeBox').css("background-size", "cover");

$('#typefaceBoxOne').append().html("<p style='"+ typeface1 + "'>"+localStorage.userType+ "<br>A B C D E F G H I J K L M N O <br> p q r s t u v w x y z</p>");

$('#typefaceBoxTwo').append().html("<p style='"+ typeface2 + "'>"+localStorage.userType2+ "<br>A B C D E F G H I J K L M N O <br> p q r s t u v w x y z</p>");




//================ Clearing Local Storage ==============//

function clearStorage(){
  localStorage.clear();
  window.location='../index.html';
}

$("#clear").on('click', clearStorage);







//====================End of Doc Ready=========//
});







// function loadPalettes() {
//     var url = "https://g-colourlovers.herokuapp.com/api/palettes?format=json&hex=990000&numResults=3";
//
//     $.getJSON(url).done(function(data) {
//         console.log(data);
//     });
//}
