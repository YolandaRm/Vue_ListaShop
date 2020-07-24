<template>
  <v-img
    src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
  >
    <div class="form-container">
      <v-form @submit.prevent.stop="crear()" v-model="valid" ref="form" class="form">
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field v-model="model.producto" :rules="rules.producto" label="producto"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field v-model="model.cantidad" :rules="rules.cantidad" label="cantidad"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field v-model="model.unidad" :rules="rules.unidad" label="unidad"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="model.comentario"
              :rules="rules.comentario"
              counter="40"
              label="Comentar"
              outlined
            ></v-text-field>
          </v-col>
          <v-btn color="success" class="mr-4" type="submit">Añadir a la lista</v-btn>
          <v-btn color="error" class="mr-4" @click="reset" type="button">Borrar</v-btn>
        </v-row>
      </v-form>
    </div>
  </v-img>
</template>


<script>
export default {
  name: "Add",
  data() {
    return {
      model: {
        producto: "",
        cantidad: 0,
        unidad: "",
        comentario: "",
      },
      rules: {
        producto: [],
        cantidad: [],
        unidad: [],
        comentario: [],
      },
      valid: false,
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    crear(){
      console.log(this.model);
    }
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
  width: 80%;
  margin: auto;
  padding: 1rem;
  border-radius: 4%;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.418);
}
</style>