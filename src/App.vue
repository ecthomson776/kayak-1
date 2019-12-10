<template>
  <v-app >
    <Nav/>
    <v-content >
      <router-view></router-view>
    </v-content>
    <v-footer/>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
import footer from '@/components/footer'


export default {
  name: 'App',
  components: { Nav,
   footer },
  data: () => ({
    //
  }),
};
</script>
