<?php

class Datos{

    private $cabeceraProductos = [
        'cod' => 'Código del producto',
        'nom_prod' => 'Nombre del producto',
        'pvp' => 'Precio de venta al público',
        'prov' => 'Proveedores',
        'imagen' => 'Imágenes',
        'existencias' => 'Existencias'
    ];

    public function __construct() {
    }

    // Getters
    public function getCabeceraProductos() {
        return $this->cabeceraProductos;
    }
}

?>