import { GETCURRENTCITY, GETCURRENTADDRESS } from "./constants";

export default {
  [GETCURRENTCITY](state, payload) {
    state.currentCity = { ...payload }
  },
  [GETCURRENTADDRESS](state, payload) {
    state.currentAddress = { ...payload }
  }
}