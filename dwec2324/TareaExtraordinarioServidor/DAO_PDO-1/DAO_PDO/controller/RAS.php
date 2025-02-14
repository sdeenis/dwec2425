<?php

require_once("modelo/productos.dao.php");
require_once("modelo/usuarios.dao.php");
require_once("vista/vista.dao.php");
require_once("modelo/datos.dao.php");

class RAS{

    //ATRIBUTOS
    private $productos;
    private $vista;
    private $usuarios;
    private $datos;

    public function __construct() {
        $this->productos = new Productos();
        $this->vista = new Vista();
        $this->usuarios = new Usuarios();
        $this->datos = new Datos();
    }

    //Mostramos todos los productos de la bdd
    public function mostrarTodosLosProductos(){
        $datos = $this->productos->getAll();
        $this->vista->vistaTabla($this->datos->getCabeceraProductos(),$this->productos->getFields(),$datos);
    }

    //Mostramos un producto que nos pasan como parametro
    public function mostrarUnProducto($id){
        $datos = $this->productos->get($id);
        $this->vista->vistaTabla($this->datos->getCabeceraProductos(),$this->productos->getFields(),$datos);
    }

    //Mostramos los filtros que realizo el usuario.
    public function MostrarFiltro($post){
        $datos = $this->productos->consultaFiltro($post);
        $this->vista->vistaTabla($this->datos->getCabeceraProductos(),$this->productos->getFields(),$datos);
    }

    //Mostramos el formulario que traemos de la vista.
    public function mostrarFormulario(){
        $this->vista->vistaFormularioSesion();
    }

    //En esta funcion mostraremos los botones de iniciar y cerrar sesion
    public function mostrarbtnIniciarCerrarSesion(){
        $this->vista->vistaBtnIniciarCerrarSesion();
    }

    //Mostramos el formulario del filtro
    public function mostrarFormularioFiltro(){
        $datos = $this->productos->getFields();
        $cabeceras = $this->datos->getCabeceraProductos();
        $this->vista->vistaFormularioFiltro($cabeceras,$datos);
    }

    //Mostramos la cabecera
    public function mostrarCabecera(){
        $this->vista->vistaCabecera();
    }

    //Mostramos los datos del usuario
    public function mostrarInformacionUsuario($username){
        $datos = $this->usuarios->get($username);
        return $datos;
    }

    //Traemos con el nombre de usuario el registro de la bdd y validamos si la contraseña coincide, está encriptado en sha1
    public function validarUsuario($username,$password){
        $datos = $this->usuarios->get($username);
        $cifrarPassword=sha1($password);
        foreach($datos as $v){
            if($v['pass'] === $cifrarPassword){
                return true;
            }
        }
        return false;
    }

}

?>