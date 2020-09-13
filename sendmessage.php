<?php
$sendto   = "stylesheet2012@yandex.ru";
$username1 = $_POST['name1'];
$userphone1 = $_POST['phone1'];

$username2 = $_POST['name2'];
$userphone2 = $_POST['phone2'];

$username3 = $_POST['name3'];
$userphone3 = $_POST['phone3'];

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

if ($_POST['name1'] && $_POST['phone1']) {
    $subject  = "Заказ звонка";
    $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<p><strong>Имя:</strong> ".$username1."</p>\r\n";
    $msg .= "<p><strong>Телефон:</strong> ".$userphone1."</p>\r\n";
    $msg .= "</body></html>";
}elseif ($_POST['name2'] && $_POST['phone2']) {
    $subject  = "Заказ экскурсии";
    $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<p><strong>Имя:</strong> ".$username2."</p>\r\n";
    $msg .= "<p><strong>Телефон:</strong> ".$userphone2."</p>\r\n";
    $msg .= "</body></html>";
}elseif ($_POST['name3'] && $_POST['phone3']) {
    $subject  = "Получение скидки";
    $msg  = "<html><body style='font-family:Arial,sans-serif;'>";
    $msg .= "<p><strong>Имя:</strong> ".$username3."</p>\r\n";
    $msg .= "<p><strong>Телефон:</strong> ".$userphone3."</p>\r\n";
    $msg .= "</body></html>";
};
mail($sendto, $subject, $msg, $headers);
if(mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}
?>