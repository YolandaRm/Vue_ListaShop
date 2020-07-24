<template>
  <v-sheet height="400" class="overflow-hidden" style="position: relative;">
    <v-img
      src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
    >
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-btn color="pink" dark @click.stop="drawer = !drawer">Lista de la compra</v-btn>
        </v-row>
      </v-container>
    </v-img>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-toolbar dense color="pink" dark flat>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title >Ya toca ir a comprar!</v-list-item-title>
        </v-list-item>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <!-- tengo que meterlos dentro de un router-link GENERAL 
          y le digo dónde tiene que ir (item.link definido en la prop de items-->
          <router-link :to="item.link">
            <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title text>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item>
        <!--  NO:
                <router-link to= "/">{{ item.icon }} {{ item.title }}</router-link>
        <router-link to="/add">{{ item.icon }} {{ item.title }}</router-link>-->
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      drawer: false,
      items: [
        //aquí es dónde puedo hacer el array de los link como una porp mas...
        { title: "Tomar nota", icon: "mdi-pencil", link: "/add" },
        { title: "Lista pendiente", icon: "mdi-format-list-bulleted-square", link: "/" },
      ],
    };
  },
};
</script>