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

$name= $_POST['dataCompany1'];
$company =$_POST['dataCompany2'];
$domain=$_POST['dataCompany3'];
$admin=$_POST['dataCompany4'];
$employee=$_POST['dataCompany5'];

$sql = "INSERT into companies (companyname,owner,domain,admin,employee) VALUES ('$company','$name','$domain','$admin','$employee')";
$result = $conn->query($sql);
  if($result===TRUE){
    echo json_encode(['data' => 'Data registered']);
  }else{
    echo json_encode(['data' => 'Error']);
  }

$conn->close();
exit();
?>


