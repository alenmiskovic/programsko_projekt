<template>
 <div id="main">
  <div class="card">
  <div >
      <div>
    <div class="row">
    <a class="items"><b>Ime artikla:</b></a>
    <a>{{ items.Name }}</a>
    <a class="items"><b>Cijena:</b></a>
  <a >{{ items.Price }} Kn</a>
  <div class="items" ><button @click="remove(items.id)" class="btn btn-danger btn-sm" id="delete">X</button>
  </div>
</div>
</div>
  </div>

</div>
  </div>
</template>
<style>
.items{
  color:white;
  padding-left :30px;
  padding-right: 5px;
}
.card{
  width:fit-content;
}
</style>

<script>
import store from "../store";
import {deleteDoc, doc} from 'firebase/firestore'
import {db} from "@/firebase.js"
export default {
    data() {
    return store;
  },
  props: [ "items" ],
  methods: { 
  remove(id){
  const docRef = doc(db, 'Cart', id)
  deleteDoc(docRef).then(alert("Item removed"))
  }

  },
  
}
</script>


