<?php
//  cookie部分
setcookie("Username", "", -1);
header("Location: ".$_SERVER['HTTP_REFERER']);
//  session部分
//  session_start();
//  unset($_SESSION['Username']);
?>

