<template>
  <v-card outlined>
    <v-div>
      <v-card-title class= "Card__title">
          <v-p>{{product.name}} {{product.ammount}} {{product.unit}} </v-p>
          <v-p class= "Card__comment">  {{product.comment}} </v-p>
      </v-card-title>
    </v-div>
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
    update: debounce(function(value) {
      if(value === this.product.bought){
        return;
      }
      this.loading = true;
      this.product.bought = value;
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