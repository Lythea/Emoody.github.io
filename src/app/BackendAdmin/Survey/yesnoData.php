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
  $sql = "SELECT (SELECT COUNT(id) FROM dataset2 WHERE q1='Yes' AND date='$date') as q1Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q1='No' AND date='$date') as q1No,

  (SELECT COUNT(id) FROM dataset2 WHERE q2='Yes' AND date='$date') as q2Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q2='No' AND date='$date') as q2No,

  (SELECT COUNT(id) FROM dataset2 WHERE q3='Yes' AND date='$date') as q3Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q3='No' AND date='$date') as q3No,

  (SELECT COUNT(id) FROM dataset2 WHERE q4='Yes' AND date='$date') as q4Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q5='No' AND date='$date') as q4No,

  (SELECT COUNT(id) FROM dataset2 WHERE q5='Yes' AND date='$date') as q5Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q5='No' AND date='$date') as q5No,

  (SELECT COUNT(id) FROM dataset2 WHERE q6='Yes' AND date='$date') as q6Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q6='No' AND date='$date') as q6No,

  (SELECT COUNT(id) FROM dataset2 WHERE q7='Yes' AND date='$date') as q7Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q7='No' AND date='$date') as q7No,

  (SELECT COUNT(id) FROM dataset2 WHERE q8='Yes' AND date='$date') as q8Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q8='No' AND date='$date') as q8No,

  (SELECT COUNT(id) FROM dataset2 WHERE q9='Yes' AND date='$date') as q9Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q9='No' AND date='$date') as q9No,

  (SELECT COUNT(id) FROM dataset2 WHERE q10='Yes' AND date='$date') as q10Yes,
  (SELECT COUNT(id) FROM dataset2 WHERE q10='No' AND date='$date') as q10No


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

