<?php

require_once("Conexion.php");

/*
    FETCH NUM: nos devuelve un array asociado por numero de fila
    FETCH ASSOC: Nos devuelve un array según el nombre de las columnas
    FETCH BOTH: Nos devuelve un array asociado numericamente como asociadamente.
*/

class Productos{

    public function __construct() {
    }

    public function sentenciasPreparadas($sql,$id){
        try {
            //Realizamos la conexión para establecerla con la bdd
            $conexion = new Conexion();
            $db = $conexion->getConn();
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':id',$id);
            //Ejecutamos la consulta:
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            //En caso de error se mostrará mensajes de error
            echo "<h1> ERROR </h1>" . $e->getMessage();
        }
        return $result;
    }

    public function sentenciasNoPreparadas($sql){
        try {
            //Realizamos la conexión para establecerla con la bdd
            $conexion = new Conexion();
            $db = $conexion->getConn();
            $prods = $db->query($sql);
            $conexion->close();
            //Traemos los datos en un array
            $rest = $prods->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            //En caso de error se mostrará mensajes de errores.
            echo "<h1> ERROR </h1>" . $e->getMessage();
        }
        return $rest;
    }

    public function getAll(){
        $sql = "SELECT * FROM productos";
        return $this->sentenciasNoPreparadas($sql);
    }
    
    public function get($id){
        $sql = "SELECT * FROM productos WHERE cod=:id";
        return $this->sentenciasPreparadas($sql,$id);
    }
    
    public function update($id, $datosActualizados) {
        try {
            // Realizamos la conexión para establecerla con la base de datos
            $conexion = new Conexion();
            $db = $conexion->getConn();
            
            // Preparamos la consulta SQL para actualizar los datos del producto
            $sql = "UPDATE productos SET ";
            $setClause = "";
            foreach ($datosActualizados as $campo => $valor) {
                $setClause .= "$campo = :$campo, ";
            }
            $setClause = rtrim($setClause, ", ");
            $sql .= $setClause . " WHERE cod = :id";
            
            // Preparamos y ejecutamos la consulta
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':id', $id);
            foreach ($datosActualizados as $campo => $valor) {
                $stmt->bindValue(":$campo", $valor);
            }
            $stmt->execute();
            
            // Cerramos la conexión
            $conexion->close();
            
            // Retornamos true si la actualización fue exitosa
            return true;
        } catch (PDOException $e) {
            // En caso de error, mostramos un mensaje de error y retornamos false
            echo "<h1>ERROR</h1>" . $e->getMessage();
            return false;
        }
    }
    
    public function delete($id) {
        try {
            // Realizamos la conexión para establecerla con la base de datos
            $conexion = new Conexion();
            $db = $conexion->getConn();
            
            // Preparamos la consulta SQL para eliminar el producto
            $sql = "DELETE FROM productos WHERE cod = :id";
            
            // Preparamos y ejecutamos la consulta
            $stmt = $db->prepare($sql);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
            
            // Cerramos la conexión
            $conexion->close();
            
            // Retornamos true si la eliminación fue exitosa
            return true;
        } catch (PDOException $e) {
            // En caso de error, mostramos un mensaje de error y retornamos false
            echo "<h1>ERROR</h1>" . $e->getMessage();
            return false;
        }
    }


    public function getFields(){
        $sql = "DESC productos";
        return $this->sentenciasNoPreparadas($sql);
    }

    public function consultaFiltro($post){
        $sql = "SELECT * FROM productos";
        $contador = 0;

        foreach($post as $k => $v){
            if(!empty($v) && $k != 'Filtro'){
                if($contador === 0){
                    if(is_numeric($v)){
                        $sql .= " WHERE $k = $v";
                        $contador++;
                    }else{
                        $sql .= " WHERE $k LIKE '$v%'";
                        $contador++;
                    }
                }else{
                    if(is_numeric($v)){
                        $sql .= " AND $k = $v";
                    }else{
                        $sql .= " AND $k LIKE '$v%'";
                    }
                }
            }
        }

        return $this->sentenciasNoPreparadas($sql);
    }
}

?>