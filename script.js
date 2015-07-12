$(window).load(function() {
    var image = new Image;
    var result = $('img:nth-of-type(1)').attr('src');
    image.src = result;
    var colorThief = new ColorThief();
    var color = colorThief.getColor(image);
    console.log(color);
});
