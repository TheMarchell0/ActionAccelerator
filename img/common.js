document.addEventListener("DOMContentLoaded",function(){

	'use strict';



		$(window).scroll(function () {

		        if ($(this).scrollTop() > 0) {

		             if ($(this).scrollTop() > 100) {

		             	$('.s-header.mobile').addClass('active');

		             } else {

		        	$('.s-header.mobile').removeClass('active');

		        }

		        } 

		    });

		$('input[name="phone"]').inputmask('+7 (999) 999-99-99'); 

		 $(".js-select").select2({

  placeholder: "Технократ",

   minimumResultsForSearch: Infinity

});

		 $(".s-header-menu li a").mPageScroll2id({offset:113 });

      $('.s-home-button .s-header-btn').mPageScroll2id({offset:113 });

		  	if ($(window).width() < 992) {

   $(".s-header-menu li a").mPageScroll2id({offset:75 });

    $('.s-home-button .s-header-btn').mPageScroll2id({offset:75 });

		}

		if ($(window).width() < 565) {

   $(".s-header-menu li a").mPageScroll2id({offset:64 });

    $('.s-home-button .s-header-btn').mPageScroll2id({offset:64 });

		} 





	$(window).resize(function () {

	     if ($(window).width() < 992) {

   $(".s-header-menu li a").mPageScroll2id({offset:75 });

    $('.s-home-button .s-header-btn').mPageScroll2id({offset:75 });

    }

    if ($(window).width() < 565) {

   $(".s-header-menu li a").mPageScroll2id({offset:64 });

    $('.s-home-button .s-header-btn').mPageScroll2id({offset:64 });

    } 

	});

		 $(".s-header-menu li a").click(function() {

			$('.s-menu').removeClass("active");

			$('.s-header').removeClass("fix");

			$('.s-header-toggle').removeClass("active");

	});

		  $('.s-header-toggle').click(function() {

		if ($(this).hasClass("active")) {

			$(this).removeClass("active");

			$('.s-menu').removeClass("active");

			$('.s-header').removeClass("fix");

		}else{

			$(this).addClass("active");

			$('.s-menu').addClass("active");

			$('.s-header').addClass("fix");

		}

		return false;

	});

		  $('.s-form-block-next-link').click(function() {

			$(this).closest('.s-form-block-block.block1').hide();

			$('.s-form-block-block.block2').show();

			let block = $('.s-form-block-steps li.active');

			$('.s-form-block-steps li').removeClass("active");

			block.next().addClass("active");

			return false;

	});

		  $(".s-form-block-input textarea").each(function() { 

    if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');

     } else{

     	$(this).closest('.s-form-block-input').addClass('correct');

     }

   });

		   $('.s-form-block-input textarea').change(function() {

		   	if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');

     } else{

     	$(this).closest('.s-form-block-input').addClass('correct');

     }

   });

		   $(".s-form-block-input input").each(function() { 

    if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');

     } else{

    	if($(this).closest('.s-form-block-input').hasClass('mail')){

let ouremail = $(this).closest('.s-form-block-input.mail').find('input');

          if (ouremail.length) {

            if(ouremail.val() != '') {

              var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

              if(pattern.test(ouremail.val())){ 

                $(this).closest('.s-form-block-input').addClass('correct');

              } else {

               $(this).closest('.s-form-block-input').removeClass('correct');

              }

            } else {

              $(this).closest('.s-form-block-input').addClass('correct');

            }

          }else{

             $(this).closest('.s-form-block-input').addClass('correct');

          }; 

    	} else{	

$(this).closest('.s-form-block-input').addClass('correct');

    	}

    	  		if($(this).closest('.s-form-block-input').hasClass('phone')){

let phone = $(this).closest('.s-form-block-input.phone').find('input').val();

          let valueWithoutMaskChars = phone.replace(/\D+/g, '');

        if(valueWithoutMaskChars.length <= 10){

        	  $(this).closest('.s-form-block-input').removeClass('correct'); 

          $(this).closest('.s-form-block-input').addClass('error');

        } else{

  $(this).closest('.s-form-block-input').removeClass('error'); 	

$(this).closest('.s-form-block-input').addClass('correct');

    	}

     }

     }

    

 });

		   $('.s-form-block-input input').change(function() {

    if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');

    	$(this).closest('.s-form-block-input').addClass('error');

    	} else{

    	if($(this).closest('.s-form-block-input').hasClass('mail')){

let ouremail = $(this).closest('.s-form-block-input.mail').find('input');

          if (ouremail.length) {

            if(ouremail.val() != '') {

              var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

              if(pattern.test(ouremail.val())){

              	  $(this).closest('.s-form-block-input').removeClass('error'); 

                $(this).closest('.s-form-block-input').addClass('correct');

              } else {

               $(this).closest('.s-form-block-input').removeClass('correct');

               $(this).closest('.s-form-block-input').addClass('error');

               }

            } else {

            	  $(this).closest('.s-form-block-input').removeClass('error'); 

              $(this).closest('.s-form-block-input').addClass('correct');

            }

          }else{

          	  $(this).closest('.s-form-block-input').removeClass('error'); 

             $(this).closest('.s-form-block-input').addClass('correct');

          }; 

    	} else{

  $(this).closest('.s-form-block-input').removeClass('error');  		

$(this).closest('.s-form-block-input').addClass('correct');

    	} 

    		if($(this).closest('.s-form-block-input').hasClass('phone')){

let phone = $(this).closest('.s-form-block-input.phone').find('input').val();

          let valueWithoutMaskChars = phone.replace(/\D+/g, '');

        if(valueWithoutMaskChars.length <= 10){

        	  $(this).closest('.s-form-block-input').removeClass('correct'); 

          $(this).closest('.s-form-block-input').addClass('error');

        } else{

  $(this).closest('.s-form-block-input').removeClass('error'); 	

$(this).closest('.s-form-block-input').addClass('correct');

    	}

     }

   }

    

    

});

 $(".s-form-block-input select").each(function() { 

    if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');



     } else{

		

$(this).closest('.s-form-block-input').addClass('correct');

     }

 });



