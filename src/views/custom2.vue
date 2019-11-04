<template>
  <div class="custom">
    <h1 class="ml-12 pa-3">Kayak Customiser</h1>
    <v-container class='my-5'>
      <v-card xs12 md6>
       <v-card-title>
        Customisation Options: </v-card-title>
        <v-spacer></v-spacer>
        
      <v-flex wrap>
      <v-radio-group  v-model="colour" class="pa-3" row label="Colour:  ">
              <v-radio
                label="Orange"
                color="orange"
                value="orange"
              ></v-radio>
              <v-radio
                label="Green"
                color="green"
                value="green"
              ></v-radio>
              </v-radio-group> 
               <v-spacer></v-spacer> 
               <v-radio-group  v-model="height" class="pa-3" row label="Your height: ">
              <v-radio
                label="< 170cm"
                value="h1"
              ></v-radio>
              <v-radio
                label="> 171cm"
                value="h2"
              ></v-radio>
              </v-radio-group>
              <v-radio-group  v-model="weight" class="pa-3" row label="Your weight:  ">
              <v-radio
                label="40kg - 70kg"
                value="w1"
              ></v-radio>
              <v-radio
                label="71kg - 100kg"
                value="w2"
              ></v-radio>
              </v-radio-group>
              <v-radio-group  v-model="features" class="pa-3" row label="Features:  ">
              <v-radio
                label="None"
                value="none"
              ></v-radio>
              <v-radio
                label="Camera Mount"
                value="camera mount"
              ></v-radio>
              </v-radio-group>
               <v-btn @click='getkayaks'>View Kayak</v-btn>
      </v-flex> 
      </v-card> 
      
    

          <v-card xs12 md6 class="mx-auto"
     v-for="kayak in prototype1"
          :key="kayak.id">
            <v-img
              :src="kayak.image"
              class="white--text align-end"
              max-width="500px"
              height="250px"
            >
              <v-card-title ></v-card-title>
            </v-img>
            <p class="text-left">CO2 value: <v-card-text class="text--primary" v-text="kayak.co2">
            </v-card-text></p>
            <p class="text-left">Cost: <v-card-text class="text--primary" v-text="kayak.cost">
            </v-card-text></p>

            
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
      height:'',
      weight:'',
      features:'',
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