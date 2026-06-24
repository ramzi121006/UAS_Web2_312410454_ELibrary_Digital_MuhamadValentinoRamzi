const Layout = {

template:`

<div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->

    <aside class="w-64 bg-blue-800 text-white">

        <div class="p-5 border-b">

            <h1 class="text-2xl font-bold">
                📚 E-Library
            </h1>

        </div>

        <nav class="mt-5">

            <router-link
            to="/admin/dashboard"
            class="block px-5 py-3 hover:bg-blue-700">

            Dashboard

            </router-link>

            <router-link
            to="/admin/buku"
            class="block px-5 py-3 hover:bg-blue-700">

            Buku

            </router-link>

            <router-link
            to="/admin/kategori"
            class="block px-5 py-3 hover:bg-blue-700">

            Kategori

            </router-link>

            <router-link
            to="/admin/penulis"
            class="block px-5 py-3 hover:bg-blue-700">

            Penulis

            </router-link>

            <router-link
            to="/admin/penerbit"
            class="block px-5 py-3 hover:bg-blue-700">

            Penerbit

            </router-link>

            <router-link
            to="/admin/anggota"
            class="block px-5 py-3 hover:bg-blue-700">

            Anggota

            </router-link>

            <router-link
            to="/admin/peminjaman"
            class="block px-5 py-3 hover:bg-blue-700">

            Peminjaman

            </router-link>

        </nav>

    </aside>

    <!-- Main -->

    <main class="flex-1">

        <div class="bg-white shadow p-4 flex justify-between">

            <h2 class="font-bold text-xl">
                Admin Panel
            </h2>

            <button
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded">

            Logout

            </button>

        </div>

        <div class="p-8">

            <router-view></router-view>

        </div>

    </main>

</div>

`,

methods:{

logout(){

localStorage.clear()

this.$router.push('/login')

}

}

}