
<?php
header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *');
header ('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$servername = "localhost";
$username = "root";
$password = "";
$bsu = "bsu";
$ub = "ub";
$lpu = "lpu";
// Connect with the database.
$company = $_POST['dataAccounts2'];

if ($company == 'BSU'){
  $conn= new mysqli($servername, $username, $password,$bsu);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

      $name = $_POST['dataAccounts1'];
      $company = $_POST['dataAccounts2'];
      $position = $_POST['dataAccounts3'];
      $code = $_POST['dataAccounts4'];
      $email = $_POST['dataAccounts5'];
      $password = $_POST['dataAccounts6'];

      $sql = "INSERT into accounts (name,company,position,code,email,password) VALUES ('$name','$company','$position','$code','$email','$password')";
      $result = $conn->query($sql);
        if($result===TRUE){
          echo json_encode(['data' => 'Data registered']);
        }else{
          echo json_encode(['data' => 'Error']);
        }

}else if($company == 'UB'){

    $conn= new mysqli($servername, $username, $password,$ub);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);}

      $name = $_POST['dataAccounts1'];
      $company = $_POST['dataAccounts2'];
      $position = $_POST['dataAccounts3'];
      $code = $_POST['dataAccounts4'];
      $email = $_POST['dataAccounts5'];
      $password = $_POST['dataAccounts6'];

      $sql = "INSERT into accounts (name,company,position,code,email,password) VALUES ('$name','$company','$position','$code','$email','$password')";
      $result = $conn->query($sql);
        if($result===TRUE){
          echo json_encode(['data' => 'Data registered']);
        }else{
          echo json_encode(['data' => 'Error']);
        }
          $conn->close();
          exit();
}else if($company == 'LPU'){

  $conn= new mysqli($servername, $username, $password,$lpu);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);}

    $name = $_POST['dataAccounts1'];
    $company = $_POST['dataAccounts2'];
    $position = $_POST['dataAccounts3'];
    $code = $_POST['dataAccounts4'];
    $email = $_POST['dataAccounts5'];
    $password = $_POST['dataAccounts6'];

    $sql = "INSERT into accounts (name,company,position,code,email,password) VALUES ('$name','$company','$position','$code','$email','$password')";
    $result = $conn->query($sql);
      if($result===TRUE){
        echo json_encode(['data' => 'Data registered']);
      }else{
        echo json_encode(['data' => 'Error']);
      }
      $conn->close();
      exit();

}

?>

