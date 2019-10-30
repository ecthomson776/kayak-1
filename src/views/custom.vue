<template>
  <div class="custom">
    <h1 class="ml-12 pa-3">Kayak Customiser</h1>
    <v-container class='my-5'>
        

        <!-- <v-card flat class="pa-3" v-for="kayak in colour_test_01" :key="kayak.id">
          <v-layout row wrap> 
              <v-flex xs12 md2 class="px-3">
              <v-select :items="kayak.colour" solo></v-select>
            </v-flex>
            <v-flex xs12 md2 class="px-3">
              <div class="caption grey--text">Colour</div>
              <div>{{ kayak.colour }}</div>
            </v-flex>
            <v-flex xs12 md8>
              <div class="caption grey--text">Image</div>
              <v-responsive class="pt-4">
              <v-img :src="kayak.image" aspect-ratio="1.4" contain>
              </v-img>
            </v-responsive>
            </v-flex>
            
          </v-layout>
          <v-divider></v-divider>
        </v-card> -->

        <v-card class="pa-3">
            <v-flex xs12 m2 class="px-3">
                <v-radio-group class="pa-3" >
                    <template v-slot:label>
                        <div>Your favourite <strong>colour</strong></div>
                    </template>
                    <v-radio v-for="kayak in colour_test_01" :key="kayak.id" :label="kayak.colour" @click="changeImage">
                        
                    </v-radio>
                    
                    </v-radio-group>

            </v-flex>
        </v-card>
        
    </v-container>
  </div>
 
</template>

  

<script>
import db from '@/fb'
export default {
  data() {
    return {
      colour_test_01: []
    }
  },
  methods: {
    changeImage: function() {
      console.log(colour_test_01.colour)
    }
  },
 
  created () {
    db.collection('colour_test_01').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.colour_test_01.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}

</script>