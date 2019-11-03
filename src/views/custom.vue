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

        <!-- <v-card class="pa-3">
            <v-flex xs12 m2 class="px-3">
                <v-radio-group class="pa-3" >
                    <template v-slot:label>
                        <div>Your favourite <strong>colour</strong></div>
                    </template>
                    <v-radio v-for="kayak in colour_test_01" :key="kayak.id" :label="kayak.colour" @click="changeImage">
                        
                    </v-radio>
                    
                    </v-radio-group>

            </v-flex>
        </v-card> -->

      <v-card xs12 md6>
       <!-- <v-card-title>
        Kayak Selection
        <v-spacer></v-spacer> -->
        
      <v-flex wrap>
      <v-radio-group  v-model="colour" class="pa-3" row>
              <v-radio
                label="red"
                color="red"
                value="red"
              ></v-radio>
              <v-radio
                label="blue"
                color="blue"
                value="blue"
              ></v-radio>
              <v-radio
                label="yellow"
                color="yellow"
                value="yellow"
              ></v-radio>
              <v-radio
                label="grey"
                color="grey"
                value="grey"
              ></v-radio>
              <v-radio
                label="pink"
                color="pink"
                value="pink"
              ></v-radio>
              <v-radio
                label="green"
                color="green"
                value="green"
              ></v-radio>
              </v-radio-group>  
               <v-btn @click='getkayaks'>Get Records</v-btn>
      </v-flex> 
      </v-card> 
      
    </v-container>

    <v-card
    class="mx-auto"
    max-width="500px"
  >
    

    

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="kayak in colour_test_01"
          :key="kayak.id"
          :cols=12
        >
          <v-card >
            <v-img
              :src="kayak.image"
              class="white--text align-end"
              
              height="250px"
            >
              <v-card-title ></v-card-title>
            </v-img>
            <p class="text-left">Model No: <v-card-text class="text--primary" v-text="kayak.colour">
            </v-card-text></p>

            <!-- <p class="text--primary"> Length: <v-card-text class="text--primary" v-text="kayak.length"> ellow
            </v-card-text></p>
            <p class="text--primary"> Width:<v-card-text class="text--primary" v-text="kayak.width">
            </v-card-text></p>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn @click="snackbar = true" icon>
                <v-icon>mdi-basket</v-icon>
              </v-btn>
              <v-snackbar
                v-model="snackbar"
              >
                {{ inbasketmessage }}
              <v-btn
                color="pink"
                text
                @click="snackbar = false"
              >
                Close
              </v-btn>
              </v-snackbar>
              </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
 
</template>

  

<script>
import db from '@/fb'
export default {
  data() {
    return {
      colour: '',
      singleSelect: true,
      colour_test_01: []
    }
  },
  
 
  // created () {
  //   db.collection('colour_test_01').onSnapshot(res => {
  //     const changes = res.docChanges();

  //     changes.forEach(change => {
  //       if (change.type === 'added') {
  //         this.colour_test_01.push({
  //           ...change.doc.data(),
  //           id: change.doc.id
  //         })
  //       }
  //     })
  //   })
  // }
  methods: {getkayaks () {
     this.colour_test_01=[]
     db.collection('colour_test_01').where('colour','==',this.colour).get()
    .then(snapshot => {
      snapshot.forEach(doc =>{
        let kayak = doc.data()
        kayak.id = doc.id
        this.colour_test_01.push(kayak)
      })
    })
  } 
}}

</script>