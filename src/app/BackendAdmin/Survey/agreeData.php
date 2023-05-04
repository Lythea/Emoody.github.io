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
  $data['result3'] = array();
  $data['result4'] = array();

  for ($i = 1; $i < 11; $i++) {
    $sql = "SELECT ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='SD' AND date='$date') as q{$i}SD, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='D' AND date='$date') as q{$i}D, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='SA' AND date='$date') as q{$i}SA, ";
    $sql .= "(SELECT COUNT(id) FROM dailysurvey2 WHERE q{$i}='A' AND date='$date') as q{$i}A, ";
    $sql = rtrim($sql, ", ");

    // add the semicolon to the end of the query
    $sql .= ";";

    // execute the query and process the results as needed
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $data['result1'][$i] = $row["q{$i}SD"];;
        $data['result2'][$i] = $row["q{$i}D"];;
        $data['result3'][$i] = $row["q{$i}SA"];;
        $data['result4'][$i] = $row["q{$i}A"];;
      }
    } else {
      echo "No results found.";
    }
  }

echo json_encode($data);

$conn->close();
exit();
?>

