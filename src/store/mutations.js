import * as types from "./types";

export  default {
  [types.MUTATE_INCREMENT_COUNTER](state) {
    state.count++
  },
  [types.MUTATE_DECREMENT_COUNTER] (state) {
    state.count--
  },

  mutatateUpdateCustomer () {

  },
  deleteCustomer () {
    
  },
   [types.MUTATE_ADD_CUSTOMER] (state, customer) {
    customer.id = state.customer_count_id+1;
    state.customers.push(customer);
    state.customer_count_id++;
  },

  // updateCustomer 
  // deleteCustomer
};
