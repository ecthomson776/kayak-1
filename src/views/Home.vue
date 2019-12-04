
<template >
<v-container class="my-5" >
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      
      <p class="display-1"> Kayak Customiser </p>
      
    </v-card-text>
    <v-card-actions align-center>
      <v-btn class="ma-2 teal--text"  href='/custom3'>Login
            <v-icon dark right>mdi-lock-open-variant-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-carousel hide-delimiters style="height:100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</v-container>
</template>





<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/kustam-kayaks.appspot.com/o/IMG_3281.JPG?alt=media&token=6e0abcdb-5f17-443e-a2ca-a83891c823dc',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/kustam-kayaks.appspot.com/o/IMG_3153.JPG?alt=media&token=690d9c27-0cec-48d4-9ec6-12772dba56ad',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>