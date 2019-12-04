<template>
    <nav>
        <v-app-bar app class="white" >
            <v-toolbar-title class="headline">
        <span class="teal--text">kustAM.kayaks</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-btn v-if="admin" text to="order">
                <span class="mr-2">Admin</span>
                <v-icon right>mdi-basket-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="!user" text to="signup">
                <span class="mr-2">Sign Up</span>
                <v-icon right>mdi-account-plus</v-icon>
            </v-btn>
            
            <v-btn v-if="!user" text to="login">
                <span class="mr-2">Login</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <li v-if="user"><a>{{ user.email}}</a></li>
            <v-btn v-if="user" @click='logout' text to="logout">
                <span class="mr-2">Logout</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
            
        </v-app-bar>
    </nav>
</template>


<script>
import firebase from 'firebase'
import db from '@/fb'
export default {
   data(){
       return{
       user: null,
       admin: null
       }
   },
   methods: {
      logout(){
          firebase.auth().signOut().then(() =>{
            this.$router.push({name: 'Login'})
          })
      }
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
                db.collection('users').where('user_id','==',user.uid).where('admin','==',true).get()
                .then(snapshot => {
                snapshot.forEach(doc =>{
                    let admin = doc.data()
                    // eslint-disable-next-line
                this.admin=admin
                    
                    
                 
      })
    })
            } else {
                this.user = null
            }
        })
    }
}
</script>