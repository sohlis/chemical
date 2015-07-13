
var items = [
              ['#FAE4E9','#BBACC1'],
              ['#909580','#545643'],
            ];

var rand = items[Math.floor(Math.random() * items.length)];

var myColorOne = rand[0];
var myColorTwo = rand[1];

// The following selects to colors at random from Chroma
var robotColorOne = chroma.random();
var robotColorTwo = chroma.random();
// Mixes the two colors. the value is where on the spectrum it should pull the mix from
var colorOne = chroma.interpolate(myColorOne, robotColorOne, 0.01, 'lab');
var colorTwo = chroma.interpolate(myColorTwo, robotColorTwo, 0.01, 'lab')
// Then makes a scale between the two (accessible by `scale(0-1)`)
var scale = chroma.scale([colorTwo, colorOne]).mode('lab');
// Initial value of the start of the scale
var scaleValue = 0;
// Finds how many .container s there are in the document, and divides by that number
var scaleIncrementer = 1 / $('.container').length;

for (var i = 0; i < $('.container').length; i++) { //for every .container in document do:
  $( ".container:nth-of-type(" + (i+1) +")" ).css("background-color", scale(scaleValue).hex());  // using the nth of type to select each container, the Chromajs scale to pick colors
  scaleValue = scaleValue + scaleIncrementer; // add it for more scales!
};


