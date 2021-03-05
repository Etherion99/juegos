

$(document).ready(function(e){

$("#gb_button, .gb_button").click(function(){
  $(".ds").hide();
  $(".n64").hide();
  $(".gb").show();
});

$("#ds_button, .ds_button").click(function(){
  $(".ds").show();
  $(".n64").hide();
  $(".gb").hide();
});

$("#n64_button, .n64_button").click(function(){
  $(".ds").hide();
  $(".n64").show();
  $(".gb").hide();
});

$("#todos_button").click(function(){
 $(".ds").show();
  $(".n64").show();
  $(".gb").show();
});

});
