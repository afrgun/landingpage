<?php 
  include 'connect.php';
  
  $name     = $_POST['nama'];
  $parent   = $_POST['parent'];
  $grade    = $_POST['grade'];
  $phone    = $_POST['tlp'];
  $address  = $_POST['address'];
  $message  = $_POST['message'];
  $status   = 'non-active';

  $res = mysqli_query($conn, "INSERT INTO guest values (NULL, '$name', '$parent', '$grade', '$phone', '$address', '$message', '$status')");          
  
  if($res){
    echo "sent";
  } else {
    echo "failed";
  }
?>