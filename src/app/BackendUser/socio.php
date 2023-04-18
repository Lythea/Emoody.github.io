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
$company = $_POST['company'];
// Connect with the database.
if ($company == 'BSU'){
  $conn= new mysqli($servername, $username, $password,$bsu);
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
    $data8 = $_POST['data8'];
    $data9 = $_POST['data9'];
    $data10 = $_POST['data10'];
    $data11 = $_POST['data11'];
  $date = $_POST['dateVal'];

    $sql = "INSERT into socioeconomic (id,Year,Month,day,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,date)
    VALUES ('$id','$date1','$date2','$date3','$data1','$data2','$data3','$data4','$data5','$data6','$data7','$data8','$data9','$data10','$data11','$date')";
    $result = $conn->query($sql);
      if($result===TRUE){
        echo json_encode(['data' => 'Data Registered']);
      }else{
        echo json_encode(['data' => 'Error']);
      }
      $conn->close();
      exit();
}else if($company == 'UB'){

    $conn= new mysqli($servername, $username, $password,$ub);
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
      $data8 = $_POST['data8'];
      $data9 = $_POST['data9'];
      $data10 = $_POST['data10'];
      $data11 = $_POST['data11'];
    $date = $_POST['dateVal'];

      $sql = "INSERT into socioeconomic (id,Year,Month,day,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,date)
      VALUES ('$id','$date1','$date2','$date3','$data1','$data2','$data3','$data4','$data5','$data6','$data7','$data8','$data9','$data10','$data11','$date')";
      $result = $conn->query($sql);
        if($result===TRUE){
          echo json_encode(['data' => 'Data Registered']);
        }else{
          echo json_encode(['data' => 'Error']);
        }
        $conn->close();
        exit();
}else if($company == 'LPU'){

  $conn= new mysqli($servername, $username, $password,$lpu);
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
    $data8 = $_POST['data8'];
    $data9 = $_POST['data9'];
    $data10 = $_POST['data10'];
    $data11 = $_POST['data11'];
  $date = $_POST['dateVal'];

    $sql = "INSERT into socioeconomic (id,Year,Month,day,sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,date)
    VALUES ('$id','$date1','$date2','$date3','$data1','$data2','$data3','$data4','$data5','$data6','$data7','$data8','$data9','$data10','$data11','$date')";
    $result = $conn->query($sql);
      if($result===TRUE){
        echo json_encode(['data' => 'Data Registered']);
      }else{
        echo json_encode(['data' => 'Error']);
      }
      $conn->close();
      exit();
}

?>

