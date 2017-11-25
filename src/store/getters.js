import * as types from "./types";

export  default {
  [types.EVEN_OR_ODD]: state => state.count % 2 === 0 ? 'even' : 'odd' ,
  //list() returns list of resources
  // [types.FETCH_CUSTOMERS]: state => state.customers ,
  FETCH_CUSTOMERS: state => state.customers ,
  // fetchCustomers
  // byId(id) returns resource by ID
  
  FETCH_CUSTOMER: (state, getters) => (id) => {
    return state.customers.find(customer =>  customer.id == id);
  }
 
};
