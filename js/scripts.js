$(document).ready(function(){
    $(".design").click(function(){
        $(".design").toggle(1000);
        $(".design-words").toggle(1200);
    });
    $(".design-words").click(function(){
        $(".design").toggle(1000);
        $(".design-words").toggle(1200);
    });
    $(".development").click(function(){
        $(".development").toggle(1000);
        $(".development-words").toggle(1200);
    });
    $(".development-words").click(function(){
        $(".development").toggle(1000);
        $(".development-words").toggle(1200);
    });
    $(".product").click(function(){
        $(".product").toggle(1000);
        $(".product-words").toggle(1200);
    });
    $(".product-words").click(function(){
        $(".product").toggle(1000);
        $(".product-words").toggle(1200);
    });
    
});