$('.s-form-block-input select').change(function() {

    if($(this).val() === ""){

    	$(this).closest('.s-form-block-input').removeClass('correct');

    	$(this).closest('.s-form-block-input').addClass('error');

     } else{

    	

  $(this).closest('.s-form-block-input').removeClass('error');  		

$(this).closest('.s-form-block-input').addClass('correct');

     }

    

});

	});

    gsap.registerPlugin(ScrollTrigger);

    let speed = 400;



let scene1 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene1,

        trigger: ".s-home",

        start: "1000 1000",

        end: "0 0",

        scrub: 0,

    });



    // hills animation 

    

   if ($(window).width() < 992) {

    scene1.to(".s-home-img-cloud1", { y: 0, x: 20, ease: "power1.in" }, 0.03)



		} else {

    scene1.to(".s-home-img-cloud1", { y: 0, x: 50, ease: "power1.in" }, 0.03)

		}



	$(window).resize(function () {

		if ($(window).width() < 992) {

    scene1.to(".s-home-img-cloud1", { y: 0, x: 20, ease: "power1.in" }, 0.03)

		} else {



    scene1.to(".s-home-img-cloud1", { y: 0, x: 50, ease: "power1.in" }, 0.03)

		}

	});

  let scene2 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene2,

        trigger: ".s-about",

        pin: true,

    scrub:2,

        start: 'top top',

    end:'+=0',

    });

      let scene3 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene3,

        trigger: ".s-about",

        pin: true,

    scrub:2,

        start: 'top top',

    end:'+=0',

    });



    // hills animation 

    scene2.to(".s-about-img3 img", {

  rotation:95,

  duration:1, ease: "power1.in",

})

     scene3.to(".s-about-img2 img", {

  rotation:-33,

  duration:1, ease: "power1.in",

})

  let scene4 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene4,

        trigger: ".s-types",

        pin: true,

    scrub:2,

        start: 'top top',

    end:'+=0',

    });



    // hills animation 

    scene4.to(".s-types-img img", {

  rotation:28,

  duration:1, ease: "power1.in",

})

    let scene5 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene5,

        trigger: ".s-steps",

       

    scrub:4,

        start: 'top top',

    end:'+=0',

    });

       let scene6 = gsap.timeline();

    ScrollTrigger.create({

        animation: scene6,

        trigger: ".s-how-inner",

        pin: true,

    scrub:2,

        start: 'top top',

    end:'+=0',

    });



    // hills animation 

    scene6.to(".s-how-img1 img", {

  rotation:95,

  duration:1, ease: "power1.in",

})



    

    $(".s-steps-item-icon1").each(function(){

    	

  scene5.to( $(this), {

  duration:1, backgroundColor: '#326CF9',  ease: "power1.in",

})

  

})

