<template>
  <div>
      <v-app>
        <v-card height="400" width="500">
          <v-system-bar color="deep-purple darken-3"></v-system-bar>
      
          <v-app-bar color="deep-purple accent-4" dark prominent>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-toolbar-title >Lista de la compra</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>
      
          <v-navigation-drawer v-model="drawer" absolute bottom temporary >
            <v-list nav  dense class= "router">
              <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                
                <router-link to= "/add">
                  <v-list-item>
                  <v-btn icon> <v-icon>mdi-pencil</v-icon> </v-btn>
                  <v-list-item-title>Anotar</v-list-item-title>
                  </v-list-item>
                </router-link>

                <router-link to= "/">
                   <v-list-item>
                  <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
                  <v-list-item-title>Lista</v-list-item-title>
                  </v-list-item>
                </router-link>

          </v-navigation-drawer>
          <v-img src="https://www.clara.es/medio/2020/05/20/hacer-compra_b0d11691_800x533.jpg"></v-img>
        </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
    name: "Menubottomdrawer",
    
      data () {
        return {
      drawer: false,
      group: null,
    };
  },
}

</script>

<style scoped>

</style>