<?php

namespace App\Controllers;

use App\Models\KategoriModel;
use CodeIgniter\RESTful\ResourceController;

class KategoriController extends ResourceController
{
    public function index()
    {
        return $this->respond(
            (new KategoriModel())->findAll()
        );
    }

    public function show($id = null)
    {
        return $this->respond(
            (new KategoriModel())->find($id)
        );
    }

    public function create()
    {
        $model = new KategoriModel();

        $model->insert([
            'nama_kategori' =>
            $this->request->getJSON()->nama_kategori
        ]);

        return $this->respondCreated([
            'message'=>'Kategori berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        (new KategoriModel())->update($id,[
            'nama_kategori'=>
            $this->request->getJSON()->nama_kategori
        ]);

        return $this->respond([
            'message'=>'Kategori berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        (new KategoriModel())->delete($id);

        return $this->respondDeleted([
            'message'=>'Kategori berhasil dihapus'
        ]);
    }
}