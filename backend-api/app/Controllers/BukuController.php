<?php

namespace App\Controllers;

use App\Models\BukuModel;
use CodeIgniter\RESTful\ResourceController;

class BukuController extends ResourceController
{
    public function index()
    {
        $db = db_connect();

        $builder = $db->table('buku');

        $builder->select('
            buku.*,
            kategori.nama_kategori,
            penulis.nama_penulis,
            penerbit.nama_penerbit
        ');

        $builder->join(
            'kategori',
            'kategori.id_kategori=buku.kategori_id'
        );

        $builder->join(
            'penulis',
            'penulis.id_penulis=buku.penulis_id'
        );

        $builder->join(
            'penerbit',
            'penerbit.id_penerbit=buku.penerbit_id'
        );

        return $this->respond(
            $builder->get()->getResult()
        );
    }

    public function create()
    {
        $json = $this->request->getJSON();

        (new BukuModel())->insert([
            'judul'=>$json->judul,
            'kategori_id'=>$json->kategori_id,
            'penulis_id'=>$json->penulis_id,
            'penerbit_id'=>$json->penerbit_id,
            'tahun_terbit'=>$json->tahun_terbit,
            'stok'=>$json->stok
        ]);

        return $this->respondCreated([
            'message'=>'Buku berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        $json = $this->request->getJSON();

        (new BukuModel())->update($id,[
            'judul'=>$json->judul,
            'kategori_id'=>$json->kategori_id,
            'penulis_id'=>$json->penulis_id,
            'penerbit_id'=>$json->penerbit_id,
            'tahun_terbit'=>$json->tahun_terbit,
            'stok'=>$json->stok
        ]);

        return $this->respond([
            'message'=>'Buku berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        (new BukuModel())->delete($id);

        return $this->respondDeleted([
            'message'=>'Buku berhasil dihapus'
        ]);
    }
}