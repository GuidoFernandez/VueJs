<template>
        <div> 
              <p>Lista Usuarios </p>
              <ul class="list-group">
                

                 <router-link tag="li" 
                 :to="{name: 'infoUsuario', params:{id: usuarios.id }}" 
                 class="list-group-item" 
                 v-for="usuarios in usuarios"> 
                    {{usuarios.name}}
                </router-link>

              </ul>
              <router-view></router-view>
        </div>
</template>

<script>
 export default {
     data (){
         return {
             id : this.$route.params.id, 
             usuarios : {}
         }
     },
     created(){
         this.$http.get('https://jsonplaceholder.typicode.com/users')
             .then (respuesta => {
                 return respuesta.json ();
             })

            .then (usuarios =>{
                this.usuarios = usuarios
            })
         }
 }
</script>