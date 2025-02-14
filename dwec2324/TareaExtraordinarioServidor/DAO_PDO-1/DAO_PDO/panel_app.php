<?php
require_once("controller/Controller.php");
$controlador = new Controller();
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sección:</title>
</head>
<body> 
	<!-- Cabecera donde van los botones y el mensaje de bienvenida -->
<?php
	//Mensaje de bienvenida
	$controlador->mostrarCabecera();
	print("<div style='float:right;'>");
		$controlador->mostrarbtnIniciarCerrarSesion();
	print("</div>");
?>
<div style="overflow:hidden; width:100%; height:80%;">
	<div id="tables" style="float:left; width:30%; ">
        <fieldset>
        	<legend>Sección: </legend>		 
			<?php
				echo (isset($_SESSION['username']) ? "Bienvenido/a: <strong>".$_SESSION['username']."</strong><br/>" : "");
				echo (isset($_SESSION['rol']) ? "Tú rol es: <strong> ".$_SESSION['rol']."</strong>" : "");
			?>				
		</fieldset>
		<div>
			<fieldset>
	   			<legend>Sección filtro de productos: </legend>
				<?php
					$controlador->mostrarFormularioFiltro();
				?>
	 		</fieldset>
		</div>
		<div>
		<!-- Mostramos el formulario si se pulsa el botón "iniciar sesion" -->
			<?php
			if(isset($_POST['mostrarFormulario'])){
			print("<fieldset>");
				print("<legend>Sección</legend>");
						$controlador->mostrarFormulario();
			print("</fieldset>");
			}

			//Validación al momento de pulsar el botón para iniciar la sesión
			if(isset($_POST['iniciarSesion'])){
				$username = $_POST['username'];
				$password = $_POST['password'];
				if($controlador->validarUsuario($username,$password)){
					$data = $controlador->mostrarInformacionUsuario($username);
					$_SESSION['username'] = $username;
					$_SESSION['rol'] = $data[0]['rol'];
					header("Location:".$_SERVER['PHP_SELF']);
				}
			}

			//redirigimos al cerrar_sesion.php y cerramos la sesion
			if(isset($_POST['cerrarSesion'])){
				header("Location:cerrar_sesion.php");
			}
			?>
		</div>
	</div> 
	
	<!-- Mostrar todos los productos -->
	<div id="cuerpo" style="width:70%; float:left;">
		<fieldset>
	   		<legend>Sección: </legend>
			<?php
				if(isset($_POST['Filtro'])){
					$controlador->MostrarFiltro($_POST);
				}else{
					$controlador->mostrarTodosLosProductos();
				}
			?>
		</fieldset>
    </div>
	
</div>
</body>
</html>