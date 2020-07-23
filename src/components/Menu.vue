<template>
    <div>
        <v-sheet height="400" class="overflow-hidden" style="position: relative;">
            <v-row class= "button">
                <v-container class="fill-height">
                    <v-btn color="pink" dark @click.stop="drawer = !drawer">Menú</v-btn>
                </v-container>
            </v-row>

            <v-navigation-drawer v-model="drawer" absolute temporary>
         <!--        <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Menú</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider> -->

                <v-list dense class="router">
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                    <router-link to= "/">Listado</router-link>
                     <v-icon>mdi-pencil</v-icon>
                    <router-link to="/add">Anotar</router-link>
                </v-list>

            </v-navigation-drawer>
             <v-img src="https://www.clara.es/medio/2020/05/20/hacer-compra_b0d11691_800x533.jpg"></v-img>
        </v-sheet>
    </div>
</template>

<script>
export default {
    name:"Menu",

    data () {
    return {
      drawer: null,
      items: [{icon:"add"}]
    };
    }
}
</script>