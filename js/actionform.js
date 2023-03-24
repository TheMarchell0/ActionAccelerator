$(".popup__close").click(() => {
    console.log('click');
    $(".popup").removeClass('popup__opened')
  })

$(document).ready(function(){
    $('.form__btn').click(function(e){
        var user_email   = $('#user_email').val();
        e.preventDefault();
        // собираем данные с формы
        
        console.log(user_email);
        // отправляем данные
        $.ajax({
            url: "action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_email":   user_email,
            },
            // после получения ответа сервера
            success: function(data){
                if(data.result === 'Ok') {
                    $(".error-text").html('')
                    $(".popup").addClass('popup__opened')
                } else {
                    $(".error-text").html(data.result)
                }
            }
        });
    });
});