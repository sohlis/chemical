// var base = "#F37F23"


// $(document).ready(function() {
//     var color = chroma(base).brighten(10).hex();
//     var colorAgin = chroma(base).darken(15).hex();
//     var colorAginAgin = chroma(base).darken(20).hex();
//   $("#chroma-test").css("background-color", color);
//     $("#chroma-test2").css("background-color", base);
//   $("#chroma-test3").css("background-color", colorAgin);
//     $("#chroma-test4").css("background-color", colorAginAgin);
// });

$(document).ready(function() {
    // // The following selects to colors at random from Chroma
    // var colorOne = chroma.random();
    // var colorTwo = chroma.random();
    // // Then makes a scale between the two (accessible by `scale(0-1)`). .out('option') says how you'd like the colors to be returned
    // var scale = chroma.scale([colorTwo, colorOne]).out('hex').correctLightness(true);
    // // Initial value of the start of the scale
    // var scaleValue = 0;
    // // Finds how many .container s there are in the document, and divides by that number
    // var scaleIncrementer = 1 / $('.container').length;

    // for (var i = 0; i < $('.container').length; i++) { //for every .container in document do:

    //     $(".container:nth-of-type(" + (i + 1) + ")").css("background-color", scale(scaleValue)); // using the nth of type to select each container, the Chromajs scale to pick colors
    //     // ^ scale.mode('hsv') is how we decide how the scale is rendered
    //     scaleValue = scaleValue + scaleIncrementer; // add it for more scales!
    // };

    $.adaptiveBackground.run();
});







