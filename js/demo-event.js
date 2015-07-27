// $(function(){
//   $(":header").css("background", "#EEE");
// });

// $("#run").click(function(){
//   $("#liz :not(:animated)").animate({ left: "+=20" }, 1000);
// });

// $(".event p").on("click", function(){
// alert( $(this).text() );
// });

// function myHandler(event) {
// alert(event.data.foo);
// }
// $(".event p").on("click", {foo: "bar"}, myHandler)

// $(".event p").bind("click", function(){
//   alert( $(this).text() );
// });

// $('#foo').bind('mouseenter mouseleave', function() {
//   $(this).toggleClass('entered');
// });

// $("button").bind({
//   click:function(){$(".event p").slideToggle();},
//   mouseover:function(){$("body").css("background-color","red");},  
//   mouseout:function(){$("body").css("background-color","green");}  
// });

// function handler(event) {
//   alert(event.data.foo);
// }
// $(".event p").bind("click", {foo: "bar"}, handler)
// $(".event p").one("click", function(){
//   alert( $(this).text() );
// });


// $(".event p").bind("myEvent", function (event, message1, message2) {
//   alert(message1 + ' ' + message2);
// });
// $("p").trigger("myEvent", ["Hello","World!"]);

// $("#old").click(function(){
//   $("input").trigger("focus");
// });
// $("#new").click(function(){
//   $("input").triggerHandler("focus");
// });
// $("input").focus(function(){
//   $("<span>Focused!</span>").appendTo("body").fadeOut(1000);
// });

// $('.clickme').bind('click', function() {
//   alert("Bound handler called.");
// });
// $('body').append('<div class="clickme">Another target</div>');

// $('.clickme').live('click',function() {
//   alert("Live handler called."); 
// });

// $('body').append('<div class="clickme">Another target</div>');

$(".clickme").live("click", function(){
    $(this).after("<p>Another paragraph!</p>");
});




























