<template>
    <div id="app">
        <v-app>
        <v-sheet height="400"class="overflow-hidden"style="position: relative;">
            <v-img src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg">
                <v-container class="fill-height"> 
                    <v-row align="center" justify="center">
                    <v-btn color="pink" dark @click.stop="drawer = !drawer">Lista de la compra</v-btn>
                    </v-row>
                 </v-container>
            </v-img>
       
        <v-navigation-drawer v-model="drawer"  absolute temporary>
            <v-list-item color="pink">
                <v-list-item-icon><v-icon>mdi-home</v-icon> </v-list-item-icon>
                <v-list-item-title>Toca comprar!</v-list-item-title>
            </v-list-item>
    
            <v-divider></v-divider>
    
            <v-list dense class= "router">
                 <!--  
                     no se como hacer las rutas aquí tal como viene en el código 
                   
                <v-list-item v-for="item in items" :key="item.title" link >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title text>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>  ¿v=for? parecido a Product?
                -->
                <router-link to= "/">{{ item.icon }} {{ item.title }}</router-link>
                <router-link to="/add">{{ item.icon }} {{ item.title }}</router-link>
            </v-list>
                </v-navigation-drawer>
            </v-sheet>
        </v-app>
    </div>
</template>

<script>
export default {
    name:"Menutemporary",
    data () {
    return {
      drawer: false,
      items: [
        { title: 'Anotar', icon: 'mdi-pencil' },
        { title: 'Listado', icon: 'mdi-format-list-bulleted-square'},
      ],
    }
  },
}
</script>