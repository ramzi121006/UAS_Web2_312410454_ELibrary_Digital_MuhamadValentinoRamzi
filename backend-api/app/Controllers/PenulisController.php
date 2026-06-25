<?php

namespace App\Controllers;

use App\Models\PenulisModel;
use CodeIgniter\RESTful\ResourceController;

class PenulisController extends ResourceController
{
    protected $modelName = PenulisModel::class;
    protected $format    = 'json';

    public function index()
    {
        return $this->respond(
            $this->model->findAll()
        );
    }

    public function show($id = null)
    {
        $data = $this->model->find($id);

        if (!$data) {
            return $this->failNotFound('Data penulis tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        $data = $this->request->getJSON(true);

        if (
            empty($data['nama_penulis']) ||
            empty($data['negara'])
        ) {
            return $this->fail([
                'message' => 'Nama Penulis dan Negara wajib diisi'
            ]);
        }

        $this->model->insert([
            'nama_penulis' => $data['nama_penulis'],
            'negara'       => $data['negara']
        ]);

        return $this->respondCreated([
            'message' => 'Data penulis berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        $data = $this->request->getJSON(true);

        if (
            empty($data['nama_penulis']) ||
            empty($data['negara'])
        ) {
            return $this->fail([
                'message' => 'Nama Penulis dan Negara wajib diisi'
            ]);
        }

        $this->model->update($id, [
            'nama_penulis' => $data['nama_penulis'],
            'negara'       => $data['negara']
        ]);

        return $this->respond([
            'message' => 'Data penulis berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $penulis = $this->model->find($id);

        if (!$penulis) {
            return $this->failNotFound('Data penulis tidak ditemukan');
        }

        $this->model->delete($id);

        return $this->respond([
            'message' => 'Data penulis berhasil dihapus'
        ]);
    }
}