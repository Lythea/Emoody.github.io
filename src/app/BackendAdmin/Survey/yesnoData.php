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

  $date = $_POST['date'];
  $data['result1'] = array();
  $data['result2'] = array();

  for ($i = 1; $i < 11; $i++) {
    $sql = "SELECT ";
    // add the "Yes" count for this question to the query
    $sql .= "(SELECT COUNT(id) FROM dailysurvey1 WHERE q{$i}='Yes' AND date='$date') as q{$i}Yes, ";
    // add the "No" count for this question to the query
    $sql .= "(SELECT COUNT(id) FROM dailysurvey1 WHERE q{$i}='No' AND date='$date') as q{$i}No, ";
    $sql = rtrim($sql, ", ");

    // add the semicolon to the end of the query
    $sql .= ";";

    // execute the query and process the results as needed
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $data['result1'][$i] = $row["q{$i}Yes"];;
        $data['result2'][$i] = $row["q{$i}No"];;
      }
    } else {
      echo "No results found.";
    }
  }


echo json_encode($data);
$conn->close();
exit();
?>

