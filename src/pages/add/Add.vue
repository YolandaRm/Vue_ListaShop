<template>
  <v-form @submit="crear()" v-model="valid">
    <v-card flat>
      <v-img
      src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
      >
      <v-toolbar dense color="pink" dark extended flat>
         <v-app-bar-nav-icon router-link to= "/"></v-app-bar-nav-icon>  
      </v-toolbar>
      <v-card class="mx-auto" max-width="700" style="margin-top: -60px;">
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">Apunta... ¡y que no se te olvide la mascarilla!</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text style="height: 290px;">
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field v-model="product" :rules="required" label="producto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field v-model="ammount" label="cantidad"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-text-field v-model="unit" label="unidad"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field v-model="comment" :rules="rules" counter="40" label="Comentar" outlined></v-text-field>
            </v-col>
              <v-btn color="success"  class="mr-4"  type="submit">Añadir a la lista</v-btn>
              <v-btn color="error" class="mr-4"  @click="reset">Borrar</v-btn>
              <v-btn router-link to= "/"  color="warning"  @click="resetValidation">Cancelar</v-btn>
          </v-row>  
        </v-card-text>
      </v-card>
       </v-img>
    </v-card> 
  </v-form>  
</template>


<script>
export default {
  name: "Add",
  data() {
    return {
      valid:false,
      title: " ",
      rules: [(v) => v.length <= 40 || "Max 40 characters"],
    };
  },
  methods: {
      
      submit () {
        this.$refs.form.submit()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
};
</script>

/* si creo un campo requerido debería hacer lo siguiente:

en data()
productoRules
reqiuired(texto){
  return
} */