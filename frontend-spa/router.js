const routes = [

{
    path:'/',
    component:Home
},

{
    path:'/login',
    component:Login
},

{
    path:'/admin',
    component:Layout,
    meta:{
        requiresAuth:true
    },

    children:[

        {
            path:'dashboard',
            component:Dashboard
        },

        {
            path:'buku',
            component:Buku
        },

        {
            path:'kategori',
            component:Kategori
        },

        {
            path:'penulis',
            component:Penulis
        },

        {
            path:'penerbit',
            component:Penerbit
        },

        {
            path:'anggota',
            component:Anggota
        },

        {
            path:'peminjaman',
            component:Peminjaman
        }

    ]
}

]

const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),

    routes

})

router.beforeEach((to,from,next)=>{

    if(
        to.meta.requiresAuth &&
        !localStorage.getItem('isLoggedIn')
    ){

        next('/login')

    }else{

        next()

    }

})