import Vue from "Vue";
import  Vuex from "Vuex";
import  firstModule from "../store/modules/firstModule";

import actions from "../store/actions";
import getters from "../store/getters";
import mutations from "../store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      value : 0
    },
    getters,
    mutations,
    actions,
  modules:{
        firstModule
    }
});

