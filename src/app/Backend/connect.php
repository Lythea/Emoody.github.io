<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Max-Age: "1000"');
header ('Access-Control-Allow-Headers: "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"');
header ('Access-Control-Allow-Methods: "POST, GET, OPTIONS, DELETE, PUT"');
// db credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "dataStorage";
// Connect with the database.
$conn= new mysqli($servername, $username, $password,$database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }
?>
