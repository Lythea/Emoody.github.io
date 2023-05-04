<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$db="developers";
// Connect with the database.


  $conn= new mysqli($servername, $username, $password,$db);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

$name= $_POST['dataCompany1'];
$company =$_POST['dataCompany2'];
$domain=$_POST['dataCompany3'];
$admin=$_POST['dataCompany4'];
$employee=$_POST['dataCompany5'];

$sql = "INSERT into companies (name,company,domain,admin,employee) VALUES ('$name','$company','$domain','$admin','$employee')";
$result = $conn->query($sql);
  if($result===TRUE){
    echo json_encode(['data' => 'Data registered']);
  }else{
    echo json_encode(['data' => 'Error']);
  }

$conn->close();
exit();
?>


