$(".popup__close").click(() => {

  $(".popup").removeClass('popup__opened')

})
$(".clickForm").click(() => {

  $(".popup-form").addClass('popup__opened')

})
$(".popup__close").click(() => {

  $(".popup-form").removeClass('popup__opened')
  $('#main-form')[0].reset()
  $(".text-danger").html('')
  $(".s-form-block-input input").each(function() { 
    $(this).closest('.s-form-block-input').removeClass('correct');
    $(this).closest('.s-form-block-input').removeClass('error');
  })
})

$(document).ready(function(){
  $("form").submit(function() {
 

    let form = $(this);
         // form.find('button').addClass('loading');
         let msg = form.serialize();
         let formData = new FormData($(this)[0]);
         let valuecheck = 0;
         let selectcheck = 0;
         $(".s-form-block-input input").each(function() { 
           if($(this).val() === ""){
             $(this).closest('.s-form-block-input').removeClass('correct');
             $(this).closest('.s-form-block-input').addClass('error');
             valuecheck = 0;
           } else{
             if($(this).closest('.s-form-block-input').hasClass('mail')){
               let ouremail = $(this).closest('.s-form-block-input.mail').find('input');
               if (ouremail.length) {
                 if(ouremail.val() != '') {
                   var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                   if(pattern.test(ouremail.val())){
                     $(this).closest('.s-form-block-input').removeClass('error'); 
                     $(this).closest('.s-form-block-input').addClass('correct');
                     valuecheck = 1;
                   } else {
                    $(this).closest('.s-form-block-input').removeClass('correct');
                    $(this).closest('.s-form-block-input').addClass('error');
                    valuecheck = 0;
 
                  }
                } else {
                 $(this).closest('.s-form-block-input').removeClass('error'); 
                 $(this).closest('.s-form-block-input').addClass('correct');
                 valuecheck = 1;
               }
             }else{
               $(this).closest('.s-form-block-input').removeClass('error'); 
               $(this).closest('.s-form-block-input').addClass('correct');
               valuecheck = 1;
             }; 
           } else{
             $(this).closest('.s-form-block-input').removeClass('error');      
             $(this).closest('.s-form-block-input').addClass('correct');
             valuecheck = 1;
           }
         }
 
       });

 
          var response = grecaptcha.getResponse();
          if (response.length == 0) {
            $(".text-danger").html('Вы не прошли проверку CAPTCHA')
            return false;
          } else {
              if (valuecheck <1 ) {
                  return false;
              }  else {	
                  console.log('Ok')
                  $(".popup").addClass('popup__opened')
                  $.ajax({
                    type: "POST",
                    url: "testmail.php",
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(data) {
                      // form.find('button').removeClass('loading');
                      form[0].reset();
                        setTimeout(function () {
                        form.find('.p-admission-apply-form-btn').removeClass('loading');
                  }, 3000);
                  form.find('.p-admission-apply-form-btn span').html('<span class="icon"><img src="img/icon-ok.svg" alt="img"></span><span class="text">OK</span>');
      
                      // yaCounterXXXXXXXX.reachGoal('order');
                      // ga('send', 'event', 'form', 'order');
                      $('.popup-form').removeClass('popup__opened')
                    },
                    error:  function(xhr, str){
                      alert("Возникла ошибка!");
                    }
                  });
              }
            return false;
          }
    });
 });
 
 
 