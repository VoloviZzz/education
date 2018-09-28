$(document).ready(function(){



  //Navbar//

    	var menu = $('.navbar');
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('open')){
    				menu.addClass('open');
    			}
    		}else{
    			if(menu.hasClass('open')){
    				menu.removeClass('open');
    			}
    		}
    	});



  //Scroll To//

  $(".scroll").click(function(event){
  	event.preventDefault();
  	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);

  });


  //Wow Animation//

  wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       0,
          mobile:       false
        }
      );
      wow.init();



});



$('.icon-app').click(function () {
  if ($(this).hasClass('non-select')) {
    $('.icon-app').each(function () {
      $(this).addClass('non-select');
    });
    $(this).removeClass('non-select');
  }else {
    // $('.icon-app').each(function () {
    //   $(this).addClass('non-select');
    // });
    // $(this).removeClass('non-select');

  }
  //--show phone----------------
var id = $(this).data('id');
  $('.photo-phone').each(function () {
    if ($(this).data('id') == id) {
      $(this).show(200);

    }else {
      $(this).hide(200);
      // $($('.container')[2]).css('transform', 'translate(0, 0px)');
    }
  });
  if (id == 0) {
    $($('.container')[2]).css('transform', 'translate(0, -150px)');
  }else {
    $($('.container')[2]).css('transform', 'translate(0, 0px)');
  }
});




$('.wright-text').click(function () {

  var query = {
      text: $('.text-for-analis input').val(),
      name: $('.login').val()
  };
  $.ajax({
    type: "POST",
    url: "/text",
    data: query,
    success: function(data){
          $('.text2').val(data.text);
          $('.id-text').text(data.id);
        }
    });
});

$('.wright-analis').click(function () {

  var query = {
      text: $('.text2').val(),
      id: $('.id-text').text()
  };
  $.ajax({
    type: "POST",
    url: "/text2",
    data: query,
    success: function(data){
          alert('предложение сохраннено');
          $('.text2').val('')
          $('.text-for-analis input').val('')
        }
    });
});



















//--------------------
