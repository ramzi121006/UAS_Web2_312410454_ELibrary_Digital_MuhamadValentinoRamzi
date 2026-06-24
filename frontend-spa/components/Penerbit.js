const Penerbit = {

data() {
    return {

        penerbit: [],

        search: '',
        notif: '',
        loading: false,

        showModal: false,
        editMode: false,
        idEdit: null,

        form: {
            nama_penerbit: '',
            alamat: '',
            telepon: ''
        }

    }
},

computed: {

    filteredPenerbit() {

        return this.penerbit.filter(item =>
            item.nama_penerbit
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )

    }

},

mounted() {

    this.getPenerbit()

},

methods: {

    getPenerbit() {

        this.loading = true

        axios.get('http://localhost:8080/penerbit')

        .then(response => {

            this.penerbit = response.data

        })

        .catch(error => {

            console.log(error)

        })

        .finally(() => {

            this.loading = false

        })

    },

    tambahBaru() {

        this.showModal = true
        this.editMode = false

        this.form = {
            nama_penerbit: '',
            alamat: '',
            telepon: ''
        }

    },

    simpan() {

        if (
            !this.form.nama_penerbit ||
            !this.form.alamat ||
            !this.form.telepon
        ) {

            alert('Lengkapi semua data')
            return

        }

        if (this.editMode) {

            axios.put(
                'http://localhost:8080/penerbit/' + this.idEdit,
                this.form
            )

            .then(() => {

                this.notif = 'Data penerbit berhasil diupdate'

                this.getPenerbit()

                this.showModal = false

            })

            .catch(error => {

                console.log(error)

            })

        } else {

            axios.post(
                'http://localhost:8080/penerbit',
                this.form
            )

            .then(() => {

                this.notif = 'Data penerbit berhasil ditambahkan'

                this.getPenerbit()

                this.showModal = false

            })

            .catch(error => {

                console.log(error)

                alert('Gagal menambahkan data')

            })

        }

    },

    edit(item) {

        this.showModal = true
        this.editMode = true

        this.idEdit = item.id_penerbit

        this.form = {

            nama_penerbit: item.nama_penerbit,
            alamat: item.alamat,
            telepon: item.telepon

        }

    },

    hapus(id) {

        if (confirm('Hapus data penerbit?')) {

            axios.delete(
                'http://localhost:8080/penerbit/' + id
            )

            .then(() => {

                this.notif = 'Data penerbit berhasil dihapus'

                this.getPenerbit()

            })

        }

    }

},

template: `

<div>

    <div class="flex justify-between items-center mb-6">

        <h1 class="text-3xl font-bold">
            🏢 Data Penerbit
        </h1>

        <button
        @click="tambahBaru"
        class="bg-blue-600 text-white px-5 py-2 rounded-lg">

            + Tambah Penerbit

        </button>

    </div>

    <div
    v-if="notif"
    class="bg-green-100 text-green-700 p-3 rounded mb-4">

        {{ notif }}

    </div>

    <input
    v-model="search"
    placeholder="Cari penerbit..."
    class="border p-3 rounded-lg w-full mb-4">

    <div
    v-if="loading"
    class="text-center py-10">

        Loading...

    </div>

    <div class="overflow-x-auto bg-white rounded-xl shadow">

        <table class="w-full">

            <thead class="bg-blue-700 text-white">

                <tr>

                    <th class="p-4">Nama Penerbit</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                    <th>Aksi</th>

                </tr>

            </thead>

            <tbody>

                <tr
                v-for="item in filteredPenerbit"
                :key="item.id_penerbit"
                class="border-b">

                    <td class="p-4">

                        {{ item.nama_penerbit }}

                    </td>

                    <td>

                        📍 {{ item.alamat }}

                    </td>

                    <td>

                        📞 {{ item.telepon }}

                    </td>

                    <td>

                        <button
                        @click="edit(item)"
                        class="bg-yellow-500 text-white px-3 py-1 rounded">

                            Edit

                        </button>

                        <button
                        @click="hapus(item.id_penerbit)"
                        class="bg-red-600 text-white px-3 py-1 rounded ml-2">

                            Hapus

                        </button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

    <!-- MODAL -->

    <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

        <div class="bg-white p-6 rounded-xl shadow-lg w-[500px]">

            <h2 class="text-2xl font-bold mb-5">

                {{ editMode ? 'Edit Penerbit' : 'Tambah Penerbit' }}

            </h2>

            <input
            v-model="form.nama_penerbit"
            placeholder="Nama Penerbit"
            class="border p-3 rounded w-full mb-3">

            <input
            v-model="form.alamat"
            placeholder="Alamat"
            class="border p-3 rounded w-full mb-3">

            <input
            v-model="form.telepon"
            placeholder="Telepon"
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