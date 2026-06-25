<?php

namespace App\Models;

use CodeIgniter\Model;

class BukuModel extends Model
{
    protected $table = 'buku';
    protected $primaryKey = 'id_buku';

    protected $allowedFields = [
        'judul',
        'kategori_id',
        'penulis_id',
        'penerbit_id',
        'tahun_terbit',
        'stok',
        'cover'
    ];

    protected $returnType = 'array';
}