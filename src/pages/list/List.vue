<template>
  <v-app>
    <h1>List</h1>
    <ul>
      <li v-for="item in intems" :key="item.id">
        {{item.name}} {{item.ammount}}{{item.nought}}
      </li>
    </ul>
    <v-switch :label="`Switch 1:`"></v-switch>
  </v-app>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import{ACTION_TYPES} from '../../store/actions';
import {httpService} from '../../http';

export default {
  name: 'List',
  computed: {
    ...mapState(["items"])
  },
  methods: {
    ...mapActions({
      getItems:ACTION_TYPES.GET_ITEMS
    })
  }, 
  /*   cuando se crea mi componente se pinta el mounted y llamo a los items
    pasándole el servicio, con lo cual, cuando esto se pinte me va a pedir los items
    y me va a aparecer todo */
  mounted(){
    this.getItems(httpService);
  }
};
</script>