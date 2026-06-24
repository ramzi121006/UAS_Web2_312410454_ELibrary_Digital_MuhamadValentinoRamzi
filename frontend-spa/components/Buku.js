
const Buku = {

data() {
    return {

        buku: [],
        kategori: [],
        penulis: [],
        penerbit: [],

        showModal: false,
        editMode: false,
        idEdit: null,

        form: {
            judul: '',
            kategori_id: '',
            penulis_id: '',
            penerbit_id: '',
            tahun_terbit: '',
            stok: ''
        }

    }
},

mounted() {

    this.getBuku()
    this.getKategori()
    this.getPenulis()
    this.getPenerbit()

},

methods: {

    getBuku() {

        axios.get('http://localhost:8080/buku')
            .then(response => {

                this.buku = response.data

            })

    },

    getKategori() {

        axios.get('http://localhost:8080/kategori')
            .then(response => {

                this.kategori = response.data

            })

    },

    getPenulis() {

        axios.get('http://localhost:8080/penulis')
            .then(response => {

                this.penulis = response.data

            })

    },

    getPenerbit() {

        axios.get('http://localhost:8080/penerbit')
            .then(response => {

                this.penerbit = response.data

            })

    },

    tambahBaru() {

        this.showModal = true
        this.editMode = false

        this.form = {

            judul: '',
            kategori_id: '',
            penulis_id: '',
            penerbit_id: '',
            tahun_terbit: '',
            stok: ''

        }

    },

    simpan() {

        if (this.editMode) {

            axios.put(
                'http://localhost:8080/buku/' + this.idEdit,
                this.form
            )

            .then(() => {

                alert("Data berhasil diupdate")

                this.getBuku()

                this.showModal = false

            })

        } else {

            axios.post(
                'http://localhost:8080/buku',
                this.form
            )

            .then(() => {

                alert("Data berhasil ditambahkan")

                this.getBuku()

                this.showModal = false

            })

        }

    },

    edit(item) {

        this.showModal = true
        this.editMode = true

        this.idEdit = item.id_buku

        this.form.judul = item.judul
        this.form.kategori_id = item.kategori_id
        this.form.penulis_id = item.penulis_id
        this.form.penerbit_id = item.penerbit_id
        this.form.tahun_terbit = item.tahun_terbit
        this.form.stok = item.stok

    },

    hapus(id) {

        if (confirm('Hapus buku ini?')) {

            axios.delete(
                'http://localhost:8080/buku/' + id
            )

            .then(() => {

                this.getBuku()

            })

        }

    }

},

template: `

<div class="p-8">

    <div class="flex justify-between items-center mb-6">

        <h1 class="text-3xl font-bold">
            Manajemen Buku
        </h1>

        <button
            @click="tambahBaru"
            class="bg-blue-600 text-white px-5 py-2 rounded">

            Tambah Buku

        </button>

    </div>


    <table class="w-full bg-white shadow rounded overflow-hidden">

        <thead class="bg-blue-700 text-white">

            <tr>

                <th class="p-3">Judul</th>
                <th>Kategori</th>
                <th>Penulis</th>
                <th>Penerbit</th>
                <th>Tahun</th>
                <th>Stok</th>
                <th>Aksi</th>

            </tr>

        </thead>

        <tbody>

            <tr
                v-for="item in buku"
                :key="item.id_buku"
                class="border-b">

                <td class="p-3">
                    {{ item.judul }}
                </td>

                <td>
                    {{ item.nama_kategori }}
                </td>

                <td>
                    {{ item.nama_penulis }}
                </td>

                <td>
                    {{ item.nama_penerbit }}
                </td>

                <td>
                    {{ item.tahun_terbit }}
                </td>

                <td>
                    {{ item.stok }}
                </td>

                <td>

                    <button
                        @click="edit(item)"
                        class="bg-yellow-500 text-white px-3 py-1 rounded">

                        Edit

                    </button>

                    <button
                        @click="hapus(item.id_buku)"
                        class="bg-red-600 text-white px-3 py-1 rounded ml-2">

                        Hapus

                    </button>

                </td>

            </tr>

        </tbody>

    </table>


    <!-- Modal -->

    <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

        <div class="bg-white p-6 rounded-lg shadow-lg w-[500px]">

            <h2 class="text-2xl font-bold mb-5">

                {{ editMode ? 'Edit Buku' : 'Tambah Buku' }}

            </h2>


            <input
                v-model="form.judul"
                placeholder="Judul Buku"
                class="border p-3 rounded w-full mb-3">


            <select
                v-model="form.kategori_id"
                class="border p-3 rounded w-full mb-3">

                <option value="">Pilih Kategori</option>

                <option
                    v-for="item in kategori"
                    :value="item.id_kategori">

                    {{ item.nama_kategori }}

                </option>

            </select>


            <select
                v-model="form.penulis_id"
                class="border p-3 rounded w-full mb-3">

                <option value="">Pilih Penulis</option>

                <option
                    v-for="item in penulis"
                    :value="item.id_penulis">

                    {{ item.nama_penulis }}

                </option>

            </select>


            <select
                v-model="form.penerbit_id"
                class="border p-3 rounded w-full mb-3">

                <option value="">Pilih Penerbit</option>

                <option
                    v-for="item in penerbit"
                    :value="item.id_penerbit">

                    {{ item.nama_penerbit }}

                </option>

            </select>


            <input
                v-model="form.tahun_terbit"
                placeholder="Tahun Terbit"
                class="border p-3 rounded w-full mb-3">


            <input
                v-model="form.stok"
                placeholder="Stok"
                class="border p-3 rounded w-full mb-5">


            <div class="flex justify-end gap-3">

                <button
                    @click="showModal=false"
                    class="bg-gray-500 text-white px-4 py-2 rounded">

                    Batal

                </button>

                <button
                    @click="simpan"
                    class="bg-blue-600 text-white px-4 py-2 rounded">

                    {{ editMode ? 'Update' : 'Tambah' }}

                </button>

            </div>

        </div>

    </div>

</div>

`

}
