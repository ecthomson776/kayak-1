<template>
  <div class="advanced">
    <v-container>
      <v-stepper v-model="e1" alt-labels>
    <v-stepper-header colour='teal'>
      <v-stepper-step :complete="e1 > 1" step="1" >Base Kayak</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Material</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Measurements</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 4" step="4">Skeg/Rudder</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">Hatches/Bulkheads</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">Delivery</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 7" step="7">Order Summary</v-stepper-step>

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
            <v-select
                  v-model="waist"
                  :items="waistOptions"
                  label="Your Waist Size"
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
            @click="e1 = 5"
          >
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text"  @click="getkayaks()">>Next Step</v-btn>
      </v-stepper-content>

      <v-stepper-content step="7" >
        <v-card class="mx-auto my-3" >
          <v-card-title>
          Order Summary
        </v-card-title>
          <v-card-text class="pt-0">
            <v-row>
            <v-col :md=3 :xs=12>
              <small> Your Choices</small>
              <!-- summary of user choices-->
                <v-spacer></v-spacer>
                <p class="text-left body-2 text--grey-darken-2" >Material:          {{this.Materials}}</p>
                <p class="text-left body-2">Location:          {{this.Location}}</p>
                <p class="text-left body-2">Your Height:       {{this.HumanHeight}}</p>
                <p class="text-left body-2">Your Weight:       {{this.HumanWeight}}</p>
                <p class="text-left body-2">Your Waist Width:  {{this.waist}}</p>
                <p class="text-left body-2">Skeg:              {{this.Skeg}}</p>
                <p class="text-left body-2">Rudder:            {{this.Rudder}}</p>
                <p class="text-left body-2">Hatches:           {{this.Hatches}}</p>

            </v-col>
            <v-col :md=6 :xs=12 >
              <small>kayak</small>
              <model-stl  v-for="kayak in prototype2" :key="kayak.id"  :src="kayak.cad"></model-stl>
            </v-col>
            <v-col :md=3 :xs=12>
              <small>Kayak details</small>
              <!-- co2 cost etc -->
              <v-spacer></v-spacer>
                <p class="text-left body-2 text--grey-darken-2" v-for="kayak in prototype2" :key="kayak.id">Length:{{kayak.length}}</p>
                <p class="text-left body-2" v-for="kayak in prototype2" :key="kayak.id">Width:{{kayak.width}}</p>
                <p class="text-left body-2" v-for="kayak in prototype2" :key="kayak.id">Weight: {{(weight).toFixed(2)}}</p>
                <p class="text-left body-2" v-for="kayak in prototype2" :key="kayak.id">Cost: {{(cost).toFixed(2)}}</p>
                <p class="text-left body-2" v-for="kayak in prototype2" :key="kayak.id" >CO2: {{(co2).toFixed(2)}}</p>
                <p class="text-left body-2">Delivery Time: {{(deliveryTime)}}</p>
            </v-col>
            </v-row>
           
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text" @click="e1 = 6">
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text" v-for="kayak in prototype2" :key="kayak.id" @click="submitOrder(kayak.cad,kayak.variant)">Submit Order</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-container>

      

    
  </div>
</template>
<script>
  import db from '@/fb'
  import firebase from 'firebase'
  import { ModelStl } from 'vue-3d-model'

