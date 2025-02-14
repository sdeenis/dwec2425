<?php

session_start();

if(isset($_SESSION)){
    unset($_SESSION);
    session_destroy();
    header("Location:panel_app.php");
}else{
    header("Location:panel_app.php");
}

?>