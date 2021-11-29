<template>
  <div class="flex justify-between items-center w-full h-32 bg-green-600 px-9 py-2"> 
    <a href='http://localhost:8080/home/'>
      Super libri sueg fantastici
    </a>
    <router-link class="rounded-md w-28 text-center ml-auto mr-2 bg-red-600" to="/home/Lista">       
      I miei libri
    </router-link>
    <router-link class="rounded-md w-28 text-center bg-red-600" to="/home/Creazione">       
      Aggiungi libro
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'NavBar',

    data(){
        return {

        }
    },

    mounted(){

    },

}
</script>
