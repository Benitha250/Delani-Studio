// The business logic logic

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
$(document).ready(function(){
 
    $("#card1").hover(function(){
        $(".card1-words").css("opacity", 0.6);
        $(".card1-words").fadeIn(800);
        $(".card1-words").fadeOut(100).stop();
    });
    $("#card2").hover(function(){
        $(".card2-words").css("opacity", 0.6);
        $(".card2-words").fadeIn(800);
        $(".card2-words").fadeOut(100).stop();
    });
    $("#card3").hover(function(){
        $(".card3-words").css("opacity", 0.6);
        $(".card3-words").fadeIn(800);
        $(".card3-words").fadeOut(100).stop();
    });
    $("#card4").hover(function(){
        $(".card4-words").css("opacity", 0.6);
        $(".card4-words").fadeIn(800);
        $(".card4-words").fadeOut(100).stop();
    });
    $("#card5").hover(function(){
        $(".card5-words").css("opacity", 0.6);
        $(".card5-words").fadeIn(800);
        $(".card5-words").fadeOut(100).stop();
    });
    $("#card6").hover(function(){
        $(".card6-words").css("opacity", 0.6);
        $(".card6-words").fadeIn(800);
        $(".card6-words").fadeOut(100).stop();
    });
    $("#card7").hover(function(){
        $(".card7-words").css("opacity", 0.6);
        $(".card7-words").fadeIn(800);
        $(".card7-words").fadeOut(100).stop();
    });
    $("#card8").hover(function(){
        $(".card8-words").css("opacity", 0.6);
        $(".card8-words").fadeIn(800);
        $(".card8-words").fadeOut(100).stop();
    });
});

// User interface logic

$(document).ready(function(){
 
    $("#submit").click(function(){
        var name= $("input#name").val();
        alert(name+ ", we have received your message. Thank you for reaching out to us.");
    });
    $("button").on('click', function(){
        $('form').each(function(){
          this.reset();
        });
    
});
});