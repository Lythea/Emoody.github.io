<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$database = $_POST['company'];
// Connect with the database.
$conn= new mysqli($servername, $username, $password,$database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }

  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $data['result1'] = array();
  $data['result2'] = array();
  $data['result3'] = array();
  $data['result4'] = array();
  $data['result5'] = array();
  $data['result6'] = array();
  $data['result7'] = array();
  $data['result8'] = array();
  $data['result9'] = array();
  $data['result10'] = array();
  $data['result11'] = array();
$letters = array("","A","B","C","D","E","F","G","H","I");
$special = array("","A","B","C","Me");
$option =array("","Yes","No");

  for ($i = 1; $i < 6; $i++) {
    $sql1 = "SELECT ";
    $sql1 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq1='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq1val{$i}, ";
    $sql1 = rtrim($sql1, ", ");
    $sql1 .= ";";
    $result1 = $conn->query($sql1);
    if ($result1->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result1)) {
        $data['result1'][$i] = $row["sq1val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 5; $i++) {
    $sql2 = "SELECT ";
    $sql2 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq2='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq2val{$i}, ";
    $sql2 = rtrim($sql2, ", ");
    $sql2 .= ";";
    $result2 = $conn->query($sql2);
    if ($result2->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result2)) {
        $data['result2'][$i] = $row["sq2val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 9; $i++) {
    $sql3 = "SELECT ";
    $sql3 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq3='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq3val{$i}, ";
    $sql3 = rtrim($sql3, ", ");
    $sql3 .= ";";
    $result3 = $conn->query($sql3);
    if ($result3->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result3)) {
        $data['result3'][$i] = $row["sq3val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 7; $i++) {
    $sql4 = "SELECT ";
    $sql4 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq4='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq4val{$i}, ";
    $sql4 = rtrim($sql4, ", ");
    $sql4 .= ";";
    $result4 = $conn->query($sql4);
    if ($result4->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result4)) {
        $data['result4'][$i] = $row["sq4val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 6; $i++) {
    $sql5 = "SELECT ";
    $sql5 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq5='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq5val{$i}, ";
    $sql5 = rtrim($sql5, ", ");
    $sql5.= ";";
    $result5 = $conn->query($sql5);
    if ($result5->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result5)) {
        $data['result5'][$i] = $row["sq5val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 4; $i++) {
    $sql6 = "SELECT ";
    $sql6 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq6='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq6val{$i}, ";
    $sql6 = rtrim($sql6, ", ");
    $sql6.= ";";
    $result6 = $conn->query($sql6);
    if ($result6->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result6)) {
        $data['result6'][$i] = $row["sq6val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 3; $i++) {
    $sql7 = "SELECT ";
    $sql7 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq7='$option[$i]' AND Year='$date1' AND Month='$date2') as sq7val{$i}, ";
    $sql7= rtrim($sql7, ", ");
    $sql7 .= ";";
    $result7 = $conn->query($sql7);
    if ($result7->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result7)) {
        $data['result7'][$i] = $row["sq7val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 4; $i++) {
    $sql8 = "SELECT ";
    $sql8 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq8='$special[$i]' AND Year='$date1' AND Month='$date2') as sq8val{$i}, ";
    $sql8 = rtrim($sql8, ", ");
    $sql8 .= ";";
    $result8 = $conn->query($sql8);
    if ($result8->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result8)) {
        $data['result8'][$i] = $row["sq8val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 6; $i++) {
    $sql9 = "SELECT ";
    $sql9 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq9='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq9val{$i}, ";
    $sql9 = rtrim($sql9, ", ");
    $sql9 .= ";";
    $result9 = $conn->query($sql9);
    if ($result9->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result9)) {
        $data['result9'][$i] = $row["sq9val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 7; $i++) {
    $sql10 = "SELECT ";
    $sql10 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq10='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq10val{$i}, ";
    $sql10 = rtrim($sql10, ", ");
    $sql10 .= ";";
    $result10 = $conn->query($sql10);
    if ($result10->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result10)) {
        $data['result10'][$i] = $row["sq10val{$i}"];;
      }
    }
  }
  for ($i = 1; $i < 9; $i++) {
    $sql11 = "SELECT ";
    $sql11 .= "(SELECT COUNT(id) FROM socioeconomic WHERE sq11='$letters[$i]' AND Year='$date1' AND Month='$date2') as sq11val{$i}, ";
    $sql11 = rtrim($sql11, ", ");
    $sql11 .= ";";
    $result11 = $conn->query($sql11);
    if ($result11->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result11)) {
        $data['result11'][$i] = $row["sq11val{$i}"];;
      }
    }
  }
  echo json_encode($data);

$conn->close();
exit();
?>

