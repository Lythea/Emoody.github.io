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
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $id = $_POST['id'];
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
    $date3 = $_POST['date3'];
    $data1 = $_POST['data1'];
    $data2 = $_POST['data2'];
    $data3 = $_POST['data3'];
    $data4 = $_POST['data4'];
    $data5 = $_POST['data5'];
    $data6 = $_POST['data6'];
    $data7 = $_POST['data7'];
    if($data7 == "undefined"){
      $data7 = "No";
    };
    $data8 = $_POST['data8'];
    $data9 = $_POST['data9'];
    $data10 = $_POST['data10'];
    $data11 = $_POST['data11'];
  $date = $_POST['dateVal'];
$companyname = $_POST['company'];
    $sql = "INSERT into socioeconomic (id,companyname,Year,Month,day,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,date)
    VALUES ('$id','$companyname','$date1','$date2','$date3','$data1','$data2','$data3','$data4','$data5','$data6','$data7','$data8','$data9','$data10','$data11','$date')";
    $result = $conn->query($sql);
      if($result===TRUE){
        echo json_encode(['data' => 'Data Registered']);
      }else{
        echo json_encode(['data' => 'Error']);
      }
      $conn->close();
      exit();

?>

