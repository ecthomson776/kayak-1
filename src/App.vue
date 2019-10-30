<template>
  <v-app class = "amber lighten-4">
    <Nav/>
    <v-content >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'


export default {
  name: 'App',
  components: { Nav },
  data: () => ({
    //
  }),
};
</script>
