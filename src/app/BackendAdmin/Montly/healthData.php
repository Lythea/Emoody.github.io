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

  (SELECT COUNT(id) FROM healthindex WHERE q1='Agree' AND date='$date') as hq1,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Excellent' AND date='$date') as hq2val1,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Very Good' AND date='$date') as hq2val2,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Good' AND date='$date') as hq2val3,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Fair' AND date='$date') as hq2val4,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Poor' AND date='$date') as hq2val5,
  (SELECT COUNT(id) FROM healthindex WHERE q2='Dont know or Not Sure' AND date='$date') as hq2val6,

  (SELECT COUNT(id) FROM healthindex WHERE q3r1='Diagnosed' AND date='$date') as hq3r1val1,
  (SELECT COUNT(id) FROM healthindex WHERE q3r1='Taking Medicine For' AND date='$date') as hq3r1val2,

  (SELECT COUNT(id) FROM healthindex WHERE q3r2='Diagnosed' AND date='$date') as hq3r2val1,
  (SELECT COUNT(id) FROM healthindex WHERE q3r2='Taking Medicine For' AND date='$date') as hq3r2val2,

  (SELECT COUNT(id) FROM healthindex WHERE q3r3='Diagnosed' AND date='$date') as hq3r3val1,
  (SELECT COUNT(id) FROM healthindex WHERE q3r3='Taking Medicine For' AND date='$date') as hq3r3val2,

  (SELECT COUNT(id) FROM healthindex WHERE q3r4='Diagnosed' AND date='$date') as hq3r4val1,
  (SELECT COUNT(id) FROM healthindex WHERE q3r4='Taking Medicine For' AND date='$date') as hq3r4val2,

  (SELECT COUNT(id) FROM healthindex WHERE q3r5='Diagnosed' AND date='$date') as hq3r5val1,
  (SELECT COUNT(id) FROM healthindex WHERE q3r5='Taking Medicine For' AND date='$date') as hq3r5val2,

  (SELECT COUNT(id) FROM healthindex WHERE q4='Never' AND date='$date') as hq4val1,
  (SELECT COUNT(id) FROM healthindex WHERE q4='Rarely' AND date='$date') as hq4val2,
  (SELECT COUNT(id) FROM healthindex WHERE q4='Half of the time' AND date='$date') as hq4val3,
  (SELECT COUNT(id) FROM healthindex WHERE q4='Often' AND date='$date') as hq4val4,
  (SELECT COUNT(id) FROM healthindex WHERE q4='Always' AND date='$date') as hq4val5,

  (SELECT COUNT(id) FROM healthindex WHERE q5='Never' AND date='$date') as hq5val1,
  (SELECT COUNT(id) FROM healthindex WHERE q5='Rarely' AND date='$date') as hq5val2,
  (SELECT COUNT(id) FROM healthindex WHERE q5='Half of the time' AND date='$date') as hq5val3,
  (SELECT COUNT(id) FROM healthindex WHERE q5='Often' AND date='$date') as hq5val4,
  (SELECT COUNT(id) FROM healthindex WHERE q5='Always' AND date='$date') as hq5val5,

  (SELECT COUNT(id) FROM healthindex WHERE q6='Every day' AND date='$date') as hq6val1,
  (SELECT COUNT(id) FROM healthindex WHERE q6='Some days' AND date='$date') as hq6val2,
  (SELECT COUNT(id) FROM healthindex WHERE q6='Not at all' AND date='$date') as hq6val3,

  (SELECT COUNT(id) FROM healthindex WHERE q7r1='None' AND date='$date') as hq7r1val1,
  (SELECT COUNT(id) FROM healthindex WHERE q7r1='Mild' AND date='$date') as hq7r1val2,
  (SELECT COUNT(id) FROM healthindex WHERE q7r1='Moderate' AND date='$date') as hq7r1val3,
  (SELECT COUNT(id) FROM healthindex WHERE q7r1='Severe' AND date='$date') as hq7r1val4,
  (SELECT COUNT(id) FROM healthindex WHERE q7r1='Extreme' AND date='$date') as hq7r1val5,

  (SELECT COUNT(id) FROM healthindex WHERE q7r2='None' AND date='$date') as hq7r2val1,
  (SELECT COUNT(id) FROM healthindex WHERE q7r2='Mild' AND date='$date') as hq7r2val2,
  (SELECT COUNT(id) FROM healthindex WHERE q7r2='Moderate' AND date='$date') as hq7r2val3,
  (SELECT COUNT(id) FROM healthindex WHERE q7r2='Severe' AND date='$date') as hq7r2val4,
  (SELECT COUNT(id) FROM healthindex WHERE q7r2='Extreme' AND date='$date') as hq7r2val5,

  (SELECT COUNT(id) FROM healthindex WHERE q7r3='None' AND date='$date') as hq7r3val1,
  (SELECT COUNT(id) FROM healthindex WHERE q7r3='Mild' AND date='$date') as hq7r3val2,
  (SELECT COUNT(id) FROM healthindex WHERE q7r3='Moderate' AND date='$date') as hq7r3val3,
  (SELECT COUNT(id) FROM healthindex WHERE q7r3='Severe' AND date='$date') as hq7r3val4,
  (SELECT COUNT(id) FROM healthindex WHERE q7r3='Extreme' AND date='$date') as hq7r3val5,

  (SELECT COUNT(id) FROM healthindex WHERE q7r4='None' AND date='$date') as hq7r4val1,
  (SELECT COUNT(id) FROM healthindex WHERE q7r4='Mild' AND date='$date') as hq7r4val2,
  (SELECT COUNT(id) FROM healthindex WHERE q7r4='Moderate' AND date='$date') as hq7r4val3,
  (SELECT COUNT(id) FROM healthindex WHERE q7r4='Severe' AND date='$date') as hq7r4val4,
  (SELECT COUNT(id) FROM healthindex WHERE q7r4='Extreme' AND date='$date') as hq7r4val5,

  (SELECT COUNT(id) FROM healthindex WHERE q7r5='None' AND date='$date') as hq7r5val1,
  (SELECT COUNT(id) FROM healthindex WHERE q7r5='Mild' AND date='$date') as hq7r5val2,
  (SELECT COUNT(id) FROM healthindex WHERE q7r5='Moderate' AND date='$date') as hq7r5val3,
  (SELECT COUNT(id) FROM healthindex WHERE q7r5='Severe' AND date='$date') as hq7r5val4,
  (SELECT COUNT(id) FROM healthindex WHERE q7r5='Extreme' AND date='$date') as hq7r5val5,

  (SELECT COUNT(id) FROM healthindex WHERE q8='No difficulty' AND date='$date') as hq8val1,
  (SELECT COUNT(id) FROM healthindex WHERE q8='Mild difficulty' AND date='$date') as hq8val2,
  (SELECT COUNT(id) FROM healthindex WHERE q8='Moderate difficulty' AND date='$date') as hq8val3,
  (SELECT COUNT(id) FROM healthindex WHERE q8='Severe difficulty' AND date='$date') as hq8val4,
  (SELECT COUNT(id) FROM healthindex WHERE q8='So much difficulty that I can't sleep' AND date='$date') as hq8val5,

  (SELECT COUNT(id) FROM healthindex WHERE q9r1='6 hours or less' AND date='$date') as hq9r1val1,
  (SELECT COUNT(id) FROM healthindex WHERE q9r1='About 7 hours' AND date='$date') as hq9r1val2,
  (SELECT COUNT(id) FROM healthindex WHERE q9r1='About 8 hours' AND date='$date') as hq9r1val3,
  (SELECT COUNT(id) FROM healthindex WHERE q9r1='About 9 hours' AND date='$date') as hq9r1val4,
  (SELECT COUNT(id) FROM healthindex WHERE q9r1='About 10 hours or more' AND date='$date') as hq9r1val5,

  (SELECT COUNT(id) FROM healthindex WHERE q9r2='6 hours or less' AND date='$date') as hq9r2val1,
  (SELECT COUNT(id) FROM healthindex WHERE q9r2='About 7 hours' AND date='$date') as hq9r2val2,
  (SELECT COUNT(id) FROM healthindex WHERE q9r2='About 8 hours' AND date='$date') as hq9r2val3,
  (SELECT COUNT(id) FROM healthindex WHERE q9r2='About 9 hours' AND date='$date') as hq9r2val4,
  (SELECT COUNT(id) FROM healthindex WHERE q9r2='About 10 hours or more' AND date='$date') as hq9r2val5,

  (SELECT COUNT(id) FROM healthindex WHERE q10='Very Good' AND date='$date') as hq10val1,
  (SELECT COUNT(id) FROM healthindex WHERE q10='Fairly Good' AND date='$date') as hq10val2,
  (SELECT COUNT(id) FROM healthindex WHERE q10='Fairly Poor' AND date='$date') as hq10val3,
  (SELECT COUNT(id) FROM healthindex WHERE q10='Very Poor' AND date='$date') as hq10val4

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

