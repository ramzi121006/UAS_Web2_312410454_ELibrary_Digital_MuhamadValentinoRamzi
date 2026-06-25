<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */

$routes->get('/', 'Home::index');

/*
|--------------------------------------------------------------------------
| CORS Preflight
|--------------------------------------------------------------------------
*/
$routes->options('(:any)', static function () {

    return service('response')
        ->setStatusCode(200)
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        )
        ->setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        );
});

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/
$routes->post('login', 'AuthController::login');

/*
|--------------------------------------------------------------------------
| API Resource Routes
|--------------------------------------------------------------------------
*/

$routes->resource('kategori', [
    'controller' => 'KategoriController'
]);

$routes->resource('penulis', [
    'controller' => 'PenulisController'
]);

$routes->resource('penerbit', [
    'controller' => 'PenerbitController'
]);

$routes->resource('buku', [
    'controller' => 'BukuController'
]);

$routes->resource('anggota', [
    'controller' => 'AnggotaController'
]);

$routes->resource('peminjaman', [
    'controller' => 'PeminjamanController'
]);