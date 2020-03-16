<?php 
session_start();
include 'connect.php';

$_SESSION['jam'] = array();
$_SESSION['hari'] = array();

$jam = mysqli_query($conn, "SELECT * FROM jam");
while ($row = mysqli_fetch_array($jam)){
	$_SESSION['jam'][] = $row;
}

$hari = mysqli_query($conn, "SELECT * FROM hari");
while ($row = mysqli_fetch_array($hari)){
  $_SESSION['hari'][] = $row;
}

?>
