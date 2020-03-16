<?php 
  include 'connect.php';
  
  $name     = $_POST['regis_name'];
  $ttl      = $_POST['regis_ttl'];
  $agama    = $_POST['regis_agama'];
  $address  = $_POST['regis_alamat'];
  $kelas    = $_POST['regis_kelas'];
  $sekolah  = $_POST['regis_asal_sekolah'];
  $phone    = $_POST['regis_phone'];
  $ortu		= $_POST['regis_ortu'];
  $email	= $_POST['regis_email'];
  $prestasi = $_POST['regis_prestasi'];
  $program  = $_POST['regis_program'];
  $hari     = $_POST['regis_hari'];
  $jam      = $_POST['regis_jam'];
  $sumber   = $_POST['regis_sumber'];


  $res = mysqli_query($conn, "INSERT INTO registration values (NULL, '$name', '$ttl', '$agama', '$address', '$sekolah','$kelas', '$phone',
                      '$email', '$prestasi', '$ortu', '$program', '$hari', '$jam', '$sumber', '-', NOW(),'unpaid', 'non-active')");          
  
  if($res){
    echo "sent";
  } else {
    echo "failed";
  }
?>