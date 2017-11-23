import * as types from "./types";

export default {

  // updateCustomer 
  // deleteCustomer
 
  [types.ADD_CUSTOMER]: ({commit},customer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.MUTATE_ADD_CUSTOMER, customer )
        resolve()
      }, 1000)
    })
  },
  deleteCustomer: ({commit}) => commit(),
  updateCustomer : ({commit}) => commit(),

  
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
  },

  // GET /api/<resourceName>
  fetchList({ commit }, { config } = {}) {
    // ...
  },
 
  // GET /api/<resourceName>/:id
  fetchSingle({ commit }, { id, config } = {}) {
    // ...
  },
 
  // POST /api/<resourceName>
  create({ commit }, { data, config } = {}) {
    // ...
  },
 
  // PATCH /api/<resouceName>/:id
  update({ commit }, { id, data, config } = {}) {
    // ...
  },
 
  // PUT /api/<resouceName>/:id
  replace({ commit }, { id, data, config } = {}) {
    // ...
  },
 
  // DELETE /api/<resouceName>/:id
  destroy({ commit }, { id, config } = {}) {
    // ...
  },
};
