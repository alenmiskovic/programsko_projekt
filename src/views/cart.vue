<template>

 <div id="main">
  <div>
  </div>
      <div class="col">
        <h4 class="mb-4">Shopping cart</h4>
      </div>
<items :key="items.id" :items="items" v-for="items in Cart" />
<h6 class="mb-2 ml-4">Total price: {{this.totalPrice}} Kn</h6>
<button class="btn btn-success ml-4"  @click="checkout()">Checkout</button>

  </div>
</template>


<script>
import items from '@/components/items.vue'
import {db} from "@/firebase.js"
import {deleteDoc,doc, collection, query, where, getDocs} from "firebase/firestore";
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    items
  },
  async mounted(){
if(this.Cart.some(item => item.id === doc.data().id)==false){
const q = query(collection(db, "Cart"), where("Email", "==", this.userEmail));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
this.totalPrice = this.totalPrice + doc.data().Price;
let item=doc.data()
         item.id = doc.id
        this.Cart.push(item);
});
    }
},
  methods: {
async checkout(){
  const q = query(collection(db, "Cart"), where("Email", "==", this.userEmail));
  const snapshot = await getDocs(q);

const results = snapshot.docs.map((document) => ({ ...document.data(), id: document.id }));

results.forEach(async (result) => {
  const docRef = doc(db, "Cart", result.id);
  await deleteDoc(docRef).then(setTimeout(function(){
   window.location.reload();
}, 500));
});
}
 },

};
</script>

<style>

</style>