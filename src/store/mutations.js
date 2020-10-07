import { GETCURRENTCITY } from "./constants";

export default {
  [GETCURRENTCITY](state,payload){
    state.currentCity = {...payload}
  }
}