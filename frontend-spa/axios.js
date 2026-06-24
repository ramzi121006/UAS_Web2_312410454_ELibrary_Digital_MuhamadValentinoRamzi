axios.interceptors.request.use(config=>{

const token=
localStorage.getItem('token')

if(token){

config.headers.Authorization=
'Bearer '+token

}

return config

})
axios.interceptors.response.use(

response=>response,

error=>{

if(error.response.status===401){

alert('Session habis')

localStorage.clear()

router.push('/login')

}

return Promise.reject(error)

}

)