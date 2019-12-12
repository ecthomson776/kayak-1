<template>
  <div class="signup container">
    <v-card class="my-12 mx-auto" max-width="400">
        <v-card-title class="justify-center">Sign Up</v-card-title>
        
            <v-form @submit.prevent="signup" >
                <v-container>
                
                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-text-field
                        v-model="alias"
                        label="Alias"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="12"
                    >
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                            :type="show1 ? 'text' : 'password'"
                            label="password"
                            @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-col>

                    <v-col class= "text-center" cols="12" sm="12">
                        
                    </v-col>
                    {{this.feedback}}
                    {{this.slug}}
                    
                                    
                    <v-col class= "text-center" cols="12" sm="12">
                        <v-btn type="submit" class="primary">
                           <span>Sign Up</span>
                           <v-icon right>mdi-account-plus</v-icon>
                        </v-btn>
                    </v-col>
                </v-container>
                
        </v-form>
    </v-card>
    
  </div>
</template>

<script>
import db from '@/fb'
import slugify from 'slugify'
import firebase from 'firebase'
export default {
  name: 'Signup',
  data(){
    return{
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
      show1: false
      
    }
  },
  methods: {
    signup(){
      if(this.alias && this.email && this.password){
        this.feedback = null
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'
          } else {
          // this alias does not yet exists in the db
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
                db.collection('users').doc(this.slug).set({
                    alias: this.alias,
                    user_id: cred.user.uid
                    
                }) 
                
            }).then(() => {
                this.$router.push({ name: 'custom3' })
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
}
</script>

<style>
.signup{
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>