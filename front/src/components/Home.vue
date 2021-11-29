<template>
  <div class="w-full h-screen bg-green-400">
    
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
    name: 'Home',



    data() {
      return {
        books: [],
      };
    },

    async mounted(){
      let response = await axios.get('http://127.0.0.1:8000/api/list');
        this.books = response.data;
    }

}
</script>
