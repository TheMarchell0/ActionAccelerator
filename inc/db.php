<?php




// данные доступа к базе данных
	$db_host="localhost";       // обычно не нужно изменять
	$db_user="kotov_accelerator";        // имя пользователя БД
	$db_password="b5WxyFne";        // пароль БД
	$db_name = "kotov_accelerator";      // имя БД

	$mysqli = new mysqli($db_host,$db_user,$db_password,$db_name);
	$mysqli->set_charset("utf8");

	//Output any connection error
	if ($mysqli->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}

?>