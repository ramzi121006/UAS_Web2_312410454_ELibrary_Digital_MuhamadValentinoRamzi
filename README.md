# 📚 E-Library Digital

## Deskripsi Proyek

E-Library Digital merupakan aplikasi perpustakaan berbasis web yang dirancang untuk membantu proses pengelolaan buku, anggota, serta transaksi peminjaman dan pengembalian buku secara digital. Sistem ini dibuat untuk menggantikan proses pencatatan manual sehingga pengelolaan data menjadi lebih cepat, akurat, dan terstruktur.

Aplikasi ini dikembangkan sebagai proyek Ujian Akhir Semester (UAS) mata kuliah Pemrograman Web 2 dengan menerapkan konsep modern web development menggunakan arsitektur frontend dan backend yang dipisahkan (Decoupled Architecture).

---

## Latar Belakang

Pengelolaan perpustakaan secara manual memiliki beberapa kelemahan seperti:

* Sulitnya melakukan pencarian data buku.
* Risiko kehilangan atau kerusakan data pencatatan.
* Proses peminjaman dan pengembalian yang memerlukan waktu lebih lama.
* Kesulitan dalam memantau jumlah buku dan aktivitas peminjaman.

Melalui aplikasi E-Library Digital, seluruh proses tersebut dapat dilakukan secara terkomputerisasi sehingga lebih efektif dan efisien.

---

## Tujuan Pengembangan

Tujuan dari pengembangan aplikasi ini adalah:

* Mempermudah pengelolaan data buku dan koleksi perpustakaan.
* Mempermudah pengelolaan data anggota perpustakaan.
* Mempermudah proses peminjaman dan pengembalian buku.
* Menyediakan dashboard statistik untuk memantau kondisi perpustakaan.
* Mengimplementasikan konsep REST API dan Single Page Application (SPA).

---

## Teknologi yang Digunakan

### Backend

* PHP
* CodeIgniter 4
* REST API
* MySQL Database

### Frontend

* Vue.js 3
* Vue Router
* Axios
* Tailwind CSS

### Tools Pendukung

* XAMPP
* phpMyAdmin
* Visual Studio Code
* Postman
* Git
* GitHub

---

## Arsitektur Sistem

Aplikasi menggunakan konsep **Decoupled Architecture**, yaitu memisahkan frontend dan backend menjadi dua aplikasi yang berbeda.

```text
Frontend (VueJS SPA)
        ↓ Axios Request
Backend REST API (CodeIgniter 4)
        ↓
Database MySQL
```

Keuntungan dari arsitektur ini antara lain:

* Frontend dan backend dapat dikembangkan secara terpisah.
* Mempermudah pengembangan aplikasi mobile di masa depan.
* Lebih fleksibel untuk pengembangan skala besar.
* Mempermudah maintenance aplikasi.

---

## Fitur Aplikasi

### 🔐 Authentication

* Login Administrator
* Logout Administrator
* Token Authentication
* Route Protection

### 📊 Dashboard

* Total Buku
* Total Kategori
* Total Penulis
* Total Penerbit
* Total Anggota
* Total Peminjaman

### 📚 Manajemen Buku

* Menambahkan buku baru
* Mengubah data buku
* Menghapus buku
* Menampilkan daftar buku

### 🏷️ Manajemen Kategori

* Tambah kategori
* Edit kategori
* Hapus kategori

### ✍️ Manajemen Penulis

* Tambah penulis
* Edit penulis
* Hapus penulis

### 🏢 Manajemen Penerbit

* Tambah penerbit
* Edit penerbit
* Hapus penerbit

### 👤 Manajemen Anggota

* Tambah anggota
* Edit anggota
* Hapus anggota

### 📖 Manajemen Peminjaman

* Tambah transaksi peminjaman
* Edit transaksi peminjaman
* Hapus transaksi peminjaman
* Status dipinjam atau dikembalikan

---

## Struktur Database

Aplikasi menggunakan 7 tabel utama:

1. users
2. kategori
3. penulis
4. penerbit
5. buku
6. anggota
7. peminjaman

Relasi utama:

* Buku memiliki relasi dengan kategori, penulis, dan penerbit.
* Peminjaman memiliki relasi dengan anggota dan buku.

---

