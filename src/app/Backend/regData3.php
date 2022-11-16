<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$servername = "localhost";
$username = "root";
$password = "";
$database = "dataStorage";
// Connect with the database.
$conn= new mysqli($servername, $username, $password,$database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

  $id = $_POST['id'];
  $val1_s2 = $_POST['q1_s2'];
  $val2_s2 = $_POST['q2_s2'];
  $val3_s2 = $_POST['q3_s2'];
  $val4_s2 = $_POST['q4_s2'];
  $val5_s2 = $_POST['q5_s2'];
  $val6_s2 = $_POST['q6_s2'];
  $val7_s2 = $_POST['q7_s2'];
  $val8_s2 = $_POST['q8_s2'];
  $val9_s2 = $_POST['q9_s2'];
  $val10_s2 = $_POST['q10_s2'];

  $sql = "INSERT into dataset3 (id,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
  VALUES (
    '$id',
    '$val1_s2',
    '$val2_s2',
    '$val3_s2',
    '$val4_s2',
    '$val5_s2',
    '$val6_s2',
    '$val7_s2',
    '$val8_s2',
    '$val9_s2',
    '$val10_s2'
    )";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else
      echo json_encode(['data' => 'Error']);
$conn->close();
exit();
?>

