$(function(){
  $(":header").css("background", "#EEE");
});

$("#run").click(function(){
  $("#liz :not(:animated)").animate({ left: "+=20" }, 1000);
});