$('#myCarousel').carousel({
    interval: 10000,
    infiniteLoop:true,
    nav:true
})

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 1;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});


slideText(1);
function slideText(number) {
    $(".text").hide();
    $(".active").children('div').eq(number).find(".text").show();
    $(".active").children('div').eq(number).find("img").css('max-width', '120%!important');
    $(".active").children('div').eq(number).addClass("col-lg-6 col-md-6");
    $(".active").children('div').eq(number).find('circle').addClass("circle_2");
    $(".active").children('div').eq(number).css('margin-top', '-5em');
}

var intervalId = window.setInterval(function(){
    slideText(1);
}, 1);


/* add to wish list */
function addToWish()
{   
    var wish = $("#wishlist").val();
    $("#wishlist").val(+wish+1);
}

function addToCart(product, price)
{
    // add prodict to cart page
    $("#cartTable").find('#'+product).show();

    // add price to subtotal
    var subtotal = parseFloat($("#subtotal").val());
    var price = parseFloat(price);

    var net = price+subtotal;

    $("#subtotal").val(net);
    $("#total").val(net);
}