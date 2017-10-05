import Vue from 'vue'
import Vuex from 'vuex'

import  firstModule from "../store/modules/firstModule";
import actions from "../store/actions";
import getters from "../store/getters";
import mutations from "../store/mutations";

Vue.use(Vuex)

const state = {
  count: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
