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
  $sql = "SELECT (SELECT COUNT(id) FROM dataset3 WHERE q1='SD' AND date='$date') as q1val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q1='D' AND date='$date') as q1val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q1='SA' AND date='$date') as q1val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q1='A' AND date='$date') as q1val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q2='SD' AND date='$date') as q2val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q2='D' AND date='$date') as qval2,
  (SELECT COUNT(id) FROM dataset3 WHERE q2='SA' AND date='$date') as q2val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q2='A' AND date='$date') as q2val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q3='SD' AND date='$date') as q3val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q3='D' AND date='$date') as q3val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q3='SA' AND date='$date') as q3val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q3='A' AND date='$date') as q3val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q4='SD' AND date='$date') as q4val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q4='D' AND date='$date') as q4val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q4='SA' AND date='$date') as q4val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q4='A' AND date='$date') as q4val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q5='SD' AND date='$date') as q5val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q5='D' AND date='$date') as q5val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q5='SA' AND date='$date') as q5val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q5='A' AND date='$date') as q5val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q6='SD' AND date='$date') as q6val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q6='D' AND date='$date') as q6val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q6='SA' AND date='$date') as q6val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q6='A' AND date='$date') as q6val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q7='SD' AND date='$date') as q7val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q7='D' AND date='$date') as q7val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q7='SA' AND date='$date') as q7val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q7='A' AND date='$date') as q7val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q8='SD' AND date='$date') as q8val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q8='D' AND date='$date') as q8val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q8='SA' AND date='$date') as q8val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q8='A' AND date='$date') as q8val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q9='SD' AND date='$date') as q9val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q9='D' AND date='$date') as q9val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q9='SA' AND date='$date') as q9val3,
  (SELECT COUNT(id) FROM dataset3 WHERE q9='A' AND date='$date') as q9val4,

  (SELECT COUNT(id) FROM dataset3 WHERE q10='SD' AND date='$date') as q10val1,
  (SELECT COUNT(id) FROM dataset3 WHERE q10='D' AND date='$date') as q10val2,
  (SELECT COUNT(id) FROM dataset3 WHERE q10='SA' AND date='$date') as q10va3,
  (SELECT COUNT(id) FROM dataset3 WHERE q10='A' AND date='$date') as q10val4
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

