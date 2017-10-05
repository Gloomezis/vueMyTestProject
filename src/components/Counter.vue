<template>
  <div class="container">
    <div class="row text-center">
      <h3>Clicked: {{$store.state.count}} times, counter is {{evenOrOdd}}</h3>
      <button class="btn btn-success" @click="increment">+</button>
      <button class="btn btn-danger" @click="decrement">-</button>

      <button class="btn " @click="incrementIfOdd">increment if odd</button>
      <button class="btn " @click="incrementAsync">increment async</button>

    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import * as types from "../store/types";

  //  import {mapGetters, mapActions, mapState, mapMutations,} from 'vuex'

  export default {
    name: 'counter',
    computed: mapGetters({
      evenOrOdd: types.EVEN_OR_ODD
    }),
    //store.$dispatch('nameActions', someData)
    methods: mapActions({
      increment: types.COUNTER_INCREMENT,
      decrement: types.COUNTER_DECREMENT,
      incrementIfOdd:types.COUNTER_INCREMENT_IF_ODD,
      incrementAsync: types.COUNTER_INCREMENT_ASYNC
    }),

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
