<template>
  <div class="advanced">
    <v-container>
      <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Base Kayak</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Material</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Measurements</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 4" step="4">Skeg/Rudder</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Hatches/Bulkheads</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">Thigh Braces</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 7" step="7">Delivery</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="8">Order</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-form v-model="valid">
          <v-container>
            <v-card>
    <v-card-title>
      Choose Base Kayak Model 
    </v-card-title>
      <v-spacer></v-spacer>
      <v-radio-group v-model="Type">
              <v-radio
                label="Melker 1"
                color="#5DBCD2"
                value="Melker 1"
              ></v-radio>
              </v-radio-group>
      <v-spacer></v-spacer>
    </v-card>
          </v-container>
        </v-form>
          <v-btn  class= "ma-2 teal--text"  @click="e1=2">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
         <v-card
          class="mx-auto my-3"
        >
        <v-card-title>
          Material Selection
        </v-card-title>
        <v-card-text>
            <v-select
              v-model="Materials"
              :items="MaterialOptions"
              label="Choose your prefered material"
              prepend-icon="mdi-select"
                  
            ></v-select>
        </v-card-text>
            <v-btn class= "ma-2 teal--text"
            @click="e1 = 1"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=3">Next Step</v-btn>
        </v-card>  
      </v-stepper-content>
  
        
        

      <v-stepper-content step="3">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Your Measurements
        </v-card-title>
          <v-card-text>
           <v-select
                  v-model="HumanHeight"
                  :items="HumanHeightOptions"
                  label="Your Height"
                >
            </v-select>
            <v-select
                  v-model="HumanWeight"
                  :items="HumanWeightOptions"
                  label="Your Weight"
            ></v-select>
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 2"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=4">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Skeg and Rudder Options
        </v-card-title>
          <v-card-text>
           <v-select
                  v-model="Skeg"
                  :items="SkegOptions"
                  label="Skeg"
                >
            </v-select>
            <v-select
                  v-model="Rudder"
                  :items="RudderOptions"
                  label="Rudder"
            ></v-select>
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 3"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=5">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Hatches and Bulkheads
        </v-card-title>
          <v-card-text>
           <v-select
                  v-model="Hatches"
                  :items="HatchOptions"
                  label="Hatches"
                >
            </v-select>
            <v-select
                  v-model="Bulkheads"
                  :items="BulkheadOptions"
                  label="Bulkheads"
            ></v-select>
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 4"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=6">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="6">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Thigh Braces
        </v-card-title>
          <v-card-text>
           <v-select
                  v-model="ThighBraces"
                  :items="ThighBraceOptions"
                  label="Thigh Braces"
                >
            </v-select>
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 5"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=7">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="7">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Delivery Location
        </v-card-title>
          <v-card-text>
           <v-select
                  v-model="Location"
                  :items="LocationOptions"
                  label="Delivery Location"
                >
            </v-select>
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 6"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="e1=8">Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="8">
        <v-card class="mx-auto my-3">
          <v-card-title>
          Order Summary
        </v-card-title>
          <v-card-text class="pt-0">
            <v-col :md=4 :xs=12>
              <small> Your Choices</small>
              <!-- summary of user choices-->
              
            </v-col>
            <v-col :md=4 :xs=12>
              <small>kayak</small>
              <v-img
                    :src="getImgUrl('Kayak_' + this.Case.number + '.jpg')"
                    width="300"
                    min-width="100"
                    contain
                  >
            </v-col>
            <v-col :md=4 :xs=12>
              <small>co2 etc</small>
              <!-- co2 cost etc -->
            </v-col>
           
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text"
            @click="e1 = 7"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click='SubmitOrder'>Submit Order</v-btn>
      </v-stepper-content>


    </v-stepper-items>
  </v-stepper>
    </v-container>

      

    
  </div>
</template>
<script>
  import db from '@/fb'
export default {
  data() {
    return {
      e1: 1,
      singleSelect: true,
      kayaks: [],
      extras: [],
      headers: [
          { text: 'Picture',value: 'picture'},
          {
            text: 'Colour',
            align: 'left',
            sortable: false,
            value: 'colour',
          },
          
          { text: 'Id', value: 'id' },
          { text: 'Length (mm)', value: 'length' },
          { text: 'Width', value: 'width' },
          
        ],
      Materials: 0,
        MaterialOptions: [
          {
            text: "Recycled ABS",
            value: 0,
          },
          {
            text: "UPM",
            value: 1,
          },
        ],
      HumanHeight: 0,
        HumanHeightOptions: [
          {
            text: "70cm - 80cm",
            value: 0,
            icon: "mdi-seat-legroom-reduced",
          },
          {
            text: "80cm - 90cm",
            value: 1,
            icon: "mdi-seat-legroom-normal",
          },
          {
            text: "90cm - 100cm",
            value: 2,
            icon: "mdi-seat-legroom-extra",
          },
        ],
        HumanWeight: 0,
        HumanWeightOptions: [
          {
            text: "50kg - 70kg",
            value: 0,
          },
          {
            text: "70kg - 90kg",
            value: 1,
          },
          {
            text: "90kg - 110kg",
            value: 2,
          },
        ],
        Skeg: 0,
        SkegOptions: [
          {
            text: "option 1",
            value: 0,
          },
          {
            text: "option 2",
            value: 1,
          },
          {
            text: "option 3",
            value: 2,
          },
        ],
        Rudder: 0,
        RudderOptions: [
          {
            text: "option 1",
            value: 0,
          },
          {
            text: "option 2",
            value: 1,
          },
          {
            text: "option 3",
            value: 2,
          },
        ],
        Hatches: 0,
        HatchOptions: [
          {
            text: "option 1",
            value: 0,
          },
          {
            text: "option 2",
            value: 1,
          },
          {
            text: "option 3",
            value: 2,
          },
        ],
        Bulkheads: 0,
        BulkheadOptions: [
          {
            text: "option 1",
            value: 0,
          },
          {
            text: "option 2",
            value: 1,
          },
          {
            text: "option 3",
            value: 2,
          },
        ],
        ThighBraces: 0,
        ThighBraceOptions: [
          {
            text: "no",
            value: 0,
          },
          {
            text: "yes",
            value: 1,
          },
        ],
        Location: 0,
        LocationOptions: [
          {
            text: "Sweden",
            value: 0,
          },
          {
            text: "Europe",
            value: 1,
          },
          {
            text: "Rest of World",
            value: 2,
          },
        ],
    }
  }, 
   methods: {getkayaks () {
     this.kayaks=[]
     this.e1 = this.e1+1
     db.collection('kayaks').where('colour','==',this.colour).where('length','==',this.sliderl).where('width','==',this.sliderw).get()
    .then(snapshot => {
      snapshot.forEach(doc =>{
        let kayak = doc.data()
        kayak.id = doc.id
        this.kayaks.push(kayak)
      })
    })
  }, 

computed: {
  Case: function (){
    var variant = ""
    if (this.stature, '==', HumanHeight & this.weight,'==', HumanWeight & this.skeg,'==',Skeg & this.Rudder,'==', Rudder & this.hatch,'==',Hatches & this.bulkhead,'==',Bulkheads & this.thigh-braces,'==',ThighBraces)
    return variant
  },
  getImgUrl(pic) {
        var imageUrl = null
        try {
          imageUrl = require('../assets/Images/'+pic)
        } catch (error) {
          imageUrl = 'missing'
        }
        return imageUrl

  },
  
}}
</script>