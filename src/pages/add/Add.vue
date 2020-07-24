<template>
  <!-- <v-img
    src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
  > -->
    <div class="form-container">
      <v-form v-model="valid" ref="form" class="form" @submit.prevent.stop="crear()">
        <v-row>
          <v-col cols="12" sm="8"> <!-- 2. lo implemento en los rules especificados -->
            <v-text-field v-model="product" :rules="[required('el dato es requerido')]" label="product" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select v-model="amount" :items="cantidad" :rules="[required('el dato es requerido')]" label="amount" required></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select v-model="unit" :items="unidad" :rules="[required('el dato es requerido')]" label="unit" required></v-select>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field v-model="coment" :rules="rules.comment" counter="40" label="Note" outlined></v-text-field>
          </v-col>
          <v-btn color="success" class="mr-4" type="submit">Añadir a la lista</v-btn>
          <v-btn color="error" class="mr-4" @click="reset" type="button">Borrar</v-btn>
        </v-row>
      </v-form>
    </div>
<!--   </v-img> -->
</template>


<script>
import { mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";

function range(min, max) { //1.-creamos la function range para los parámetros - yo pensaba que sería solo una const...-
  const result = [];
  for(let i= min; i <=max; i++) {
    result.push(i)
  }
  return result;
} 
export default {
  name: "Add",

  data() {
    return {
      model: {
        product: "",
        amount: 0,
        unit: "",
        comment: "",
        productRules: [this.required(Text) || "el dato es requerido"] //3.-y en el array me devuelve la función req de cada rule
      },
      rules: {
        product: [],
        amount: range(1,20), //2.-invocamos la función range
        unit: ["Un.", "Kg.", "L."],
        comment: ["menos de 40 caracteres por favor"],
      },
      valid: false,
    };
  },
  methods: {
    ...mapActions({
      addItem: ACTION_TYPES.ADD_ITEM,
    }),
    crear(){
      this.validate();
      if (!this.valid) {
        return;
      }
      let model = {
        product: this.product,
        amount: this.amount,
        unit:this.unit,
        bought: false
      };
      this.addItem({model, http: httpService}).then (() => this.reset());
    }
  },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
     validate () {
      this.$refs.form.validate()
    },
    required(texto) {  //1.-creo el método required
      return function (value){
          return Boolean(value) || texto  
      } 
    }
  }
</script>


<style scoped>

.form-container {
  height: 100%;
  display: flex;
  align-items: center;
}
.form {
  background-color: white;
  background: white;
  opacity: 0.95;
  width: 75%;
  margin: auto;
  padding: 1rem;
  border-radius: 1%;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.808);
}
</style>