"use strict";
  $(function() {
    $(".icerik,.icerikDnym,.icerikYtnk").hide(100);  
    $(".icerik").first().show(100);  
    $("header .sekme li").on("click", function() {
      let sira = $(this).index();  
      $(".icerik").hide(100);  
      $(".icerik").eq(sira).show(100);  
      $(".icerikYtnk").hide(100);
      $(".icerikDnym").hide(100);
      $("header .sekme li").removeClass("aktif");  
      $(this).addClass("aktif");  
    });
  });
$(document).ready(function()
  {$(".Ytnk").click(function(){
      $(".icerikYtnk").show(100);
      $(".icerik").hide(100);
      $(".icerikDnym").hide(100);  
    });
  });
  $(document).ready(function()
  {$(".Dnym").click(function(){
      $(".icerikDnym").show(100);
      $(".icerik").hide(100);
      $(".icerikYtnk").hide(100);
      });
  });
const spans = document.querySelectorAll('.icerikYtnk span');
  spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.innerHTML = span.dataset.width;
  });
  $("button").on("click", function() {
    
    $(this).addClass("aktif"); 
  });