## Struktur Project

```text
UAS_Web2_312410454_Muhamad_Valentino_Ramzi
│
├── backend-api
│   ├── app
│   ├── public
│   ├── writable
│   └── .env
│
└── frontend-spa
    ├── components
    ├── app.js
    ├── router.js
    ├── axios.js
    └── index.html
```

---

## Instalasi dan Menjalankan Aplikasi

### Menjalankan Backend

```bash
cd backend-api
php spark serve
```

Backend berjalan pada:

```text
http://localhost:8080
```

---

### Menjalankan Frontend

Menggunakan Live Server:

```text
http://localhost:5500
```

atau menggunakan XAMPP:

```text
http://localhost/frontend-spa
```

---

### Import Database

1. Jalankan Apache dan MySQL pada XAMPP.
2. Buka phpMyAdmin.
3. Buat database dengan nama:

```text
elibrary_db
```

4. Import file SQL yang telah disediakan.

---

## Dokumentasi API

### Authentication

| Method | Endpoint |
| ------ | -------- |
| POST   | /login   |

### Buku

| Method | Endpoint   |
| ------ | ---------- |
| GET    | /buku      |
| POST   | /buku      |
| PUT    | /buku/{id} |
| DELETE | /buku/{id} |

### Kategori

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /kategori      |
| POST   | /kategori      |
| PUT    | /kategori/{id} |
| DELETE | /kategori/{id} |

### Penulis

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /penulis      |
| POST   | /penulis      |
| PUT    | /penulis/{id} |
| DELETE | /penulis/{id} |

### Penerbit

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /penerbit      |
| POST   | /penerbit      |
| PUT    | /penerbit/{id} |
| DELETE | /penerbit/{id} |

### Anggota

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /anggota      |
| POST   | /anggota      |
| PUT    | /anggota/{id} |
| DELETE | /anggota/{id} |

### Peminjaman

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /peminjaman      |
| POST   | /peminjaman      |
| PUT    | /peminjaman/{id} |
| DELETE | /peminjaman/{id} |

---

## Screenshot Aplikasi

### Login

![Tambahkan screenshot halaman login](https://github.com/ramzi121006/UAS_Web2_312410454_ELibrary_Digital_MuhamadValentinoRamzi/blob/a91343a291c1ed83acfa91fdaba071efcd496bdc/hasil%20ss-san%20web/Screenshot%202026-06-25%20110306.png)

### Dashboard

(Tambahkan screenshot dashboard)

### Data Buku

(Tambahkan screenshot halaman buku)

### Data Kategori

(Tambahkan screenshot halaman kategori)

### Data Penulis

(Tambahkan screenshot halaman penulis)

### Data Penerbit

(Tambahkan screenshot halaman penerbit)

### Data Anggota

(Tambahkan screenshot halaman anggota)

### Data Peminjaman

(Tambahkan screenshot halaman peminjaman)

### Dokumentasi API menggunakan Postman

(Tambahkan screenshot pengujian API)

---

## Hasil Implementasi

Aplikasi berhasil mengimplementasikan:

* REST API menggunakan CodeIgniter 4.
* Single Page Application menggunakan VueJS.
* CRUD pada seluruh modul.
* Dashboard statistik.
* Integrasi frontend dan backend menggunakan Axios.
* Relasi database menggunakan foreign key.
* Sistem autentikasi administrator.

---

## Kesimpulan

E-Library Digital berhasil memenuhi kebutuhan pengelolaan perpustakaan secara digital dengan memanfaatkan teknologi modern berbasis REST API dan Single Page Application. Dengan sistem ini proses pengelolaan data menjadi lebih cepat, efisien, dan mudah digunakan dibandingkan dengan sistem manual.

---

## Author

**Muhamad Valentino Ramzi**
**NIM : 312410454**
**Program Studi : Teknik Informatika**
**Mata Kuliah : Pemrograman Web 2**

---

## Repository GitHub

[Tambahkan link repository GitHub Anda di sini](https://github.com/ramzi121006/UAS_Web2_312410454_ELibrary_Digital_MuhamadValentinoRamzi.git).

---

## Video Presentasi

[Tambahkan link video presentasi YouTube di sini.
](https://youtu.be/nBTvwUEDyNI)
