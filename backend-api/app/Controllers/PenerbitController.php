<?php

namespace App\Controllers;

use App\Models\PenerbitModel;
use CodeIgniter\RESTful\ResourceController;

class PenerbitController extends ResourceController
{
    protected $modelName = PenerbitModel::class;
    protected $format    = 'json';

    public function index()
    {
        return $this->respond(
            $this->model->findAll()
        );
    }

    public function show($id = null)
    {
        return $this->respond(
            $this->model->find($id)
        );
    }

    public function create()
{
    $data = $this->request->getJSON(true);

    $this->model->insert($data);

    return $this->respondCreated([
        'message' => 'Data berhasil ditambahkan',
        'data' => $data
    ]);
}

    public function update($id = null)
    {
        $data = [

            'nama_penerbit' => $this->request->getJSON()->nama_penerbit,
            'alamat'        => $this->request->getJSON()->alamat,
            'telepon'       => $this->request->getJSON()->telepon

        ];

        $this->model->update($id, $data);

        return $this->respond([
            'message' => 'Data berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $this->model->delete($id);

        return $this->respond([
            'message' => 'Data berhasil dihapus'
        ]);
    }
}