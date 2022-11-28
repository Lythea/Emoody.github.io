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

  $date = $_POST['dateToday'];
  $sql = "SELECT

  (SELECT COUNT(id) FROM socio WHERE sq1='A' AND date='$date') as q1val1,
  (SELECT COUNT(id) FROM socio WHERE sq1='B' AND date='$date') as q1val2,
  (SELECT COUNT(id) FROM socio WHERE sq1='C' AND date='$date') as q1val3,
  (SELECT COUNT(id) FROM socio WHERE sq1='D' AND date='$date') as q1val4,
  (SELECT COUNT(id) FROM socio WHERE sq1='E' AND date='$date') as q1val5,

  (SELECT COUNT(id) FROM socio WHERE sq2='A' AND date='$date') as q2val1,
  (SELECT COUNT(id) FROM socio WHERE sq2='B' AND date='$date') as q2val2,
  (SELECT COUNT(id) FROM socio WHERE sq2='C' AND date='$date') as q2val3,
  (SELECT COUNT(id) FROM socio WHERE sq2='D' AND date='$date') as q2val4,

  (SELECT COUNT(id) FROM socio WHERE sq3='A' AND date='$date') as q3val1,
  (SELECT COUNT(id) FROM socio WHERE sq3='B' AND date='$date') as q3val2,
  (SELECT COUNT(id) FROM socio WHERE sq3='C' AND date='$date') as q3val3,
  (SELECT COUNT(id) FROM socio WHERE sq3='D' AND date='$date') as q3val4,
  (SELECT COUNT(id) FROM socio WHERE sq3='E' AND date='$date') as q3val5,
  (SELECT COUNT(id) FROM socio WHERE sq3='F' AND date='$date') as q3val6,
  (SELECT COUNT(id) FROM socio WHERE sq3='G' AND date='$date') as q3val7,
  (SELECT COUNT(id) FROM socio WHERE sq3='H' AND date='$date') as q3val8,
  (SELECT COUNT(id) FROM socio WHERE sq3='I' AND date='$date') as q3val9,

  (SELECT COUNT(id) FROM socio WHERE sq4='A' AND date='$date') as q4val1,
  (SELECT COUNT(id) FROM socio WHERE sq4='B' AND date='$date') as q4val2,
  (SELECT COUNT(id) FROM socio WHERE sq4='C' AND date='$date') as q4val3,
  (SELECT COUNT(id) FROM socio WHERE sq4='D' AND date='$date') as q4val4,
  (SELECT COUNT(id) FROM socio WHERE sq4='E' AND date='$date') as q4val5,
  (SELECT COUNT(id) FROM socio WHERE sq4='F' AND date='$date') as q4val6,

  (SELECT COUNT(id) FROM socio WHERE sq5='A' AND date='$date') as q5val1,
  (SELECT COUNT(id) FROM socio WHERE sq5='B' AND date='$date') as q5val2,
  (SELECT COUNT(id) FROM socio WHERE sq5='C' AND date='$date') as q5val3,
  (SELECT COUNT(id) FROM socio WHERE sq5='D' AND date='$date') as q5val4,
  (SELECT COUNT(id) FROM socio WHERE sq5='E' AND date='$date') as q5val5,

  (SELECT COUNT(id) FROM socio WHERE sq6='A' AND date='$date') as q6val1,
  (SELECT COUNT(id) FROM socio WHERE sq6='B' AND date='$date') as q6val2,
  (SELECT COUNT(id) FROM socio WHERE sq6='C' AND date='$date') as q6val3,

  (SELECT COUNT(id) FROM socio WHERE sq7='Yes' AND date='$date') as q7val1,
  (SELECT COUNT(id) FROM socio WHERE sq7='No' AND date='$date') as q7val2,

  (SELECT COUNT(id) FROM socio WHERE sq8='A' AND date='$date') as q8val1,
  (SELECT COUNT(id) FROM socio WHERE sq8='B' AND date='$date') as q8val2,
  (SELECT COUNT(id) FROM socio WHERE sq8='C' AND date='$date') as q8val3,

  (SELECT COUNT(id) FROM socio WHERE sq9='A' AND date='$date') as q9val1,
  (SELECT COUNT(id) FROM socio WHERE sq9='B' AND date='$date') as q9val2,
  (SELECT COUNT(id) FROM socio WHERE sq9='C' AND date='$date') as q9val3,
  (SELECT COUNT(id) FROM socio WHERE sq9='D' AND date='$date') as q9val4,
  (SELECT COUNT(id) FROM socio WHERE sq9='E' AND date='$date') as q9val5,

  (SELECT COUNT(id) FROM socio WHERE sq10='A' AND date='$date') as q10val1,
  (SELECT COUNT(id) FROM socio WHERE sq10='B' AND date='$date') as q10val2,
  (SELECT COUNT(id) FROM socio WHERE sq10='C' AND date='$date') as q10val3,
  (SELECT COUNT(id) FROM socio WHERE sq10='D' AND date='$date') as q10val4,
  (SELECT COUNT(id) FROM socio WHERE sq10='E' AND date='$date') as q10val5,
  (SELECT COUNT(id) FROM socio WHERE sq10='F' AND date='$date') as q10val5,

  (SELECT COUNT(id) FROM socio WHERE sq11='A' AND date='$date') as q11val1,
  (SELECT COUNT(id) FROM socio WHERE sq11='B' AND date='$date') as q11val2,
  (SELECT COUNT(id) FROM socio WHERE sq11='C' AND date='$date') as q11val3,
  (SELECT COUNT(id) FROM socio WHERE sq11='D' AND date='$date') as q11val4,
  (SELECT COUNT(id) FROM socio WHERE sq11='E' AND date='$date') as q11val5,
  (SELECT COUNT(id) FROM socio WHERE sq11='F' AND date='$date') as q11val6,
  (SELECT COUNT(id) FROM socio WHERE sq11='G' AND date='$date') as q11val7,
  (SELECT COUNT(id) FROM socio WHERE sq11='H' AND date='$date') as q11val8,
  ;";

  $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      $data = $result->fetch_all(MYSQLI_ASSOC);
      echo json_encode(['data' => $data]);
    } else {
      echo json_encode(['data'=> 'Not Found!']);
  }
$conn->close();
exit();
?>

