<?php 
  include 'connect.php';
  
  $name     = $_POST['login_name'];
  $pass     = $_POST['login_pass'];
  
  $resName = mysqli_query($conn, "SELECT * FROM user where nama='$name'");
  
  $cekUser = mysqli_num_rows($resName);
  if($cekUser > 0) {
    $get = mysqli_fetch_array($resName);

    // $pass = $get['password'];    
    $resPass = mysqli_query($conn, "SELECT * FROM user where password='$pass'");

    $cekPass = mysqli_num_rows($resPass);
    if($cekPass > 0){
      $dataLogin = array();
      $dataLogin[] = "sent";
      $dataLogin[] = $get['id_role'];
      echo json_encode($dataLogin);
      session_start();
      $_SESSION['status'] = 'login';
      $_SESSION['nama_user'] = $name;
	  $_SESSION['role']  = $get['id_role'];
	  $_SESSION['id_regis'] = $get['id_regis'];
    } else {
      echo "pass";
    }

  } else {
    echo "failed";
  }

?>