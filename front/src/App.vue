<template>
  <div class="w-full h-screen bg-green-400">
    <NavBar></NavBar>
    <router-view ></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar

  }
}
</script>

