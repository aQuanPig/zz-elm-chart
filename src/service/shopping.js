import {request} from './request'

export function getShoppingRestaurants(latitude,longitude,offset=0,limit=20){
  return request({
    url:"/shopping/restaurants",
    params:{
      latitude,
      longitude,
      offset,
      limit
    }
  })
}