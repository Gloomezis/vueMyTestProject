import * as types from "./types";

export default {

  // updateCustomer 
  // fetchCustomer
  // deleteCustomer
  // addCustomer
    
  [types.COUNTER_INCREMENT]: ({ commit }) => commit(types.MUTATE_INCREMENT_COUNTER),
  [types.COUNTER_DECREMENT]: ({ commit }) => commit(types.MUTATE_DECREMENT_COUNTER),
  [types.COUNTER_INCREMENT_IF_ODD]: ({commit, state}) => {
    if ((state.count + 1) % 2 === 0) {
      commit(types.MUTATE_INCREMENT_COUNTER)
    }
  },
  [types.COUNTER_INCREMENT_ASYNC]: ({commit}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.MUTATE_INCREMENT_COUNTER)
        resolve()
      }, 1000)
    })
  }
};
