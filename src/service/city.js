// import axios from 'axios'
import { request } from './request'
export function getCityInfo(type) {
  // type:string 	guess：定位城市， hot：热门城市， group：所有城市
  return request({
    url: "/v1/cities",
    params: {
      type
    }
  })
}

export function searchAddress(city_id,keyword){
  return request({
    url:"/v1/pois",
    params:{
      city_id,
      keyword
    }
  })
}

// export function getAllCity() {
//   return axios({
//     url: "https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json"
//   })
// }