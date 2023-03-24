$(document).ready(function(){

  $(".popup__close").click(() => {
    $(".popup").removeClass('popup__opened')
  })
  
  
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
  
         $(".s-form-block-input select").each(function() { 
  
           if($(this).val() === ""){
  
             $(this).closest('.s-form-block-input').removeClass('correct');
  
             $(this).closest('.s-form-block-input').addClass('error');
  
             selectcheck = 0;
  
           } else{
  
             
  
             $(this).closest('.s-form-block-input').removeClass('error');      
  
             $(this).closest('.s-form-block-input').addClass('correct');
  
             selectcheck = 1;
  
           }
  
         });
  
  
         var user_name   = $('#name').val();
         var user_company   = $('#company').val();
         var user_city   = $('#city').val();
         var user_email   = $('#email').val();
         var user_phone   = $('#phone').val();
         var user_post   = $('#post').val();
         var user_selecttype   = $('#selecttype').val();
         var user_project   = $('#project').val();
         var user_idea  = $('#idea').val();
         var user_type  = $('#type').val();
         var user_number  = $('#number').val();
  
  
         if(valuecheck <1 || selectcheck <1 ) {
  
             return false;
  
           }
  
           else
  
           {
  
  
  
             $.ajax({
  
               type: "POST",
  
               url: "mail.php",
  
               data: { // что отправляем
                  "name":   user_name,
                  "company":   user_company,
                  "city":   user_city ,
                  "email":   user_email,
                  "phone":   user_phone,
                  "post":   user_post ,
                  "selecttype":   user_selecttype,
                  "project":   user_project,
                  "idea":   user_idea,
                  "type":   user_type,
                  "number":   user_number
                },
  
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
  
               },
  
               error:  function(xhr, str){
  
                 alert("Возникла ошибка!");
  
               }
  
             });
  
           }
  
           return false;
  
         });
  
  });
  
  
  
  
  
  