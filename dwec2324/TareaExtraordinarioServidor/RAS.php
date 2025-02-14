<!DOCTYPE html>
<?php
define('LENGUAJE', $_POST['lenguaje'] ?? 'es');
echo LENGUAJE;
include("RAS.vista.inc.php");

?>
<html lang="<?php echo LENGUAJE ?? 'es'; ?>">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>
<body>
    <?php 
    form1();
    form2();
    ?>
</body>
</html>