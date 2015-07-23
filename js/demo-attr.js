// $(function(){
//   $(".liz img").attr("src","123");
// });

// $(".liz img").attr("title", function() {
//  return 　"玩儿温热";
// });
// $(".liz img").removeAttr("src");

// $(function(){
//   $("input[type='checkbox']").prop("checked",true);
// });

// $("input[type='checkbox']").prop({
//   disabled: true
// });

// $("input[type='checkbox']").prop("disabled", true);
// $("input[type='checkbox']").prop("checked", true);

// $("input[type='checkbox']").prop("checked", function( i, val ) {
//   return !val;
// });

// var $para = $(".liz p");
// $para.prop("luggageCode", 1234);
// $para.append("The secret luggage code is: ", String($para.prop("luggageCode")), ". ");
// $para.removeProp("luggageCode");
// $para.append("Now the secret luggage code is: ", String($para.prop("luggageCode")), ". ");

// $('.liz ul li:last').addClass(function() {
//   return 'item-' + $(this).index();
// });

// $('.liz ul li:last').removeClass(function() {
//     return $(this).prev().attr('class',"test");
// });

// $('div.foo').toggleClass(function() {
//   if $(this).parent().is('.bar') {
//     return 'happy';
//   } else {
//     return 'sad';
//   }
// });

// $(".liz p").html("Hello <b>world</b>!");

// $(".liz p").html(function(n){
//     return "这个 p 元素的 index 是：" + n;
//     });

// $(".liz p").text("Hello <strong>world!</strong>");

// $(".liz p").text(function(n){
//     return "这个 p 元素的 index 是：" + n;
//     });

// $("input").val("hello world!");

// $('input:text').val(function() {
//   return this.value + ' ' + this.className;
// });

// $("#single").val("Single2");
// $("#multiple").val(["Multiple2", "Multiple3"]);
// $("input").val(["check2", "radio1"]);

// $("div").click(function(){
//   if ( $(this).hasClass("protected") )
//     $(this)
//       .animate({ left: -10 })
//       .animate({ left: 100 })
//       .animate({ left: -10 })
//       .animate({ left: 100 })
//       .animate({ left: 0 });
// });
 // $(".liz p").filter(".selected")

// $(".liz p").filter(".selected, :first")
// $(".liz p").filter(function(index) {
//   return $("ol", this).length == 0;
// });
// alert($("input[type='checkbox']").parent().is("form"));
// $(".liz li").click(function() {
//   var $li = $(this),
//     isWithTwo = $li.is(function() {
//       return $('strong', this).length === 2;
//     });
//   if ( isWithTwo ) {
//     $li.css("background-color", "green");
//   } else {
//     $li.css("background-color", "red");
//   }
// });

// $(".liz p").append( $("input").map(function(){
//   return $(this).val();
// }).get().join(", ") );

// $('.liz li').has('ul').css('background-color', 'red');
// $(".liz p").not( $("#selected")[0] ).css("background-color","#eee");
// $(".liz p").slice(1, 3).wrapInner("<b></b>").css("background-color","#eee");

// $("div").children("#selected").wrapInner("<b></b>").css("background-color","#eee");

$("#also").bind("click", function (e) {
    $(e.target).closest("li").toggleClass("hilight");
});































