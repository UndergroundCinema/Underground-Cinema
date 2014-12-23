<?php
//ini_set('display_errors','On');
//error_reporting(E_ALL|E_STRICT);

$tosend ="tehnotim@yandex.ru,alex-stepanyuk@yandex.ru"; //To:
$subject = "Тестовое письмо"; //Subject:
$from_name = "Тест"; //From:
$from_email = "test@test.com"; //From:

////NO EDIT
if(!isset($_POST['act'])) {
	header('location:form.php');
    exit();


}
switch($_POST['act']) {
	case 'sender':
		if(empty($_POST['name']) || empty($_POST['phone'])) {
			exit();
		}
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		//$subj = $_POST['subject'];

		//$msg  = "<p><strong>".$subj."</strong></p>\r\n";
		$msg  = "<p><strong>Имя:</strong> ".$name."</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
		$msg .= "<p><strong>Город через Яндекс:</strong> ".$_POST['yacity']."</p>\r\n";

		//geo_ip
		$ip = $_SERVER['REMOTE_ADDR'];
		$geo_info = "IP: ".$ip."\r\n";
		include('./geo.php');
		$o = array();
		$o['ip'] = $ip;
		$o['charset'] = 'utf-8';
		$geo = new Geo($o);
		$gdata = $geo->get_value(false, false);
		$geo_info .= "Страна: ".$gdata['country']."\r\n";
		$geo_info .= "Город: ".$gdata['city']."\r\n";
		$geo_info .= "Регион: ".$gdata['region']."\r\n";
		$geo_info .= "Район: ".$gdata['district']."\r\n";

		//utm
		include('./utm_sel.php');
		$msg .= "<p><strong>UTM:</strong><br>\r\n ".nl2br($utms)."</p>\r\n<p>ГЕО:\n ".$geo_info."</p>";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";

        echo($msg);
        //echo($headers);

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'Ok'));
		} else {
			echo json_encode(array('result' => 'Fail'));
		}

/*
        $to = "abc@gmail.com";
        $subject = "Robot - Робот";
        $message = "Message,\n сообщение!";
        $headers = "From: MyRusakov.ru &lt;abc@gmail.com>\r\nContent-type: text/plain; charset=windows-1251 \r\n";
        if (mail ($to, $subject, $message, $headers)) {
            echo "messege acepted for delivery";
        } else {
            echo "some error happen";
        }
*/
        break;
	default: exit();
}
?>