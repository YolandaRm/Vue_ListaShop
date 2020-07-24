<template>
    <v-form @submit="crear()" v-model="valid">
        <v-text-field v-model="producto" :rules="nameRules" :counter="15" label= "Producto" required>
        Producto
        </v-text-field> 
        <v-text-field v-model="ammount" :rules="nameRules" :counter="3" label= "Cantidad" required>
        Cantidad
        </v-text-field> 
        <v-text-field v-model="unit" :rules="nameRules" :counter="5" label= "unidad" required>
        Unidad
        </v-text-field>
        <v-text-field v-model="comment" :rules="nameRules" :counter="35" label= "Comentarios" required>
        Comentario
        </v-text-field> 
        
        
</template>

<script>
export default {
    name:"Form"
}
</script>