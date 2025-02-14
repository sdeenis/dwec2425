<?php

require_once("Conexion.php");

class Usuarios{

    public function __construct() {
    }
    
    public function get($username){
        try {
            //Realizamos la conexión para establecerla con la bdd
            $conexion = new Conexion();
            $db = $conexion->getConn();
            //Realizamos la consulta a la bdd
            $sql = "SELECT usr,pass,rol FROM usuarios WHERE usr=:username";
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':username',$username);
    
            //Ejecutamos la consulta:
            $stmt->execute();
    
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        } catch (PDOException $e) {
            //En caso de error se mostrará mensajes de error
            echo "<h1> ERROR </h1>" . $e->getMessage();
        }
    
        return $result;
    }
}

?>