<template>
  <div class="custom">
    <h1 class="ml-12 pa-3">Kayak Customiser</h1>
    <p> hello</p>
    <v-container fluid class='my-5'>
      <v-card xs12 md6>
       <!-- <v-card-title>
        Kayak Selection
        <v-spacer></v-spacer> -->
        <v-layout row wrap class="pa-3">
      
      <v-radio-group  v-model="colour" class="pa-3" row label="colour">
          <v-flex xs12 md6>
              <v-radio
                label="Orange"
                color="orange"
                value="orange"
              ></v-radio>
              </v-flex>
              <v-radio
                label="Green"
                color="green"
                value="green"
              ></v-radio>
              </v-radio-group> 
               <v-spacer></v-spacer> 
               <v-radio-group  v-model="height" class="pa-3" row label="height">
              <v-radio
                label="h1"
                value="h1"
              ></v-radio>
              <v-radio
                label="h2"
                value="h2"
              ></v-radio>
              
              </v-radio-group>
              <v-radio-group  v-model="weight" class="pa-3" row label="weight">
              <v-radio
                label="w1"
                value="w1"
              ></v-radio>
              <v-radio
                label="w2"
                value="w2"
              ></v-radio>
              </v-radio-group>
              <v-radio-group  v-model="features" class="pa-3" row label="features">
              <v-radio
                label="none"
                value="none"
              ></v-radio>
              <v-radio
                label="Camera Mount"
                value="camera mount"
              ></v-radio>
            
              </v-radio-group>
              
               <v-btn @click='getkayaks'>Get Records</v-btn>
       

      <v-flex xs12 md6>
          <v-responsive>
          <v-img
              :src="kayak.image"
              class="white--text align-end"
              max-width="500px"
              height="250px"
            >
              <v-card-title ></v-card-title>
            </v-img>
          </v-responsive>
            <p class="text-left">CO2 value: <v-card-text class="text--primary" v-text="kayak.co2">
            </v-card-text></p>
            <p class="text-left">Cost: <v-card-text class="text--primary" v-text="kayak.cost">
            </v-card-text></p>
      </v-flex>
        </v-layout>
      </v-card> 
      
    </v-container>

    
  </div>
 
</template>

  

<script>
import db from '@/fb'
export default {
  data() {
    return {
      colour: '',
      singleSelect: true,
      prototype1: []
    }
  },
  
 
  
  methods: {getkayaks () {
     this.prototype1=[]
     db.collection('prototype1').where('colour','==',this.colour).where('height','==',this.height).where('weight','==',this.weight).where('features','==',this.features).get()
    .then(snapshot => {
      snapshot.forEach(doc =>{
        let kayak = doc.data()
        kayak.id = doc.id
        this.prototype1.push(kayak)
      })
    })
  } 
}}

</script>