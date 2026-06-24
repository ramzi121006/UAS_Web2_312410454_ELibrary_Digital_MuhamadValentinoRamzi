const Kategori = {

data() {
    return {

        kategori: [],

        showModal: false,

        editMode: false,

        idEdit: null,

        form: {
            nama_kategori: ''
        }

    }
},

mounted() {

    this.getKategori()

},

methods: {

    getKategori() {

        axios.get(
            'http://localhost:8080/kategori'
        )

        .then(response => {

            this.kategori = response.data

        })

    },

    tambahBaru() {

        this.showModal = true

        this.editMode = false

        this.form.nama_kategori = ''

    },

    simpan() {

        if(this.editMode){

            axios.put(
                'http://localhost:8080/kategori/' + this.idEdit,
                this.form
            )

            .then(() => {

                this.getKategori()

                this.showModal = false

            })

        }

        else{

            axios.post(
                'http://localhost:8080/kategori',
                this.form
            )

            .then(() => {

                this.getKategori()

                this.showModal = false

            })

        }

    },

    edit(item){

        this.showModal = true

        this.editMode = true

        this.idEdit = item.id_kategori

        this.form.nama_kategori = item.nama_kategori

    },

    hapus(id){

        if(confirm('Hapus data?')){

            axios.delete(
                'http://localhost:8080/kategori/' + id
            )

            .then(() => {

                this.getKategori()

            })

        }

    }

},

template:`

<div class="p-8">

<div class="flex justify-between mb-6">

<h1 class="text-3xl font-bold">

Kategori Buku

</h1>

<button
@click="tambahBaru"
class="bg-blue-600 text-white px-5 py-2 rounded">

Tambah Kategori

</button>

</div>


<table class="w-full bg-white shadow rounded">

<thead class="bg-blue-700 text-white">

<tr>

<th class="p-3">ID</th>
<th>Nama Kategori</th>
<th>Aksi</th>

</tr>

</thead>

<tbody>

<tr
v-for="item in kategori"
:key="item.id_kategori">

<td class="p-3">

{{ item.id_kategori }}

</td>

<td>

{{ item.nama_kategori }}

</td>

<td>

<button
@click="edit(item)"
class="bg-yellow-500 text-white px-3 py-1 rounded">

Edit

</button>

<button
@click="hapus(item.id_kategori)"
class="bg-red-600 text-white px-3 py-1 rounded ml-2">

Hapus

</button>

</td>

</tr>

</tbody>

</table>



<div
v-if="showModal"
class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

<div class="bg-white p-6 rounded w-96">

<h2 class="text-2xl font-bold mb-5">

{{ editMode ? 'Edit Kategori' : 'Tambah Kategori' }}

</h2>

<input
v-model="form.nama_kategori"
placeholder="Nama Kategori"
class="border p-3 w-full rounded mb-5">

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