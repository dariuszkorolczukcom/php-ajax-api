<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../objects/hero.php';
 
$database = new Database();
$db = $database->getConnection();
 
$product = new Hero($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$product->id = $data->id;
 
// update the product
if($product->delete()){
    echo '{';
        echo '"message": "Product was deleted."';
    echo '}';
}
 
// if unable to update the product, tell the user
else{
    echo '{';
        echo '"message": "Unable to delete product."';
    echo '}';
}
?>