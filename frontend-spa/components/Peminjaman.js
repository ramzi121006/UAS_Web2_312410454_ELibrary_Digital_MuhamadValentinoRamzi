const Peminjaman = {

data() {
    return {

        peminjaman: [],
        anggota: [],
        buku: [],

        showModal: false,
        editMode: false,
        idEdit: null,

        form: {
            anggota_id: '',
            buku_id: '',
            tanggal_pinjam: '',
            tanggal_kembali: '',
            status: 'Dipinjam'
        }

    }
},

mounted() {
    this.getPeminjaman();
    this.getAnggota();
    this.getBuku();
},

methods: {

    getPeminjaman() {

        axios.get(
            'http://localhost:8080/peminjaman'
        )
        .then(response => {

            this.peminjaman = response.data;

        });

    },

    getAnggota() {

        axios.get(
            'http://localhost:8080/anggota'
        )
        .then(response => {

            this.anggota = response.data;

        });

    },

    getBuku() {

        axios.get(
            'http://localhost:8080/buku'
        )
        .then(response => {

            this.buku = response.data;

        });

    },

    tambahBaru() {

        this.showModal = true;

        this.editMode = false;

        this.form = {
            anggota_id: '',
            buku_id: '',
            tanggal_pinjam: '',
            tanggal_kembali: '',
            status: 'Dipinjam'
        };

    },

    simpan() {

        if(this.editMode){

            axios.put(
                `http://localhost:8080/peminjaman/${this.idEdit}`,
                this.form
            )
            .then(() => {

                this.getPeminjaman();

                this.showModal = false;

            });

        } else {

            axios.post(
                'http://localhost:8080/peminjaman',
                this.form
            )
            .then(() => {

                this.getPeminjaman();

                this.showModal = false;

            });

        }

    },

    edit(item){

        this.showModal = true;

        this.editMode = true;

        this.idEdit = item.id_peminjaman;

        this.form = {
            anggota_id: item.anggota_id,
            buku_id: item.buku_id,
            tanggal_pinjam: item.tanggal_pinjam,
            tanggal_kembali: item.tanggal_kembali,
            status: item.status
        };

    },

    hapus(id){

        if(confirm('Hapus data peminjaman?')){

            axios.delete(
                `http://localhost:8080/peminjaman/${id}`
            )
            .then(() => {

                this.getPeminjaman();

            });

        }

    }

},

template:`

<div class="p-8">

<div class="flex justify-between mb-6">

<h1 class="text-3xl font-bold">
Data Peminjaman
</h1>

<button
@click="tambahBaru"
class="bg-blue-600 text-white px-4 py-2 rounded">

Tambah Peminjaman

</button>

</div>


<table class="w-full bg-white shadow rounded">

<thead class="bg-blue-700 text-white">

<tr>

<th class="p-3">Anggota</th>
<th>Buku</th>
<th>Tanggal Pinjam</th>
<th>Tanggal Kembali</th>
<th>Status</th>
<th>Aksi</th>

</tr>

</thead>

<tbody>

<tr
v-for="item in peminjaman"
:key="item.id_peminjaman">

<td class="p-3">
{{ item.nama_anggota }}
</td>

<td>
{{ item.judul_buku }}
</td>

<td>
{{ item.tanggal_pinjam }}
</td>

<td>
{{ item.tanggal_kembali }}
</td>

<td>

<span
class="px-2 py-1 rounded bg-yellow-200"
v-if="item.status=='Dipinjam'">

{{ item.status }}

</span>

<span
class="px-2 py-1 rounded bg-green-200"
v-else>

{{ item.status }}

</span>

</td>

<td>

<button
@click="edit(item)"
class="bg-yellow-500 text-white px-3 py-1 rounded">

Edit

</button>

<button
@click="hapus(item.id_peminjaman)"
class="bg-red-500 text-white px-3 py-1 rounded ml-2">

Hapus

</button>

</td>

</tr>

</tbody>

</table>


<div
v-if="showModal"
class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

<div class="bg-white p-6 rounded w-96">

<h2 class="text-2xl font-bold mb-5">

{{ editMode ? 'Edit Peminjaman' : 'Tambah Peminjaman' }}

</h2>

<select
v-model="form.anggota_id"
class="border p-3 rounded w-full mb-3">

<option value="">
Pilih Anggota
</option>

<option
v-for="a in anggota"
:value="a.id_anggota">

{{ a.nama }}

</option>

</select>


<select
v-model="form.buku_id"
class="border p-3 rounded w-full mb-3">

<option value="">
Pilih Buku
</option>

<option
v-for="b in buku"
:value="b.id_buku">

{{ b.judul }}

</option>

</select>


<input
type="date"
v-model="form.tanggal_pinjam"
class="border p-3 rounded w-full mb-3">


<input
type="date"
v-model="form.tanggal_kembali"
class="border p-3 rounded w-full mb-3">


<select
v-model="form.status"
class="border p-3 rounded w-full mb-5">

<option value="Dipinjam">
Dipinjam
</option>

<option value="Dikembalikan">
Dikembalikan
</option>

</select>


<div class="flex justify-end">

<button
@click="showModal=false"
class="bg-gray-500 text-white px-4 py-2 rounded">

Batal

</button>

<button
@click="simpan"
class="bg-blue-600 text-white px-4 py-2 rounded ml-2">

Simpan

</button>

</div>

</div>

</div>

</div>

`

}