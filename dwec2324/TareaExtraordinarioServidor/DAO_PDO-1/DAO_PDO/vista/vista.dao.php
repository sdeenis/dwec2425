<?php

define("IMG","imgs");

class Vista{

    public function __construct() {
    }

    //Generamos la vista de los dos botones de inicio y cierre de sesion
    public function vistaBtnIniciarCerrarSesion(){
        print("<form action='".$_SERVER['PHP_SELF']."' method='POST'>");
        print("<input type='submit' value='Iniciar Sesión' name='mostrarFormulario'>");
        print("<input type='submit' value='Cerrar Sesión' name='cerrarSesion'>");
        print("</form>");
    }

    //Generamos la vista del formulario de inicio de sesion
    public function vistaFormularioSesion(){
        print("<h2>Formulario de incio de sesión</h2>");
        print("<form action='".$_SERVER['PHP_SELF']."' method='POST'>");
        print("<label for='username'>Ingresa tu nombre de usuario: </label><br/>");
        print("<input type='text' name='username'> </br>");
        print("<label for='username'>Ingresa tu contraseña: </label> <br/>");
        print("<input type='password' name='password'> <br/><br/>");
        print("<input type='submit' value='Enviar' name='iniciarSesion'>");
        print("</form>");
    }

    //Generamos la vista para generar los inputs 
    public function generarInputs($cabeceras,$matriz){
        //Generamos un input por cada valor de la cabecera mientras sea distinto de imagen
        foreach($matriz as $v){
            if($v['Field'] != 'imagen'){
                if(substr($v['Type'],0,4) == 'varc'){
                    print("<input type='text' name='".$v['Field']."' placeholder='".$cabeceras[$v['Field']]."'><br/>");
                }else{
                    print("<input type='number' name='".$v['Field']."' placeholder='".$cabeceras[$v['Field']]."'><br/>");
                }
            }
        }
    }

    //Generamos la vista del formulario de filtros
    public function vistaFormularioFiltro($cabeceras,$matriz){
        print("<form action='".$_SERVER['PHP_SELF']."' method='POST'>");
        print("<label for='productos'>Elige una de las siguientes opciones para filtrar: </label><br/>");
        $this->generarInputs($cabeceras,$matriz);
        print("<input type='submit' value='Filtrar' name='Filtro'>");
        print("</form>");
    }

    //Generamos la vista de la cabecera con el mensaje de bienvenida
    public function vistaCabecera(){
        print("Bienvenido, aquí podrás comprar unos productos");
    }

    //Generamos la vista de la tabla para mostrar los productos
    public function vistaTabla($cabeceras,$cabecerasTabla,$matriz){
        print("<table style='text-align:center;'>");
        print("<thead>");
            print("<tr>");
                //Mostramos las cabeceras
                foreach($cabecerasTabla as $v){
                    print("<th>".$cabeceras[$v['Field']]."</th>");
                }
            print("</tr>");
        print("</thead>");
        print("<tbody>");
            //Mostramos todos los datos
            foreach($matriz as $v){
                print("<tr>");
                    print("<td>".$v['cod']."</td>");
                    print("<td>".$v['nom_prod']."</td>");
                    print("<td>".$v['pvp']."</td>");
                    print("<td>".$v['prov']."</td>");
                    print("<td><img src='".IMG."/".$v['imagen']."' style='width:100%;height:90px'></td>");
                    print("<td>".$v['existencias']."</td>");
                print("</tr>");
            }
        print("</tbody>");
        print("</table>");
    }
}


?>