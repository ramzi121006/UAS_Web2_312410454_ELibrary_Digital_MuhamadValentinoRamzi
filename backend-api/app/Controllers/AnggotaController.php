<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class AnggotaController extends ResourceController
{
    protected $format = 'json';

    public function index()
    {
        $db = db_connect();

        $data = $db->table('anggota')
                   ->get()
                   ->getResult();

        return $this->respond($data);
    }

    public function show($id = null)
    {
        $db = db_connect();

        $data = $db->table('anggota')
                   ->where('id_anggota', $id)
                   ->get()
                   ->getRow();

        if (!$data) {
            return $this->failNotFound('Data anggota tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        $json = $this->request->getJSON();

        $data = [
            'nama'     => $json->nama,
            'email'    => $json->email,
            'telepon'  => $json->telepon,
            'alamat'   => $json->alamat
        ];

        $db = db_connect();

        $db->table('anggota')->insert($data);

        return $this->respondCreated([
            'message' => 'Anggota berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        $json = $this->request->getJSON();

        $data = [
            'nama'     => $json->nama,
            'email'    => $json->email,
            'telepon'  => $json->telepon,
            'alamat'   => $json->alamat
        ];

        $db = db_connect();

        $db->table('anggota')
            ->where('id_anggota', $id)
            ->update($data);

        return $this->respond([
            'message' => 'Anggota berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $db = db_connect();

        $db->table('anggota')
            ->where('id_anggota', $id)
            ->delete();

        return $this->respond([
            'message' => 'Anggota berhasil dihapus'
        ]);
    }
}