<template>
  <v-card style="width:400px">
    <v-expansion-panels focusable outlined>  
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-row  class="product" :justify="justify" :align="alignment"  style="height: 30px;" >            
            <v-col cols="12" sm="4">{{product.name}}</v-col>
            <v-col cols="12" sm="1">{{product.ammount}}</v-col>
            <v-col cols="12" sm="2">{{product.unit}}</v-col>
            <v-col cols="12" sm="2"></v-col>  
            <v-switch :input-value="product.bought" :loading="loading" @change="update"></v-switch>                                                  
          </v-row>     
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="product__comment"> {{product.comment}} </p>
          <v-btn color="pink" text>Editar<v-icon right>mdi-pencil</v-icon> </v-btn>  
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> 
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
      disabled: false,
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
.product {
  padding: 3px;
}
.product__comment {
  color: grey;
}

</style>