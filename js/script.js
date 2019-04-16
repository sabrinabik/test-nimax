$(document).ready(function() {

  var articleShow = true;

  function hideArticle(){
    articleShow = false;
    $('.card-search__expand').css("transform", "rotate(180deg)");
    $(".card").animate({height: '60px'});
    $('.card-article').slideUp();
  }

  function showArticle(){
    articleShow = true;
    $('.card-search__expand').css("transform", "rotate(0deg)");
    $(".card").animate({height: '315px'});
    $('.card-article').slideDown();
  }

  $(".card-search__expand").click(function(){
    if (articleShow === true) {
      hideArticle();
    } else {
      showArticle();
    }
  });

  $("#search").focus(function(){
    $(".logo").addClass('small-logo');
    $("#search").attr("placeholder", "  Search field location");
    $(".card-search__expand").css("display", "none");
    $(".card-search__cancel").css("display", "block");
    if (articleShow === true) {
        hideArticle();
    }
  });

  $(".card-search__cancel").click(function(){
    $("#search").val("");
    $(".card-search__expand").css("display", "block");
    $(".card-search__cancel").css("display", "none");
  });

  $("#search").blur(function(){
    $(".logo").removeClass('small-logo');
    $("#search").attr("placeholder", "");
    $(".card-search__expand").css("background", "url(/img/arrow.svg) no-repeat center");
  });

var input = document.getElementById("search");
new Awesomplete(input, {
	list: ["Minsk, <span class=\"country\">Belarus</span>", "Mineralnye vody, <span class=\"country\">Russia</span>"]
});
});
