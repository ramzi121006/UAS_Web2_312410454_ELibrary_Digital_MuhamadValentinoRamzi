<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;

class AuthController extends ResourceController
{
   
public function login()
{
    try {

        $data = $this->request->getJSON(true);

        return $this->respond([
            'status' => true,
            'data' => $data
        ]);

    } catch (\Throwable $e) {

        return $this->respond([
            'status' => false,
            'error' => $e->getMessage()
        ],500);

    }
}
}