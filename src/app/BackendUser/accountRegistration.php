<?php

header ('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type: application/json, X-Auth-Token, Authorization, Origin');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Content-Type: application/json');

$servername = "preast.iad1-mysql-e2-17b.dreamhost.com";
$port = "3306";
$username = "pph_moody";
$password = "PPH_Student@2023";
$db="moody";
// Create connection
$conn = new mysqli($servername, $username, $password,$db,$port);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

      $name = $_POST['dataUsers1'];
      $company = $_POST['dataUsers2'];
      $position = $_POST['dataUsers3'];
      $code = $_POST['dataUsers4'];
      $email = $_POST['dataUsers5'];
      $password = $_POST['dataUsers6'];


      $sql = "SELECT COALESCE(MAX(id),0) FROM accounts WHERE company = '$company'";
      $result = $conn->query($sql);
      $row = $result->fetch_row();
      $max_id = $row[0] + 1;

      $sql = "INSERT into accounts (id,company,name,position,code,email,password) VALUES ('$max_id','$company','$name','$position','$code','$email','$password')";
      $result = $conn->query($sql);
        if($result===TRUE){
          echo json_encode(['data' => 'Data registered']);
        }else{
          echo json_encode(['data' => 'Error']);
        }
?>

