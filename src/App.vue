<template>
  <v-app>
    <h1>Hello</h1>
    <router-link to="/">Lista</router-link>
    <router-link to="/add">Add</router-link>
    <v-navigation-drawer>
     <!--  <Menu />
      <Textfield /> -->
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
/* import Menu from "./components/menu";
import Textfield from "./compponents/textfield";
 */
export default {
  name: "App",
  components: {
  /*   Menu,
    Textfield, */
  },
};
</script>