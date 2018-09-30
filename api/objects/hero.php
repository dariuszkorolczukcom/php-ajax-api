<?php
class Hero{
 
    // database connection and table name
    private $conn;
    private $table_name = "heroes";
 
    // object properties
    public $id;
    public $name;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
        // read products
function read(){
 
    // select all query
    $query = "SELECT p.id, p.name FROM " . $this->table_name . " p ORDER BY p.id DESC";
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// used when filling up the update product form
function readOne(){
 
    // query to read single record
    $query = "SELECT p.id, p.name FROM " . $this->table_name . " p WHERE p.id = ? LIMIT 0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->name = $row['name'];
}
// create product
function create(){
 
    // query to insert record
    $query = "INSERT INTO " . $this->table_name . " SET name=:name";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
function update(){
 
    // query to insert record
    $query = "UPDATE " . $this->table_name . " SET name=:name WHERE id=:id";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->name=htmlspecialchars(strip_tags($this->name));
    $this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind values
    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(':id', $this->id);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
function delete(){
 
    // query to delete record
    $query = "DELETE FROM
                " . $this->table_name . 
                " WHERE id=:id";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    
    // bind value
    $stmt->bindParam(":id", $this->id);
    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// search products
function search($keywords){
 
    // select all query
    $query = "SELECT p.id, p.name FROM " . $this->table_name . " p WHERE p.name LIKE ? ORDER BY p.id DESC";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords = "%{$keywords}%";
 
    // bind
    $stmt->bindParam(1, $keywords);
    $stmt->bindParam(2, $keywords);
    $stmt->bindParam(3, $keywords);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// read products with pagination
public function readPaging($from_record_num, $records_per_page){
 
    // select query
    $query = "SELECT p.id, p.name FROM " . $this->table_name . " p ORDER BY p.id DESC LIMIT ?, ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind variable values
    $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
    $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
 
    // execute query
    $stmt->execute();
 
    // return values from database
    return $stmt;
}
// used for paging products
public function count(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
 
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    return $row['total_rows'];
}
}
?>
