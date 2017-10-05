import * as types from "./types";

export  default {
  [types.EVEN_OR_ODD]: state => state.count % 2 === 0 ? 'even' : 'odd'
};
