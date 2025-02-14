<?php

require_once("config/config.php");

class Conexion{

    //ATRIBUTOS

    private $host = HOST;
    private $userdb = DBUSER;
    private $dbname = DBNAME;
    private $passdb = PASSDB;

    //Utilizamos el patrón Singleton

    private static $conn; //Instancia PDO

    function getConn(){
        /*
            Como $conn es un atributo de clase, no de instancia, se invoca desde el nombre de la clase con la sintaxis
            :: en lugar de ->
            Esto evitará que un usuario malicioso pueda generar varias conexiones a la vez.
        */
        try {
            Conexion::$conn = new PDO("mysql:host=".$this->host.";dbname=".$this->dbname.";",$this->userdb,$this->passdb);

            //Configuramos la conexión para que lance exepciones cuando ocurra errores de PDO
            Conexion::$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            die("<br/> ERROR" . $e->getMessage());
        }

        return Conexion::$conn;
    }

    function close(){
        Conexion::$conn = null;
    }

}

?>