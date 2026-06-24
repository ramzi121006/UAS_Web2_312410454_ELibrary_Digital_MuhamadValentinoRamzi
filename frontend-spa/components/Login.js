
const Login = {

data() {

    return {

        username: '',
        password: ''

    }

},

methods: {

    login() {

        axios.post(
            'http://localhost:8080/login',
            {
                username: this.username,
                password: this.password
            }
        )

        .then(response => {

            localStorage.setItem(
                'token',
                response.data.token
            )

            localStorage.setItem(
                'isLoggedIn',
                true
            )

            this.$router.push('/admin/dashboard')

        })

        .catch(error => {

            alert('Username atau Password Salah')

        })

    }

},

template:`

<div class="min-h-screen bg-gray-100 flex justify-center items-center">

    <div class="bg-white p-8 rounded-lg shadow-lg w-96">

        <h1 class="text-3xl font-bold text-center mb-8">

            Login Admin

        </h1>


        <input
            v-model="username"
            placeholder="Username"
            class="border p-3 rounded w-full mb-4">


        <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="border p-3 rounded w-full mb-6">


        <button
            @click="login"
            class="bg-blue-600 text-white p-3 rounded w-full">

            Login

        </button>


        <router-link
            to="/"
            class="block text-center mt-5 text-blue-600">

            ← Kembali ke Beranda

        </router-link>

    </div>

</div>

`

}
