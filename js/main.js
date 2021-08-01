$(function () {
	$('.menu-open').click(function () {
		$('.list').toggleClass('show-menu')
	})
});

$(function(){
    $('.arrow-left').click(function(){
      $('.block-2').fadeOut(1);
      $('.block-1').fadeIn(100);
	  $('.page-1').css({'color':'#333'});
	  $('.page-2').css({'color':'#bdbdbd'});
      });
      $('.arrow-right').click(function(){
      $('.block-1').fadeOut(1);
      $('.block-2').fadeIn(100);
	  $('.page-2').css({'color':'#333'});
	  $('.page-1').css({'color':'#bdbdbd'});
      });
      });

