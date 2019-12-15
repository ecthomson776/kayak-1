<template>
    <nav>
        <v-app-bar app class="white" >
            <v-img
                class="mx-2 hidden-sm-and-down"
                src="https://firebasestorage.googleapis.com/v0/b/kustam-kayaks.appspot.com/o/kisspng-chalmers-university-of-technology-norwegian-univer-ivanovo-state-university-of-chemistry-and-technolo-5b1699ab78ce89.5016040515282077874948.png?alt=media&token=39c9ffc0-51a8-41ca-965f-c639358f67e3"
                max-height="40"
                max-width="40"
                contain
            ></v-img>
            <v-toolbar-title class="headline">
                <v-btn text to="/">
        <span class="teal--text text-none headline">kustAM.kayaks</span>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
            
            <v-btn v-if="admin" text to="order">
                <span class="mr-2">Admin</span>
                <v-icon right>mdi-basket-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="!user" text to="signup">
                <span class="mr-2 hidden-sm-and-down">Sign Up</span>
                <v-icon right>mdi-account-plus</v-icon>
            </v-btn>
            
            <v-btn v-if="!user" text to="login">
                <span class="mr-2 hidden-sm-and-down">Login</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <li v-if="user"><a class="hidden-sm-and-down">{{ user.email}}</a></li>
            <v-btn v-if="user" @click='logout' text to="logout">
                <span class="mr-2 hidden-md-and-down">Logout</span>
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