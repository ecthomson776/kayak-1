<template>
  <div class="custom">
    <h1 class="ml-12 pa-3">Customer Orders</h1>
    <v-container class='my-5'>
        

    <v-card flat class="pa-3">
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Order ID</th>
          <th class="text-left">Customer ID</th>
          <th class="text-left">Model Number</th>
          <th class="text-left">Delivery Location</th>
          <th class="text-left">Material</th>
          <th class="text-left">STL File</th>
          <th class="text-left">Completed?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in Orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.modelNumber }}</td>
          <td>{{ order.deliveryLocation }}</td>
          <td>{{ order.material }}</td>
          <td><a :href=" order.STL">Download File</a></td>
          <td><v-btn text icon color="teal" @click="completed(order.id)"> <v-icon>mdi-clipboard-check-multiple-outline</v-icon> </v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
      Orders: [],
      componentKey: 0,
      t1: 0
    }
  },
  
 
  created () {
    db.collection('Orders').where('status','==','').onSnapshot(res => {
      const changes = res.docChanges();
      
      changes.forEach(change => {
        if (change.type === 'added' ) {
          this.Orders.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        } 
         
      })
    })
  },   
  
  
  methods: {
    completed(orderid){
    
    db.collection('Orders').doc(orderid).update({status: 'completed'}).then(() => {
          this.$router.push('ordercomplete')
        })
  }
  }
  }

</script>