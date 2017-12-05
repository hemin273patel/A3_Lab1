<?php
 $user = "root";
 $pass = "";
 $host = "localhost";
 $db = "a3_cooperinfo";

 $conn = mysqli_connect($host, $user, $pass, $db);
 mysqli_set_charset($conn, 'utf8');

//if (!conn) {
//    echo "something broke... no soup for you";
//    exit;
//}

echo "connected";
$myQuery = "SELECT * FROM mainmodel";
$result = mysqli_query($conn, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

//var_dump($rows);
//echo json_encode($rows);
//get the single row(one result) using 

if (isset($_GET['carModel'])) {//see if therer is a parameter called carModel
    $car = $_GET['carModel'];
    
    $myQuerry = "SELECT * FROM mainmodel WHERE model ='$car'";
    $result = mysqli_query($conn, $myQuery);
    
    $row = mysqli_fetch_assoc($result);
     echo json_encode($row);
}

?>