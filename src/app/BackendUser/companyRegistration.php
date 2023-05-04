<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$db = $_POST['dataCompany2'];

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE $db";

  if($conn->query($sql)===TRUE){
    echo json_encode(['database' => 'Data Registered']);
  }else{
    echo json_encode(['data' => 'Error']);
  }

mysqli_select_db($conn, $db);

$sql = "CREATE TABLE accounts(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40),
  company VARCHAR(15),
  position VARCHAR(10),
  code VARCHAR(10),
  email VARCHAR(40),
  password VARCHAR(15),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

  )";

if($conn->query($sql)===TRUE){
  echo json_encode(['accounts' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}
$sql = "CREATE TABLE datalogin(
  id INT (5),
  email VARCHAR(40),
  company VARCHAR(15),
  position VARCHAR(10),
  code VARCHAR(10),
  email VARCHAR(40),
  password VARCHAR(15),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

  )";

if($conn->query($sql)===TRUE){
  echo json_encode(['accounts' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}
  $sql = "CREATE TABLE dailylogin(
  id INT(5) ,
  Year INT(5),
  Month INT(5),
  Day INT(5),
  email VARCHAR(40),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
if($conn->query($sql)===TRUE){
  echo json_encode(['dailysurvey1' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}

  $sql = "CREATE TABLE dailysurvey2 (
    id INT(5) ,
    date VARCHAR(15),
    q1 VARCHAR(4),
    q2 VARCHAR(4),
    q3 VARCHAR(4),
    q4 VARCHAR(4),
    q5 VARCHAR(4),
    q6 VARCHAR(4),
    q7 VARCHAR(4),
    q8 VARCHAR(4),
    q9 VARCHAR(4),
    q10 VARCHAR(4), reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";

if($conn->query($sql)===TRUE){
  echo json_encode(['dailysurvey2' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}
  $sql = "CREATE TABLE moodtrack (
    id INT(5) ,
    date VARCHAR(15),
    emoji VARCHAR(10),
    scale int(2),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";

if($conn->query($sql)===TRUE){
  echo json_encode(['moodtrack' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}

  $sql = "CREATE TABLE socioeconomic(
    id INT(5) ,
    Year INT(5),
    Month INT(5),
    Day INT(5),
    sq1 VARCHAR(4),
    sq2 VARCHAR(4),
    sq3 VARCHAR(4),
    sq4 VARCHAR(4),
    sq5 VARCHAR(4),
    sq6 VARCHAR(4),
    sq7 VARCHAR(4),
    sq8 VARCHAR(4),
    sq9 VARCHAR(4),
    sq10 VARCHAR(4),
    sq11 VARCHAR(4),
    date VARCHAR(15),reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if($conn->query($sql)===TRUE){
  echo json_encode(['socioeconomic' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}
  $sql = "CREATE TABLE healthindex(
    id INT(5) ,
    Year INT(5),
    Month INT(5),
    Day INT(5),
    q2 VARCHAR(50),
    q3r1 VARCHAR(50),
    q3r2 VARCHAR(50),
    q3r3 VARCHAR(50),
    q3r4 VARCHAR(50),
    q3r5 VARCHAR(50),
    q4 VARCHAR(50),
    q5 VARCHAR(50),
    q6 VARCHAR(50),
    q7r1 VARCHAR(50),
    q7r2 VARCHAR(50),
    q7r3 VARCHAR(50),
    q7r4 VARCHAR(50),
    q7r5 VARCHAR(50),
    q8 VARCHAR(50),
    q9r1 VARCHAR(50),
    q9r2 VARCHAR(50),
    q10 VARCHAR(50),
    date VARCHAR(15),reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if($conn->query($sql)===TRUE){
  echo json_encode(['healthindex' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}
  $sql = "CREATE TABLE suggestions (
    id INT(5) ,
    user VARCHAR(40),
    pass VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";

if($conn->query($sql)===TRUE){
  echo json_encode(['suggestions' => 'Data Registered']);
}else{
  echo json_encode(['data' => 'Error']);
}

$conn->close();
?>
