<template>
    <div>
        <h3> Informacion del usuario</h3>
        <div>
            <p> <strong> Nombre: </strong> {{ nombre }} </p>
            <p> <strong> Correo electronico: </strong> {{ email }} </p>
        </div>
        <button class="btn btn-primary" @click="volver"> Volver </button>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                nombre : '',
                email : '', 
                id: ''
            }
        },
            methods: {
                volver (){
                    this.$router.push({name : 'usarios' });
                }
            },
            
            created(){
                let id = this.$route.params.id;

                this.$http.get('https://jsonplaceholder.typicode.com/users/'+ id )
                    .then(respuesta =>{
                        return respuesta.json ();
                    })
                        .then(usuario =>{
                            this.nombre = usuario.name;
                            this.email =usuario.email;
                        })

            }

    }

</script>