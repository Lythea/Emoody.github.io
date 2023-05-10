<?php
header('Access-Control-Allow-Origin: *');
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
  if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

  $id = $_POST['id'];
  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $date3 = $_POST['date3'];
  $q2 = $_POST['dataDD1'];
  $q3r1 = $_POST['dataRadio1'];
  $q3r2 = $_POST['dataRadio2'];
  $q3r3 = $_POST['dataRadio3'];
  $q3r4 = $_POST['dataRadio4'];
  $q3r5 = $_POST['dataRadio5'];
  $q4 = $_POST['dataDD2'];
  $q5 = $_POST['dataDD3'];
  $q6 = $_POST['dataDD4'];
  $q7r1 = $_POST['dataRadio6'];
  $q7r2 = $_POST['dataRadio7'];
  $q7r3 = $_POST['dataRadio8'];
  $q7r4 = $_POST['dataRadio9'];
  $q7r5 = $_POST['dataRadio10'];
  $q8 = $_POST['dataDD5'];
  $q9r1 = $_POST['dataRadio11'];
  $q9r2 = $_POST['dataRadio12'];
  $q10 = $_POST['dataDD6'];
  $date = $_POST['date'];
$companyname = $_POST['company'];
  $sql = "INSERT into healthindex (id,companyname,Year,Month,Day,q2,q3r1,q3r2,q3r3,q3r4,q3r5,q4,q5,q6,q7r1,q7r2,q7r3,q7r4,q7r5,q8,q9r1,q9r2,q10,date)
  VALUES ('$id','$companyname','$date1','$date2','$date3','$q2','$q3r1','$q3r2','$q3r3','$q3r4','$q3r5','$q4','$q5','$q6','$q7r1','$q7r2','$q7r3','$q7r4','$q7r5','$q8','$q9r1','$q9r2','$q10','$date')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else{
      echo json_encode(['data' => 'Error']);
    }
    $conn->close();
    exit();

?>

