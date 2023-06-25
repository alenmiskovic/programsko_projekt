<template>
  <div id="app">

    <div class="row">

      <nav class="navbar navbar-expand-lg navbar-light mb-2">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <a id="naslov"> <b>Webshop</b></a>
        </router-link>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
          </form>
          <div class="navbuttons">
            <router-link v-if="!authenticated" id="bodjava" class="btn btn-outline my-2 my-sm-0 mr-2"
              to="/login">Login</router-link>
            <span v-if="authenticated">
              <router-link to="/cart"> <i id="cart" class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
              <a @click="logout" id="odjava" class="btn btn-outline my-2 my-sm-0 mr-2 ml-2" href="#">Logout</a>
            </span>
            <router-link v-if="!authenticated" id="bodjava" class="btn btn-outline my-2 my-sm-0 mr-2"
              to="/register">Register</router-link>

          </div>
        </div>
      </nav>

    </div>





    <router-view />


  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
import { auth } from '@/firebase.js'
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  data() {
    return store;
  },

  methods: {
    logout() {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true
        this.userEmail = user.email
        if (this.$route.name === 'login')
          this.$router.push({ name: 'home' }).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({ name: 'login' }).catch(err => console.log(err))
      }
    });
  }
}
</script>

<style lang="scss">
#cart {
  color: white;
}

#bodjava {
  color: white;
}

#odjava {
  color: white;
  padding-left: 20px;
}


#naslov {
  margin-bottom: 10%;
  color: white;
  font-size: 30px;
}


nav.navbar {
  background-color: rgb(0, 0, 0);
  width: 100%;
  margin: 15px;
}
</style>
