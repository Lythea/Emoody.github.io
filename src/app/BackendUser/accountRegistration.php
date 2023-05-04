
<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$bsu = "bsu";
$ub = "ub";
$lpu = "lpu";
// Connect with the database.
$company = $_POST['dataUsers2'];


  $conn= new mysqli($servername, $username, $password,$company);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

      $name = $_POST['dataUsers1'];
      $company = $_POST['dataUsers2'];
      $position = $_POST['dataUsers3'];
      $code = $_POST['dataUsers4'];
      $email = $_POST['dataUsers5'];
      $password = $_POST['dataUsers6'];

      $sql = "INSERT into accounts (name,company,position,code,email,password) VALUES ('$name','$company','$position','$code','$email','$password')";
      $result = $conn->query($sql);
        if($result===TRUE){
          echo json_encode(['data' => 'Data registered']);
        }else{
          echo json_encode(['data' => 'Error']);
        }


?>

