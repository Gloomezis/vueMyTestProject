<template>
  <div class="details container" v-if="customer">
    <router-link to="/">Back</router-link>
      <h1 class="page-header">{{customer.first_name}} {{customer.last_name}}
        <span class="pull-right">
              <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">Edit</router-link>
              <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button>
              </span>
      </h1>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{customer.phone}}
        </li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{customer.email}}
        </li>
      </ul>

      <ul class="list-group">
        <li class="list-group-item"> {{customer.address}}</li>
        <li class="list-group-item">{{customer.city}}</li>
        <li class="list-group-item">{{customer.state}}</li>
      </ul>
  </div>
</template>

<script>
  import Alert from './Alert'
  import { mapActions } from 'vuex'
  import * as types from "../store/types";

  export default {
    name: 'customerDetails',
    data () {
      return {
        customer:   { id: 1,
      first_name: 'Standart',
      last_name: 'Some',
      phone: '+375333333333',
      email: 'someEmail@mail.ru',
      address: 'some street 50',
      city: 'some city',
      state: 'some state'
    }
      }
    },
    methods: {
      fetchCustomer () {
    
        this.customer = this.$store.getters.FETCH_CUSTOMER(this.$route.params.id);
       
      },
      deleteCustomer (id) {
        this.$store.dispatch(types.DELETE_CUSTOMER, id)
          .then(() =>
              this.$router.push({path: '/', query: {alert: 'Customer '+ this.customer.first_name +' deleted'}})
            )
      }
    },
    created: function () {
      this.fetchCustomer();
      console.log('created');
    },
    updated: function () {
      this.fetchCustomer();
      console.log('updated');
    },
     components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
