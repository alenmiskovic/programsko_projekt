<template>
  <div id="main">
  <div class="row">
    <card :key="product.id" :product="product" v-for="product in products" />
  </div>
</div>
</template>

<script>
import card from '@/components/card.vue'
import store from "@/store.js";
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase.js" 

export default {
  data() {
    return store;
  },
  components: {
    card
  },
  name: "home",
 async mounted(){
  if(this.products.some(prod => prod.id === doc.data().id)==false){
    const colRef = collection(db, "Products");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
      let prod=doc.data()
         prod.id = doc.id
        this.products.push(prod);
})
  }
}
};
</script>

<style>
#main{
padding-left:40px;
}
</style>