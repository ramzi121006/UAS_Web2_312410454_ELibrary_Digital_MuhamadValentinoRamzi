const Penulis = {

data() {
    return {

        penulis: [],

        showModal: false,

        editMode: false,

        idEdit: null,

        form: {
            nama_penulis: '',
            negara: ''
        }

    }
},

mounted() {

    this.getPenulis()

},

methods: {

    getPenulis() {

        axios.get(
            'http://localhost:8080/penulis'
        )

        .then(response => {

            this.penulis = response.data

        })

    },

    tambahBaru() {

        this.showModal = true
        this.editMode = false

        this.form = {
            nama_penulis: '',
            negara: ''
        }

    },

    simpan() {

        if(this.editMode){

            axios.put(
                'http://localhost:8080/penulis/' + this.idEdit,
                this.form
            )

            .then(() => {

                this.getPenulis()

                this.showModal = false

            })

        }else{

            axios.post(
                'http://localhost:8080/penulis',
                this.form
            )

            .then(() => {

                this.getPenulis()

                this.showModal = false

            })

        }

    },

    edit(item){

        this.showModal = true
        this.editMode = true

        this.idEdit = item.id_penulis

        this.form.nama_penulis = item.nama_penulis
        this.form.negara = item.negara

    },

    hapus(id){

        if(confirm('Hapus data?')){

            axios.delete(
                'http://localhost:8080/penulis/' + id
            )

            .then(() => {

                this.getPenulis()

            })

        }

    }

},

template:`

<div class="p-8">

<div class="flex justify-between mb-6">

<h1 class="text-3xl font-bold">

Data Penulis

</h1>

<button
@click="tambahBaru"
class="bg-blue-600 text-white px-5 py-2 rounded">

Tambah Penulis

</button>

</div>


<table class="w-full bg-white shadow rounded">

<thead class="bg-blue-700 text-white">

<tr>

<th class="p-3">ID</th>
<th>Nama Penulis</th>
<th>Negara</th>
<th>Aksi</th>

</tr>

</thead>

<tbody>

<tr
v-for="item in penulis"
:key="item.id_penulis">

<td class="p-3">

{{ item.id_penulis }}

</td>

<td>

{{ item.nama_penulis }}

</td>

<td>

{{ item.negara }}

</td>

<td>

<button
@click="edit(item)"
class="bg-yellow-500 text-white px-3 py-1 rounded">

Edit

</button>

<button
@click="hapus(item.id_penulis)"
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

{{ editMode ? 'Edit Penulis' : 'Tambah Penulis' }}

</h2>

<input
v-model="form.nama_penulis"
placeholder="Nama Penulis"
class="border p-3 w-full rounded mb-3">

<input
v-model="form.negara"
placeholder="Negara"
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