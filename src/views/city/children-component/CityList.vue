<template>
  <div class="city-list">
    <div class="city" v-if="hotCityList.length !==0">{{title || ''}}</div>
    <ul class="hot-list" v-if="hotCityList.length !==0">
      <li
        v-for="item in hotCityList"
        :key="item.id"
        class="list-item text-nowrap"
        :class="{'hot':title==='热门城市'?true:false}"
        :title="item.name"
        @click="selectAddress(item)"
      >{{item.name}}</li>
    </ul>
    <van-index-bar
      v-if="Object.keys(allCityList).length !== 0"
      :sticky-offset-top="46"
      :z-index="22"
    >
      <template v-for="item in letters">
        <van-index-anchor class="all-list-title" :index="item" :key="item"></van-index-anchor>
        <div v-for="item1 in allCityList[item]" :key="item1.id" class="list-item">
          <van-cell :title="item1.name" @click="selectAddress(item1)" />
        </div>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { GETCURRENTCITY } from 'store/constants'
export default {
  name: 'CurrentCity',
  props: {
    hotCityList: {
      type: Array,
      default() {
        return []
      },
    },
    allCityList: {
      type: Object,
      default() {
        return {}
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      letters: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
    }
  },
  methods: {
    selectAddress(city) {
      this.$store.commit(GETCURRENTCITY, city)
      this.$router.push({path: '/address'})
    },
  },
}
</script>

<style lang="less" scoped>
.city-list {
  background-color: #fff;
  border-bottom: 2px solid #e4e4e4;
}
.city {
  padding: 10px 10px 8px;
  font-size: 13px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.hot-list {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    width: 22.1%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    padding: 0 5px;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    &:nth-child(4n) {
      border-right: none;
    }
  }
  .hot {
    color: #3190e8;
  }
}
.all-list-title {
  background: #eeeeee;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
</style>