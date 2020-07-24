<template>
  <v-app>
 
    <v-navigation-drawer v-model="drawer" app>
      <Menu />
    </v-navigation-drawer>
    <v-app-bar app>
         <!-- <v-img
      src="https://beta.losandes.com.ar/resizer/hkqKEXcRjVPSfVOIhmTN-H28GM8=/800x450/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GNTGGMLDHFQTCZDGHFSDCZLDGE.jpg"
    > -->
        <v-row align="center" justify="center">
          <v-btn color="pink" dark @click.stop="drawer = !drawer">Lista de la compra</v-btn>
        </v-row>
    <!-- </v-img> -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",
  data(){
    return {
      drawer: false
    }
  },
  components: {
    Menu,
  },
};
</script>

