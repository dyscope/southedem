$(document).ready(function(){
	
	$('.parralax1').parallax({imageSrc: 'img/bg1.jpg'});
	$('.parralax3').parallax({imageSrc: 'img/bg3.jpg'});
	$('.parralax4').parallax({imageSrc: 'img/bg4.jpg'});
	$('.parralax5').parallax({imageSrc: 'img/bg5.jpg'});
	
	$('.thbimg').hover(function() { 
	    $(this).find('.thbcaption').stop().fadeIn(500); 
	}, function() { 
	    $(this).find('.thbcaption').stop().fadeOut(500); 
	});

	$('.recommend-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true
		      }
		    },
		    {
		      breakpoint: 990,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	    ]
	});

	$(".about-slider-js").responsiveSlides({
		prevText: "Previous",  
		nextText: "Next", 
		auto: false,
        nav: true,
        fade: 500,
        maxwidth: 1132
	});
	$(".revslider-js").responsiveSlides({
		prevText: "Previous2",  
		nextText: "Next2", 
		auto: false,
        nav: true,
        fade: 500,
        maxwidth: 750
	});

	$('.slinner').mouseenter(function(){
		var thisheight = $(this).find('.slcaption').find('.capmore').outerHeight();
		console.log(thisheight);
		$(this).find('.slcaption').stop().animate({height: thisheight + 48});
    });	
    
    $('.slinner').mouseleave(function(){
		$(this).find('.slcaption').stop().animate({height: "14%"},  1000, function() {

        });
    });
    $('.tourimgslider').bxSlider({
    	pager: false
    });

    $('a[href="#reviews"], a[href="#section2"] , a[href="#tours"]').on('click', function(event) {
	  var target = $(this.getAttribute('href'));
	  if (target.length) {
	    event.preventDefault();
	    $('html, body').stop().animate({
	      scrollTop: target.offset().top
	    }, 1000);
	  }
	});

	$(".fancyform").fancybox({
		maxWidth	: 380,
		maxHeight	: 320,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
  $(".fancyform2").fancybox({
    maxWidth  : 380,
    maxHeight : 370,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });

	$(".fancybox").fancybox();

});



/*
--------------- Contact form 1 --------------- */
$(document).ready(function() {

  var feedback = function() {
    $("#cform1").submit(function() {
      return false;
    });
    $("#send1").on("click", function() {
      
      var name     = $("#name1").val();
      var name     = name.length;
      var pnumber  = $("#phone1").val();
      var pnumber  = pnumber.length;


      if(name < 3) {
        $("#name1").addClass("error");
      }else if(name >= 3){
        $("#name1").removeClass("error");
      }
      if(pnumber < 3) {
        $("#phone1").addClass("error");
      }else if(pnumber >= 3){
        $("#phone1").removeClass("error");
      }

      if ( name >= 2 && pnumber >=3) {
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#cform1").serialize(),
          success: function(data) {
            if (data == "true") {
              showFormInformation();
              
              function showFormInformation() {
                  //$('#cform1').show(0).delay(0).fadeOut(600);
                  $('#cform1').html("<h2>Заказ принят.</h2><h2>Ожидайте звонка.</h2>");
                  setTimeout("$.fancybox.close()", 2000);
              }
              
                $('#send1').submit(function(e) {
                  e.preventDefault();
                  submitForm();
                })

                $('form[name="cform1"]').submit();
                $('input[type="text"]').val('');
                $('input[type="text"]').removeClass('active');

            }
          }
        });
      }
    });
  }
feedback();
});


/*
--------------- Contact form 2 --------------- */
$(document).ready(function() {

  var feedback = function() {
    $("#cform2").submit(function() {
      return false;
    });
    $("#send2").on("click", function() {
      
      var name     = $("#name2").val();
      var name     = name.length;
      var pnumber  = $("#phone2").val();
      var pnumber  = pnumber.length;


      if(name < 3) {
        $("#name2").addClass("error");
      }else if(name >= 3){
        $("#name2").removeClass("error");
      }
      if(pnumber < 3) {
        $("#phone2").addClass("error");
      }else if(pnumber >= 3){
        $("#phone2").removeClass("error");
      }

      if ( name >= 2 && pnumber >=3) {
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#cform2").serialize(),
          success: function(data) {
            if (data == "true") {
              showFormInformation();
              
              function showFormInformation() {
                  //$('#cform1').show(0).delay(0).fadeOut(600);
                  $('#cform2').html("<h2>Заказ принят.</h2><h2>Ожидайте звонка.</h2>");
                  setTimeout("$.fancybox.close()", 2000);
              }
              
                $('#send2').submit(function(e) {
                  e.preventDefault();
                  submitForm();
                })

                $('form[name="cform2"]').submit();
                $('input[type="text"]').val('');
                $('input[type="text"]').removeClass('active');

            }
          }
        });
      }
    });
  }
feedback();
});


/*
--------------- Contact form 3 --------------- */
$(document).ready(function() {

  var feedback = function() {
    $("#cform3").submit(function() {
      return false;
    });
    $("#send3").on("click", function() {
      
      var name     = $("#name3").val();
      var name     = name.length;
      var pnumber  = $("#phone3").val();
      var pnumber  = pnumber.length;


      if(name < 3) {
        $("#name3").addClass("error");
      }else if(name >= 3){
        $("#name3").removeClass("error");
      }
      if(pnumber < 3) {
        $("#phone3").addClass("error");
      }else if(pnumber >= 3){
        $("#phone3").removeClass("error");
      }

      if ( name >= 2 && pnumber >=3) {
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#cform3").serialize(),
          success: function(data) {
            if (data == "true") {
              showFormInformation();
              
              function showFormInformation() {
                  //$('#cform1').show(0).delay(0).fadeOut(600);
                  $('#cform3').html("<h2>Заказ принят.</h2><h2>Ожидайте звонка.</h2>");
                  setTimeout("$.fancybox.close()", 2000);
              }
              
                $('#send3').submit(function(e) {
                  e.preventDefault();
                  submitForm();
                })

                $('form[name="cform3"]').submit();
                $('input[type="text"]').val('');
                $('input[type="text"]').removeClass('active');

            }
          }
        });
      }
    });
  }
feedback();
});


/*
--------------- Contact form 4 --------------- */
$(document).ready(function() {

  var feedback = function() {
    $("#cform4").submit(function() {
      return false;
    });
    $("#send4").on("click", function() {
      
      var name     = $("#name4").val();
      var name     = name.length;
      var pnumber  = $("#phone4").val();
      var pnumber  = pnumber.length;


      if(name < 3) {
        $("#name4").addClass("error");
      }else if(name >= 3){
        $("#name4").removeClass("error");
      }
      if(pnumber < 3) {
        $("#phone4").addClass("error");
      }else if(pnumber >= 3){
        $("#phone4").removeClass("error");
      }

      if ( name >= 2 && pnumber >=3) {
        $.ajax({
          type: 'POST',
          url: 'sendmessage.php',
          data: $("#cform4").serialize(),
          success: function(data) {
            if (data == "true") {
              showFormInformation();
              
              function showFormInformation() {
                  //$('#cform1').show(0).delay(0).fadeOut(600);
                  $('#cform4').html("<h2>Заказ принят.</h2><h2>Ожидайте звонка.</h2>");
                  setTimeout("$.fancybox.close()", 2000);
              }
              
                $('#send4').submit(function(e) {
                  e.preventDefault();
                  submitForm();
                })

                $('form[name="cform4"]').submit();
                $('input[type="text"]').val('');
                $('input[type="text"]').removeClass('active');

            }
          }
        });
      }
    });
  }
feedback();
});
