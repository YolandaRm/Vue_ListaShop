<template>
    <div id="app">
    <v-app id="inspire">
        <v-form ref="form" v-model="valid" lazy-validation>
        <v-card  height="400" width="500">
        <v-system-bar color="indigo darken-2" dark>

            <v-spacer></v-spacer>   
            </v-system-bar>
                <v-toolbar color="indigo" dark>
                <v-toolbar-title>Tengo que comprar</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
                
        <v-text-field v-model="producto" label="Name"></v-text-field>
        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Cantidad is required']"
            label="Cantidad" required></v-select>

        </v-card>

        <v-text-field v-model="Comentarios" label="Comentarios"></v-text-field>
    
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Añadir a la Lista</v-btn>
        <!--  aquí como lo envío y a dónde a la db o a list -->
        <v-btn color="error" class="mr-4" @click="reset">Borrar</v-btn>
    
        </v-form>
    </v-app>
    </div>    
</template>

<script>
export default {
    name:"Form"
}
</script>