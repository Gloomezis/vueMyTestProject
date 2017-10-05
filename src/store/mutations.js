import * as types from "./types";

export  default {
  [types.MUTATE_INCREMENT_COUNTER](state) {
    state.count++
  },
  [types.MUTATE_DECREMENT_COUNTER] (state) {
    state.count--
  }
};
