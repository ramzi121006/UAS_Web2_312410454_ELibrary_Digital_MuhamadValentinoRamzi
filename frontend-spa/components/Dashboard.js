const Dashboard = {

data(){
    return{

        totalBuku:0,
        totalKategori:0,
        totalPenulis:0,
        totalAnggota:0,
        totalPeminjaman:0,
        totalDipinjam:0

    }
},

mounted(){

    this.loadData()

},

methods:{

    loadData(){

        axios.get('http://localhost:8080/buku')
        .then(response=>{
            this.totalBuku = response.data.length
        })

        axios.get('http://localhost:8080/kategori')
        .then(response=>{
            this.totalKategori = response.data.length
        })

        axios.get('http://localhost:8080/penulis')
        .then(response=>{
            this.totalPenulis = response.data.length
        })

        axios.get('http://localhost:8080/anggota')
        .then(response=>{
            this.totalAnggota = response.data.length
        })

        axios.get('http://localhost:8080/peminjaman')
        .then(response=>{

            this.totalPeminjaman = response.data.length

            this.totalDipinjam = response.data.filter(
                item => item.status === 'Dipinjam'
            ).length

        })

    }

},

template:`

<div>

    <div class="mb-8">

        <h1 class="text-3xl font-bold text-gray-800">
            Dashboard Admin
        </h1>

        <p class="text-gray-500 mt-2">
            Selamat datang di Sistem E-Library Digital
        </p>

    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">📚</div>

            <h2 class="text-gray-500">
                Total Buku
            </h2>

            <p class="text-4xl font-bold text-blue-700">
                {{ totalBuku }}
            </p>

        </div>


        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">🏷️</div>

            <h2 class="text-gray-500">
                Total Kategori
            </h2>

            <p class="text-4xl font-bold text-green-600">
                {{ totalKategori }}
            </p>

        </div>


        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">✍️</div>

            <h2 class="text-gray-500">
                Total Penulis
            </h2>

            <p class="text-4xl font-bold text-yellow-500">
                {{ totalPenulis }}
            </p>

        </div>


        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">👤</div>

            <h2 class="text-gray-500">
                Total Anggota
            </h2>

            <p class="text-4xl font-bold text-purple-600">
                {{ totalAnggota }}
            </p>

        </div>


        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">📖</div>

            <h2 class="text-gray-500">
                Total Peminjaman
            </h2>

            <p class="text-4xl font-bold text-red-600">
                {{ totalPeminjaman }}
            </p>

        </div>


        <div class="bg-white p-6 rounded-xl shadow">

            <div class="text-4xl mb-2">⏳</div>

            <h2 class="text-gray-500">
                Sedang Dipinjam
            </h2>

            <p class="text-4xl font-bold text-orange-500">
                {{ totalDipinjam }}
            </p>

        </div>

    </div>

</div>

`

}