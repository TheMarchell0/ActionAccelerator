document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      if ($(this).scrollTop() > 100) {
        $(".s-header.mobile").addClass("active");
      } else {
        $(".s-header.mobile").removeClass("active");
      }
    }
  });

  /*$('input[name="phone"]').inputmask('+7 (999) 999-99-99');*/

  $(".js-select").select2({
    placeholder: "Технократ",

    minimumResultsForSearch: Infinity,
  });
  $(".js-select-2").select2({
    placeholder: "Для частных лиц",

    minimumResultsForSearch: Infinity,
  });

  $(".js-select-2").on("change", "", function (e) {
    if (
      $(".s-form-block-input__company .select2-selection__rendered").text() ===
      "Для компаний"
    ) {
      $(".s-form-block-input-certificate").removeClass(
        "s-form-block-input__unvisible"
      );
    } else {
      $(".s-form-block-input-certificate").addClass(
        "s-form-block-input__unvisible"
      );
    }
  });
  $(".js-select-3").select2({
    placeholder: "С дипломом",

    minimumResultsForSearch: Infinity,
  });

  $(".s-header-menu li a").mPageScroll2id({ offset: 113 });

  $(".s-home-button .s-header-btn").mPageScroll2id({ offset: 113 });

  if ($(window).width() < 992) {
    $(".s-header-menu li a").mPageScroll2id({ offset: 75 });

    $(".s-home-button .s-header-btn").mPageScroll2id({ offset: 75 });
  }

  if ($(window).width() < 565) {
    $(".s-header-menu li a").mPageScroll2id({ offset: 64 });

    $(".s-home-button .s-header-btn").mPageScroll2id({ offset: 64 });
  }

  $(window).resize(function () {
    if ($(window).width() < 992) {
      $(".s-header-menu li a").mPageScroll2id({ offset: 75 });

      $(".s-home-button .s-header-btn").mPageScroll2id({ offset: 75 });
    }

    if ($(window).width() < 565) {
      $(".s-header-menu li a").mPageScroll2id({ offset: 64 });

      $(".s-home-button .s-header-btn").mPageScroll2id({ offset: 64 });
    }
  });

  $(".s-header-menu li a").click(function () {
    $(".s-menu").removeClass("active");

    $(".s-header").removeClass("fix");

    $(".s-header-toggle").removeClass("active");
  });

  $(".s-header-toggle").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");

      $(".s-menu").removeClass("active");

      $(".s-header").removeClass("fix");
    } else {
      $(this).addClass("active");

      $(".s-menu").addClass("active");

      $(".s-header").addClass("fix");
    }

    return false;
  });

  $(".s-form-block-next-link").click(function () {
    $(this).closest(".s-form-block-block.block1").hide();

    $(".s-form-block-block.block2").show();

    let block = $(".s-form-block-steps li.active");

    $(".s-form-block-steps li").removeClass("active");

    block.next().addClass("active");

    return false;
  });

  $(".s-form-block-prev-link").click(function () {
    $(this).closest(".s-form-block-block.block2").hide();

    $(".s-form-block-block.block1").show();

    let block = $(".s-form-block-steps li.active");

    $(".s-form-block-steps li").removeClass("active");

    block.prev().addClass("active");

    return false;
  });

  /* $(".s-form-block-input textarea").each(function() {

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

$(this).closest('.s-form-block-input').addClass('correct');*/

  /*if($(this).closest('.s-form-block-input').hasClass('phone')){

let phone = $(this).closest('.s-form-block-input.phone').find('input').val();

          let valueWithoutMaskChars = phone.replace(/\D+/g, '');

        if(valueWithoutMaskChars.length <= 10){

        	  $(this).closest('.s-form-block-input').removeClass('correct'); 

          $(this).closest('.s-form-block-input').addClass('error');

        } else{

            $(this).closest('.s-form-block-input').removeClass('error');

            $(this).closest('.s-form-block-input').addClass('correct');

    	}

     }*/

  /* }

    

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

    	} */

  /*if($(this).closest('.s-form-block-input').hasClass('phone')){

let phone = $(this).closest('.s-form-block-input.phone').find('input').val();

          /!*let valueWithoutMaskChars = phone.replace(/\D+/g, '');*!/

        if(phone.length <= 18){

        	  $(this).closest('.s-form-block-input').removeClass('correct'); 

          $(this).closest('.s-form-block-input').addClass('error');

        } else{

  $(this).closest('.s-form-block-input').removeClass('error'); 	

$(this).closest('.s-form-block-input').addClass('correct');

    	}

     }*/

  /*

    

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

    

});*/
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
  scene1.to(".s-home-img-cloud1", { y: 0, x: 20, ease: "power1.in" }, 0.03);
} else {
  scene1.to(".s-home-img-cloud1", { y: 0, x: 50, ease: "power1.in" }, 0.03);
}

