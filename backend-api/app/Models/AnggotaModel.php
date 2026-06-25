<?php

namespace App\Models;

use CodeIgniter\Model;

class AnggotaModel extends Model
{
    protected $table = 'anggota';
    protected $primaryKey = 'id_anggota';

    protected $allowedFields = [
        'nama',
        'email',
        'telepon',
        'alamat'
    ];

    protected $returnType = 'array';
}