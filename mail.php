<?php



//error_reporting(E_ALL);

//ini_set('display_startup_errors', 1);

//ini_set('display_errors', '1');



	require_once 'inc/db.php';

	

	$name = $_POST['name'];

	$company = $_POST['company'];

	$city = $_POST['city'];

	$email = $_POST['email'];

	$phone = $_POST['phone'];

	$selecttype = $_POST['selecttype'];

	$project = $_POST['project'];

	$idea = $_POST['idea'];

	$type = $_POST['type'];

	$number = $_POST['number'];

	

	$date = date("Y-m-d H:i:s"); 

	

	

		

	if ($phone || $email) {

		$insert_row = $mysqli->query("INSERT INTO form (date,name,company,city,email,phone,selecttype,project,idea,type,number) VALUES ('$date','$name','$company','$city','$email','$phone','$selecttype','$project','$idea','$type','$number');"); 

		

		echo "Ваша заявка принята!";



			$text = "$name<br>

			$company<br>

			$city<br>

			$email<br>

			$phone<br>

			$selecttype<br>

			$project<br>

			$idea<br>

			$type<br>

			$number<br>

			$date";



			

			message_to_email($text);

			

			

		

	} else {

		

		echo "Вы не оставили телефон или email!";

		

	}

	

	

function message_to_email($text) {



			//$to = $uemail; //Тут пишем E-mail получателя

			$to  = 'owe7x@yandex.ru' . ', '; // обратите внимание на запятую
			$to .= 'thedickst@gmail.com';



        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо 

			$subject = "Заявка с сайта action-accelerator.ru";

			

			$send = mail($to, $subject, $text, $headers);



	}



?>