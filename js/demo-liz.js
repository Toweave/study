// $(function(){
//   $("img").get(0);
// });
// $(function(){
//   alert($("img").get(0));
// });
// alert($('li').index(document.getElementById('bar'))); //1，传递一个DOM对象，返回这个对象在原先集合中的索引位置
// alert($('li').index($('#bar'))); //1，传递一个jQuery对象
// alert($('li').index($('li:gt(0)'))); //1，传递一组jQuery对象，返回这个对象中第一个元素在原先集合中的索引位置
// alert($('#bar').index('li')); //1，传递一个选择器，返回#bar在所有li中的做引位置
// alert($('#bar').index()); //1，不传递参数，返回这个元素在同辈中的索引位置。  
// $("div").data("test", { first: 16, last: "pizza!" });
// $("div").data("test").first  //16;
// $("div").data("test").last  //pizza!;
// $("#btn2").click(function(){
//   $("div").removeData("greeting");
//   alert("Greeting is: " + $("div").data("greeting"));
// });

// $("#show").click(function () {
//       var n = $("div").queue("fx");
//       $("span").text("Queue length is: " + n.length);
// });
// function runIt() {
//       $("div").show("slow");
//       $("div").animate({left:'+=200'},2000);
//       $("div").slideToggle(1000);
//       $("div").slideToggle("fast");
//       $("div").animate({left:'-=200'},1500);
//       $("div").hide("slow");
//       $("div").show(1200);
//       $("div").slideUp("normal", runIt);
// }
// runIt();
// $("#start").click(function () {
//       $("div").show("slow");
//       $("div").animate({left:'+=200'},5000);
//       $("div").queue(function () {
//           $(this).addClass("newcolor");
//           $(this).dequeue();
//       });
//       $("div").animate({left:'-=200'},1500);
//       $("div").queue(function () {
//           $(this).removeClass("newcolor");
//           $(this).dequeue();
//       });
//       $("div").slideUp();
//   });
//   $("#stop").click(function () {
//       $("div").queue("fx", []);
//       $("div").stop();
//   });

$(function(){
  $("li:first-child").css("background-color","#eee");
  $("li:last-child").css("background-color","#eee");
  
  
});