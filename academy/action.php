<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['user_email'] == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
 
    // если форма без ошибок
    if(filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {     
        // собираем данные из формы
        $message .= $_POST['user_email'];   
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "Ok";
    }else{
        // если были ошибки, то выводим их
        $msg_box = "Что-то пошло не так";
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "tmrakhmanov@gmail.com"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>