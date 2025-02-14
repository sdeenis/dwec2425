<?php
define("BR" , "</br>");
define ("IMAG" , array ("jpg","png","bmp","gif","JFIF"));
define('IDIOMA', [
    'es' => [
      'titulo' => 'GESTOR de IMAGENES' ,
      'lenguaje' => 'ELIGE tu idioma : ',
      'traducir' => 'traducir',
      'consultar'=> 'Consultar'
    ],
    'en' => [
      'titulo' => 'IMAGE MANAGER' ,
      'lenguaje' => 'CHOOSE YOUR LANGUAGE',
      'traducir' => 'translate',
      'consultar'=> 'consult'
    ]
  ]);

function form1(){
    echo 
    '<h1>'.IDIOMA[LENGUAJE]['titulo'] . '</h1>'.
    '<form method=post action=' . $_SERVER["PHP_SELF"] . '>'.
    IDIOMA[LENGUAJE]['lenguaje'];
    generarOpcionesLenguajes();
    echo '<input type="submit" value=' . IDIOMA[LENGUAJE]["traducir"] . ' />
    </form>';
    
}
function form2(){ 
    $f='<div style="float: left ;">';
    $f.='<form method=post action='. $_SERVER['PHP_SELF'].'>'.BR;
    $f.='<input type=file name=archivo >'.BR;
    $f.='<input type=submit value=RAS>'.BR;
    $f.='<input type=submit value='.IDIOMA[LENGUAJE]['consultar'].'>';
    $f.="</div>";
    echo $f;
}


function generarOpcionesLenguajes()
{
  foreach (IDIOMA as $lenguaje => $v) {
    echo '<label><input type="checkbox" name="lenguajes">'.strtoupper($lenguaje) . '</label>';
  }
}

?>