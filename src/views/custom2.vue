<template>
  <a @click="handleClick()">Click me!</a>
</template>

<script>
export default {
  data() {
    return {
      name: 'Flavio'
    }
  },
  methods: {
    handleClick: function() {
      console.log(this.name)
    }
  }
}
</script>