export default {
  components: {
            ModelStl
        },
  data() {
    return {
      length: '',
      width:'',
      valid: false,
      firstname: '',
      lastname: '',
      cad:'',
      Type:'',
      variant:'',
      e1: 1,
      singleSelect: true,
      users: [],
      prototype2: [],
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
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
      Materials: "Recycled ABS",
        MaterialOptions: [
          {
            text: "Recycled ABS",
            value:"Recycled ABS",
            density: 1050,
          },
          {
            text: "UPM",
            value: "UPM",
            density: 1210,
          },
        ],
      HumanHeight: "<1550",
        HumanHeightOptions: [
          {
            text: "< 155cm",
            value: "<1550",
          },
          {
            text: "155cm - 165cm",
            value: "1550 - 1650",
          },
          {
            text: "166cm - 175cm",
            value: "1651 - 1750",
          },
          {
            text: "176cm - 185cm",
            value: "1751 - 1850",
          },
          {
            text: "> 185cm ",
            value: ">1850",
          },
        ],
        HumanWeight: "<55",
        HumanWeightOptions: [
          {
            text: "< 55kg",
            value: "<55",
          },
          {
            text: "55kg - 70kg",
            value: "55-70",
          },
          {
            text: "71kg - 80kg",
            value: "71-80",
          },
          {
            text: "81kg - 90kg",
            value: "81-90",
          },
          {
            text: "> 90kg",
            value: ">90",
          }
        ],
        waist: "<700",
        waistOptions: [
          {
            text: "< 70cm",
            value: "<700",
          },
          {
            text: "70cm - 80cm",
            value: "700-800",
          },
          {
            text: "81cm - 95cm",
            value: "801-950",
          },
          {
            text: "96cm - 110cm",
            value: "951-1100",
          },
          {
            text: "> 110cm",
            value: ">1100",
          }
        ],
        Skeg: 'No',
        SkegOptions: [
          {
            text: "No",
            value: 'No',
          },
          {
            text: "Yes",
            value: 'Yes',
          },
        ],
        Rudder: 'No',
        RudderOptions: [
          {
            text: "No",
            value: 'No',
          },
          {
            text: "Yes",
            value: 'Yes',
          },
        ],
        Hatches: "Day Hatch on left side",
        HatchOptions: [
          {
            text: "Day Hatch on left side",
            value: "Day Hatch on left side",
          },
          {
            text: "Day Hatch on right side",
            value: "Day Hatch on right side",
          },
          {
            text: "Day Hatch on left side + Rear storage",
            value: "Day Hatch on left side + Rear storage",
          },
          {
            text: "Day Hatch on right side + Rear storage",
            value: "Day Hatch on right side + Rear storage",
          },
          {
            text: "Day Hatch on left side + Rear storage + Front storage",
            value: "Day Hatch on left side + Rear storage + Front storage",
          },
          {
            text: "Day Hatch on right side + Rear storage + Front storage",
            value: "Day Hatch on right side + Rear storage + Front storage",
          },
          {
            text: "No Storage",
            value: "No Storage",
          },
        ],
        
        Location: "Sweden",
        LocationOptions: [
          {
            text: "Sweden",
            value: "Sweden",
          },
          {
            text: "Europe",
            value: "Europe",
          },
          {
            text: "Rest of World",
            value: "Rest of World",
          },
        ],
    }
  },
methods:{
  getkayaks () {
     this.prototype2=[]
     this.e1 = this.e1+1
     db.collection('prototype2').where('stature','==',this.HumanHeight).where('weight','==',this.HumanWeight).where('skeg','==',this.Skeg).where('rudder','==',this.Rudder).where('hatch','==',this.Hatches).get()
    .then(snapshot => {
      snapshot.forEach(doc =>{
        let kayak = doc.data()
        kayak.id = doc.id
        this.prototype2.push(kayak)
      })
    })
  },
  submitOrder(cad,variant) {
     this.prototype2=[]
     let user = firebase.auth().currentUser
     
        const Order = { 
          customer: user.uid,
          modelNumber: variant,
          STL: cad,
          material: this.Materials,
          deliveryLocation: this.Location
          
        }
        db.collection('Orders').add(Order).then(() => {
          
          this.$router.push('Thanks')
        })
      }
    
  },
  computed:{
    deliveryTime: function(){
      var location = this.Location
      if (location == "Sweden"){
        return 'Please allow 3 working days for delivery'
      } else if (location == "Europe"){
        return 'Please allow 7 working days for delivery'
      } else if (location == "Rest of World"){
        return 'Please allow 14 working days for delivery'
      }
    },
    cost: function(){
      var material = this.Materials
      var volume = this.volume
       // THIS IS WRONG // 
      if (material == "Recycled ABS"){
        return 552.1418391 + (14289.78146*volume)
      } else if (material == "UPM"){
        return 524.7539547 + (19739.97927*volume)
      }
    },
    co2: function(){
      var material = this.Materials
      var volume = this.volume
       // THIS IS WRONG // 
      if (material == "Recycled ABS"){
        return 0.0137615641 + (5987.7014476*volume)
      } else if (material == "UPM"){
        return -0.005563195 + (2934.0870755*volume)
      }      
    },
    weight: function(){
      var material = this.Materials
      var volume = this.volume
        // THIS IS WRONG // 
      if (material == "Recycled ABS"){
        return 1050*volume
      } else if (material == "UPM"){
        return 1210 *volume
      } else{
        return 'not working'
      }
      
    }

  }
  }
  
</script>