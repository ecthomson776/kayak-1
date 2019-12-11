<template>
  <v-app >
    <Nav/>
    <v-content >
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/footer'


export default {
  name: 'App',
  components: { Nav,
   Footer },
  data: () => ({
    //
  }),
};
</script>
