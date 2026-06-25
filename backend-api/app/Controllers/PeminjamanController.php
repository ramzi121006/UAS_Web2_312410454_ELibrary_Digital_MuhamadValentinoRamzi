<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class PeminjamanController extends ResourceController
{
    protected $format = 'json';

    public function index()
    {
        $db = db_connect();

        $builder = $db->table('peminjaman');

        $builder->select('
            peminjaman.*,
            anggota.nama as nama_anggota,
            buku.judul as judul_buku
        ');

        $builder->join(
            'anggota',
            'anggota.id_anggota = peminjaman.anggota_id'
        );

        $builder->join(
            'buku',
            'buku.id_buku = peminjaman.buku_id'
        );

        return $this->respond(
            $builder->get()->getResult()
        );
    }

    public function show($id = null)
    {
        $db = db_connect();

        $builder = $db->table('peminjaman');

        $builder->select('
            peminjaman.*,
            anggota.nama as nama_anggota,
            buku.judul as judul_buku
        ');

        $builder->join(
            'anggota',
            'anggota.id_anggota = peminjaman.anggota_id'
        );

        $builder->join(
            'buku',
            'buku.id_buku = peminjaman.buku_id'
        );

        $builder->where(
            'id_peminjaman',
            $id
        );

        $data = $builder->get()->getRow();

        if (!$data) {
            return $this->failNotFound('Data tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        $data = [
            'anggota_id' => $this->request->getJSON()->anggota_id,
            'buku_id' => $this->request->getJSON()->buku_id,
            'tanggal_pinjam' => $this->request->getJSON()->tanggal_pinjam,
            'tanggal_kembali' => $this->request->getJSON()->tanggal_kembali,
            'status' => $this->request->getJSON()->status
        ];

        $db = db_connect();

        $db->table('peminjaman')->insert($data);

        return $this->respondCreated([
            'message' => 'Data peminjaman berhasil ditambahkan'
        ]);
    }

    public function update($id = null)
    {
        $data = [
            'anggota_id' => $this->request->getJSON()->anggota_id,
            'buku_id' => $this->request->getJSON()->buku_id,
            'tanggal_pinjam' => $this->request->getJSON()->tanggal_pinjam,
            'tanggal_kembali' => $this->request->getJSON()->tanggal_kembali,
            'status' => $this->request->getJSON()->status
        ];

        $db = db_connect();

        $db->table('peminjaman')
            ->where('id_peminjaman', $id)
            ->update($data);

        return $this->respond([
            'message' => 'Data peminjaman berhasil diupdate'
        ]);
    }

    public function delete($id = null)
    {
        $db = db_connect();

        $db->table('peminjaman')
            ->where('id_peminjaman', $id)
            ->delete();

        return $this->respond([
            'message' => 'Data peminjaman berhasil dihapus'
        ]);
    }
}