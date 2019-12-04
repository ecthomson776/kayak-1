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
              <v-simple-table dense class="mb-3" v-for="kayak in prototype2" :key="kayak.id">
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td class="text-left">Material</td>
                        <td class="text-left">{{this.Materials}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Your Height</td>
                        <td class="text-left">{{kayak.stature}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Your Weight</td>
                        <td class="text-left">{{kayak.weight}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Your Waist Width</td>
                        <td class="text-left">{{kayak.waist}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Skeg</td>
                        <td class="text-left">{{kayak.skeg}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Rudder</td>
                        <td class="text-left">{{kayak.rudder}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Hatches</td>
                        <td class="text-left">{{kayak.hatch}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Thigh Braces</td>
                        <td class="text-left">{{kayak.thighBraces}} h</td>
                      </tr>
                      <tr>
                        <td class="text-left">Delivery Location</td>
                        <td class="text-left">{{this.Location}} h</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              
            </v-col>
            <v-col :md=6 :xs=12 >
              <small>kayak</small>
              <model-stl  v-for="kayak in prototype2" :key="kayak.id" :src="kayak.cad"></model-stl>
              <v-layout row wrap> 
              <v-flex xs12 md4 class="px-3">
              <div class="caption grey--text">Length</div>
              <div v-for="kayak in prototype2" :key="kayak.id">{{ kayak.length }}</div>
            </v-flex>
            <v-flex xs12 md4 class="px-3">
              <div class="caption grey--text">Width</div>
              <div v-for="kayak in prototype2" :key="kayak.id">{{ kayak.width }}</div>
            </v-flex>
            <v-flex xs12 md4>
              <div class="caption grey--text">Weight</div>
              <!-- <div>{{ calculation }}</div>  -->
            </v-flex>
            
          </v-layout>
            </v-col>
            <v-col :md=3 :xs=12>
              <p v-for="kayak in prototype2" :key="kayak.id" v-text="kayak.stature"></p>
              <small>co2 etc</small>
              <!-- co2 cost etc -->
            </v-col>
            </v-row>
           
          </v-card-text>
        </v-card>

        <v-btn class= "ma-2 teal--text" @click="e1 = 6">
            Back
          </v-btn>
          <v-btn  class= "ma-2 teal--text" @click="submitOrder()">Submit Order</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-container>

      

    
  </div>
</template>
<script>
  import db from '@/fb'
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

          },
          {
            text: "UPM",
            value: "UPM",
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
  submitOrder() {
     this.prototype2=[]
     this.users=[]
        const Order = { 
          customer: this.uid,
          modelNumber: this.variant,
          STL: this.cad,
          material: this.Materials,
          deliveryLocation: this.Location
          
        }
        db.collection('Orders').add(Order).then(() => {
          
          this.$router.push('Thanks')
        })
      }
    
  }}
  
</script>