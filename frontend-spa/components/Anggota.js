const Anggota = {
    data() {
        return {
            anggota: [],
            showModal: false,
            editMode: false,
            idEdit: null,

            form: {
                nama: '',
                email: '',
                telepon: '',
                alamat: ''
            }
        }
    },
    

    mounted() {
        this.getAnggota();
    },

    methods: {

       getAnggota() {
    axios.get('http://localhost:8080/anggota')
        .then(res => {
            this.anggota = res.data;
        });
},

        tambahBaru() {
            this.showModal = true;
            this.editMode = false;

            this.form = {
                nama: '',
                email: '',
                telepon: '',
                alamat: ''
            };
        },

        simpan() {

            if(this.editMode){

                axios.put(
                    `http://localhost:8080/anggota/${this.idEdit}`,
                    this.form
                ).then(() => {
                    this.getAnggota();
                    this.showModal = false;
                });

            }else{

                axios.post(
                    'http://localhost:8080/anggota',
                    this.form
                ).then(() => {
                    this.getAnggota();
                    this.showModal = false;
                });

            }

        },

        edit(item){
            this.showModal = true;
            this.editMode = true;
            this.idEdit = item.id_anggota;

            this.form = {
                nama: item.nama,
                email: item.email,
                telepon: item.telepon,
                alamat: item.alamat
            };
        },

        hapus(id){

            if(confirm("Hapus anggota ini?")){

                axios.delete(
                    `http://localhost:8080/anggota/${id}`
                ).then(() => {
                    this.getAnggota();
                });

            }

        }

    },

template:`

<div class="p-8">

<div class="flex justify-between mb-6">

<h1 class="text-3xl font-bold">
Data Anggota
</h1>

<button
@click="tambahBaru"
class="bg-blue-600 text-white px-4 py-2 rounded">

Tambah Anggota

</button>

</div>


<table class="w-full bg-white shadow rounded">

<thead class="bg-blue-700 text-white">

<tr>
<th class="p-3">Nama</th>
<th>Email</th>
<th>Telepon</th>
<th>Alamat</th>
<th>Aksi</th>
</tr>

</thead>

<tbody>

<tr
v-for="item in anggota"
:key="item.id_anggota">

<td class="p-3">{{item.nama}}</td>
<td>{{item.email}}</td>
<td>{{item.telepon}}</td>
<td>{{item.alamat}}</td>

<td>

<button
@click="edit(item)"
class="bg-yellow-500 text-white px-3 py-1 rounded">

Edit

</button>

<button
@click="hapus(item.id_anggota)"
class="bg-red-500 text-white px-3 py-1 rounded ml-2">

Hapus

</button>

</td>

</tr>

</tbody>

</table>


<div
v-if="showModal"
class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

<div class="bg-white p-6 rounded w-96">

<h2 class="text-2xl font-bold mb-5">

{{editMode ? 'Edit Anggota' : 'Tambah Anggota'}}

</h2>

<input
v-model="form.nama"
placeholder="Nama"
class="border p-3 rounded w-full mb-3">

<input
v-model="form.email"
placeholder="Email"
class="border p-3 rounded w-full mb-3">

<input
v-model="form.telepon"
placeholder="Telepon"
class="border p-3 rounded w-full mb-3">

<textarea
v-model="form.alamat"
placeholder="Alamat"
class="border p-3 rounded w-full mb-5"></textarea>

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