$(window).resize(function () {
  if ($(window).width() < 992) {
    scene1.to(".s-home-img-cloud1", { y: 0, x: 20, ease: "power1.in" }, 0.03);
  } else {
    scene1.to(".s-home-img-cloud1", { y: 0, x: 50, ease: "power1.in" }, 0.03);
  }
});

let scene2 = gsap.timeline();

ScrollTrigger.create({
  animation: scene2,

  trigger: ".s-about",

  /* pin: true,*/

  scrub: 2,

  start: "top top",

  end: "+=0",
});

let scene3 = gsap.timeline();

ScrollTrigger.create({
  animation: scene3,

  trigger: ".s-about",

  /* pin: true,*/

  scrub: 2,

  start: "top top",

  end: "+=0",
});

// hills animation

scene2.to(".s-about-img3 img", {
  rotation: 95,

  duration: 1,
  ease: "power1.in",
});

scene3.to(".s-about-img2 img", {
  rotation: -33,

  duration: 1,
  ease: "power1.in",
});

let scene4 = gsap.timeline();

ScrollTrigger.create({
  animation: scene4,

  trigger: ".s-types",

  /* pin: true,*/

  scrub: 2,

  start: "top top",

  end: "+=0",
});

// hills animation

scene4.to(".s-types-img img", {
  rotation: 28,

  duration: 1,
  ease: "power1.in",
});

let scene5 = gsap.timeline();

let scene7 = gsap.timeline();

ScrollTrigger.create({
  animation: scene5,

  trigger: ".s-steps",

  scrub: 4,

  start: "top top",

  end: "+=0",
});

ScrollTrigger.create({
  animation: scene7,

  trigger: ".s-steps",

  scrub: 2,

  start: "-=200px",

  end: "+=0",
});

let scene6 = gsap.timeline();

ScrollTrigger.create({
  animation: scene6,

  trigger: ".s-how-inner",

  /* pin: true,*/

  scrub: 2,

  start: "top top",

  end: "+=0",
});

// hills animation

scene6.to(".s-how-img1 img", {
  rotation: 95,

  duration: 1,
  ease: "power1.in",
});

let scene8 = gsap.timeline();

ScrollTrigger.create({
  animation: scene8,

  trigger: ".s-how",

  /* pin: true,*/

  scrub: 2,

  start: "top top",

  end: "+=0",
});

scene8.to(".s-how-block-blue", {
  left: "130px",

  duration: 1,

  ease: "power1.in",
});

let scene9 = gsap.timeline();
let scene10 = gsap.timeline();
let scene11 = gsap.timeline();

ScrollTrigger.create({
  animation: scene9,

  trigger: ".s-about-inner",

  /* pin: true,*/

  scrub: 2,

  start: "bottom bottom",

  end: "+=0",
});
ScrollTrigger.create({
  animation: scene10,

  trigger: ".s-about-inner",

  /* pin: true,*/

  scrub: 2,

  start: "bottom bottom",

  end: "+=0",
});
ScrollTrigger.create({
  animation: scene11,

  trigger: ".s-about-inner",

  /* pin: true,*/

  scrub: 2,

  start: "bottom bottom",

  end: "+=0",
});

scene9.to(".price-1", {
  onComplete: () => {
    $({ numberValue: 0 }).animate(
      { numberValue: 2 },
      {
        duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {
          $(".price-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        },
      }
    );
  },
});
scene10.to(".price-2", {
  onComplete: () => {
    $({ numberValue: 0 }).animate(
      { numberValue: 332 },
      {
        duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {
          $(".price-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        },
      }
    );
  },
});
scene11.to(".price-3", {
  onComplete: () => {
    $({ numberValue: 0 }).animate(
      { numberValue: 83 },
      {
        duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",

        step: function (val) {
          $(".price-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
        },
      }
    );
  },
});

$(".s-steps-item-icon1").each(function () {
  scene5.to($(this), {
    duration: 1,
    backgroundColor: "#326CF9",
    ease: "power1.in",
  });
});

$(".s-steps-item-date").each(function () {
  scene7.to($(this), { duration: 2, opacity: 1, ease: "power1.in" });
});

$("#hover-s-how-1").mouseenter(function () {
  $("#s-how-price").text("34.990 ₽");
  $("#s-how-price").css("color", "#fff");
});
$("#hover-s-how-2").mouseenter(function () {
  $("#s-how-price").text("Бесплатно");
  $("#s-how-price").css("color", "#fff");
});

window.addEventListener("DOMContentLoaded", function () {
  /*[].forEach.call( document.querySelectorAll('.js-phone-valid'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });*/

  let yearBlocks = document.querySelectorAll(".js-current-year");

  for (let yearBlocksItem of yearBlocks) {
    yearBlocksItem.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let phoneMask = IMask(document.querySelector(".js-phone-valid"), {
    mask: "+{7}(000)000-00-00",
  });
});
