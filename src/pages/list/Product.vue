<template>
  <v-card outlined>
    <div>
      <v-card-title class= "Card__title">
          <p>{{product.name}} {{product.ammount}} {{product.unit}} </p>
          <p class= "Card__comment">  {{product.comment}} </p>
      </v-card-title>
    </div>
    <v-card-actions class= "Card__button" >
       <!-- cuando se cambie el valor hacer un put para actualizar el campo bought -->
      <v-switch :input-value="product.bought"  :loading="loading" @change="update"></v-switch>
      <v-btn text router-link to= "/add" style= "color:red" ><v-icon right>mdi-pencil</v-icon>Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import debounce from "debounce";

export default {
  name: "Product",
data() {
    return {
      loading: false,
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    update: debounce(function(value) { //rebote, se invoca al valor de la función
      if(value === this.product.bought){ //si el valor es el producto comprado lo devuelve
        return;
      }
      this.loading = true;
      this.product.bought = value;   // y espera hasta que compre y de el valor
      axios
        .patch(`http://localhost:3005/items/${this.product.id}`, {
          bought: this.product.bought
        })
        .finally(() => {
          this.loading = false;
        });
    }, 1000)
  }
};
</script>
<style scoped>
.Card__title {
  display: flex;
  color: blue;
  justify-content: space-around;
}
.Card__comment  {
  color: grey ;
  text: small;
}
.Card__button {
  display: flex;
  justify-content:flex-end;
}
</style>