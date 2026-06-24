
const Home = {

template:`

<div class="min-h-screen bg-gray-100">

    <nav class="bg-blue-700 text-white p-5 flex justify-between">

        <h1 class="text-2xl font-bold">
            📚 E-Library Digital
        </h1>

    </nav>


    <div class="text-center mt-28">

        <h1 class="text-5xl font-bold text-blue-700">

            Selamat Datang di E-Library

        </h1>

        <p class="text-gray-600 mt-5 text-lg">

            Sistem Informasi Rental Buku dan Komik Digital

        </p>

        <router-link
            to="/login"
            class="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded">

            Masuk Sebagai Admin

        </router-link>

    </div>

</div>

`

}
