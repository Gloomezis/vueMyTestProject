import * as types from "./types";

export  default {
  [types.MUTATE_INCREMENT_COUNTER](state) {
    state.count++
  },
  [types.MUTATE_DECREMENT_COUNTER] (state) {
    state.count--
  },

  [types.MUTATE_DELETE_CUSTOMER] (state, id) {
     var customers = state.customers;
     customers.splice(customers.indexOf(customers.find(customer =>  customer.id == id)), 1);
     state.customers = customers;
  },
  [types.MUTATE_UPDATE_CUSTOMER] (state, updatedCustomer) {
    //No difference:
    // var customers = state.customers
    // customers[customers.indexOf(customers.find(customer =>  customer.id == updatedCustomer.id))] = updatedCustomer;
    // state.customers = customers;
       state.customers[state.customers.indexOf(state.customers.find(customer =>  customer.id == updatedCustomer.id))] = updatedCustomer;

  },

   [types.MUTATE_ADD_CUSTOMER] (state, customer) {
    customer.id = state.customer_count_id+1;
    state.customers.push(customer);
    state.customer_count_id++;
  },

};
