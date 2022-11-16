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
  $val1_s1 = $_POST['q1_s1'];
  $val2_s1 = $_POST['q2_s1'];
  $val3_s1 = $_POST['q3_s1'];
  $val4_s1 = $_POST['q4_s1'];
  $val5_s1 = $_POST['q5_s1'];
  $val6_s1 = $_POST['q6_s1'];
  $val7_s1 = $_POST['q7_s1'];
  $val8_s1= $_POST['q8_s1'];
  $val9_s1= $_POST['q9_s1'];
  $val10_s1= $_POST['q10_s1'];

  $sql = "INSERT into dataset2 (id,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
  VALUES (
    '$id',
    '$val1_s1',
    '$val2_s1',
    '$val3_s1',
    '$val4_s1',
    '$val5_s1',
    '$val6_s1',
    '$val7_s1',
    '$val8_s1',
    '$val9_s1',
    '$val10_s1')";
  $result = $conn->query($sql);
    if($result===TRUE){
      echo json_encode(['data' => 'Data Registered']);
    }else
      echo json_encode(['data' => 'Error']);
$conn->close();
exit();
?>

