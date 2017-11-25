import Vue from 'vue'
import Vuex from 'vuex'

import  firstModule from "../store/modules/firstModule";
import actions from "../store/actions";
import getters from "../store/getters";
import mutations from "../store/mutations";

Vue.use(Vuex)

const state = {
  count: 0 ,
  customer_count_id: 2,
  customers: [
    { id: 0,
      first_name: 'Nicko',
      last_name: 'Bow',
      phone: '+375333333333',
      email: 'someEmail@mail.ru',
      address: 'some street 50',
      city: 'some city',
      state: 'some state'
    },
    { id: 1,
      first_name: 'Pavel',
      last_name: 'Some',
      phone: '+375333333333',
      email: 'someEmail@mail.ru',
      address: 'some street 50',
      city: 'some city',
      state: 'some state'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
