<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "elibrary_db",
    3307
);

if(!$conn){
    die(mysqli_connect_error());
}

echo "Koneksi berhasil";