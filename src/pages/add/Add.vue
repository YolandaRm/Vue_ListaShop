<template>
  <!-- <v-img
    src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
  >-->
  <div class="form-container">
    <v-form v-model="valid" ref="form" class="form" @submit.prevent.stop="crear()">
      <v-row>
        <v-col cols="12" sm="8">
          <!-- 2. lo implemento en los rules especificados -->
          <v-text-field
            v-model="model.name"
            :rules="rules.name"
            label="name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-select
            v-model="model.ammount"
            :items="options.ammount"
            :rules="rules.ammount"
            label="ammount"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="2">
          <v-select
            v-model="model.unit"
            :items="options.unit"
            :rules="rules.unit"
            label="unit"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field v-model="model.comment" counter="40" label="Note" outlined></v-text-field>
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

function range(min, max) {
  //1.-creamos la function range para los parámetros - yo pensaba que sería solo una const...-
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
export default {
  name: "Add",

  data() {
    return {
      model: {
        name: "",
        ammount: 0,
        unit: "",
        comment: "",
      },
      rules: {
        name: [this.required('El producto es requerido')],
        ammount: [this.required('La cantidad es requerida')],
        unit: [this.required('Debes seleccionar una unidad')],
      },
      options: {
        unit: ["Un.", "Kg.", "L."],
        ammount: range(1, 20), //2.-invocamos la función range
      },
      valid: false,
    };
  },
  methods: {
    ...mapActions({
      //cuando se requieren acometer acciones en componentes
      addItem: ACTION_TYPES.ADD_ITEM, //añadira en los item las acciones y los tipos, para ello tendré que importar  actiontypes de actions
    }),
    crear() {
      this.validate();
      if (!this.valid) {
        return;
      }
      let model = {...this.model, bought: false};
      // para añadimoslosItems de model con el httpService para luego actualizar y volver al inicio, necesito importar httpService de http
      this.addItem({ model, http: httpService }).then(() => this.reset());
    },
    reset() {
      this.$refs.form.reset();
    },
    validate() {
      this.$refs.form.validate();
    },
    required(texto) {
      //1.-creo el método required no una const
      return function (value) {
        return Boolean(value) || texto;
      };
    },
  },
};
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