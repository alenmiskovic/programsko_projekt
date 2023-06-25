<template>

      <div class="card text-center">
        <div id="cardheader" class="card-header text-left">
          {{product.Name}}
        </div>
        <div class="desc">
          <h6><strong>Cijena:</strong> {{product.Price}} kn</h6>
          <div></div>
        </div>
        <div class="card-body">
          <img class="card-img-top" :src='product.Image'>
        </div>
        <div class="card-footer text-left">

    <form @submit.prevent="addToCart">
              <button class="btn btn-outline-info">Add to cart</button>
            </form>
        </div>
      </div>

</template>



<script>
  import store from "../store";
  import {addDoc, collection} from "firebase/firestore";
  import {db} from "@/firebase.js" 
  export default {
      data() {
      return store;
    },
    props: [ "product" ],
    methods: {
        
      addToCart(){
          addDoc(collection(db, "Cart"),{
          Name: this.product.Name,
          Price: this.product.Price,
          Email: this.userEmail
          }).then(alert("Added to cart")).then(setTimeout(function(){
   window.location.reload();
}, 500))}
          ,
        
        }

      }
      
    
    
  </script>





<style>
  .card-header{
  background-color:black;
  color: white;
  }
  .card-footer{
  background-color:black;
  }
  .desc{
  padding-left: 20px;
  text-align: left;
  background-color:white;
  border-bottom: 1px solid rgba(0,0,0,.125);

  }
  .card {
    margin-bottom: 10px
  }
 


</style>