<template>
<vueper-slides :dragging-distance="50" :slide-ratio="1/2" fixed-height="560px">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content"
    :link="slide.link"></vueper-slide>
</vueper-slides>
</template>


<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
  export default {
  components: { VueperSlides, VueperSlide },

  data: () => ({
  slides: [
    { title: 'Kayak Customiser', content: 'Click here to configure your 3D printed kayak!', link: '/custom3', image:'https://firebasestorage.googleapis.com/v0/b/kustam-kayaks.appspot.com/o/IMG_3153.JPG?alt=media&token=690d9c27-0cec-48d4-9ec6-12772dba56ad' },
    { title: 'Kayak Customiser', content: 'Click here to configure your 3D printed kayak!', link: '/custom3', image:'https://firebasestorage.googleapis.com/v0/b/kustam-kayaks.appspot.com/o/IMG_3281.JPG?alt=media&token=6e0abcdb-5f17-443e-a2ca-a83891c823dc' },
  ]
})
}
</script>
<style>
.vueperslide__content-wrapper--outside-top {
  transition: 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}

.vueperslide__title {
    font-size: 3em;
    opacity: .7;
    text-shadow: none;
    color: #000000;
    background-color: aliceblue;
    background-blend-mode: color;
}
.vueperslide__content {
    font-size: 1.5em;
    opacity: .7;
    text-shadow: none;
    color: #000000;
    background-color: aliceblue;
    background-size: 300px 100px;
}
</style>