<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Database name to check
$dbname = $_POST['dataCompany2'];

// Check if database exists
$db_check_query = "SELECT COUNT(*) as count FROM information_schema.schemata WHERE schema_name = '$dbname'";
$db_check_result = $conn->query($db_check_query);
if ($db_check_result->num_rows > 0) {
  $row = $db_check_result->fetch_assoc();
  if ($row["count"] > 0) {
    echo "Database exists";
  } else {
    echo "Database does not exist";
  }
} else {
  echo "Error checking database: " . $conn->error;
}

$conn->close();
?>
