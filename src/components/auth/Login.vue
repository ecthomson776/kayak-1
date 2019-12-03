<template>
  <div class="login container">
    <v-card class="my-12 mx-auto" max-width="400">
        <v-card-title class="justify-center">Login</v-card-title>
        
            <v-form @submit.prevent="login" >
                <v-container>
                
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
                      <p v-if="feedback" class="red-text center">{{this.feedback}}</p>              
                    <v-col class= "text-center" cols="12" sm="12">
                        <v-btn type="submit" class="primary">
                           <span>Login</span>
                           <v-icon right>mdi-login</v-icon>
                        </v-btn>
                    </v-col>
                </v-container>
                
        </v-form>
    </v-card>
    
  </div>
</template>

<script>
import firebase from 'firebase'
 
export default {
  name: 'Login',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
      show1: false
      
      
    }
  },
  methods: {
      login(){
        if(this.email && this.password){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(cred =>{
                // eslint-disable-next-line
                console.log(cred)
                this.$router.push({name: 'home'})
            }).catch(err => {
                this.feedback = err.message
            })
            this.feedback = null
        }else {
            this.feedback = 'Please fill in Email and Password'
        }
      }
    
  }
}
</script>

<style>
.login{
  max-width: 400px;
  margin-top: 60px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>