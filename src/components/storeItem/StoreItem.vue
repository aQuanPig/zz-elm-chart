<template>
  <div>
    <div class="list-item" v-for="item in shopList" :key="item.id">
      <img
        :src="getRandomUrl()"
        alt
        class="img"
      />
      <div class="info">
        <div class="top">
          <div class="left">
            <!-- is_premium -->
            <span class="brand" v-show="item.is_premium">品牌</span>
            <h4 class="text-nowrap name">{{item.name || "bigbang韩国炸鸡(光华北店)"}}</h4>
          </div>
          <div class="right">
            <span class="item" v-for="support in item.supports" :key="support.id">{{support.icon_name}}</span>
          </div>
        </div>
        <div class="center">
          <div class="left">
            <van-rate
              v-model="item.rating"
              allow-half
              void-color="#c8c9cc"
              color="#ff9b00"
              :readonly="true"
              size="10"
              gutter="1"
            />
            <span class="rating">{{item.rating}}</span>
            <span class="sell">月售{{item.recent_order_num}}单</span>
          </div>
          <div class="right">
            <p
              class="mode deliver"
              :class="item.delivery_mode.text === '蜂鸟专送'?'model':'model1'"
            >{{item.delivery_mode && item.delivery_mode.text}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <span class="fee">￥{{item.float_minimum_order_amount}}起送</span>
            /
            <span
              class="fee"
            >{{item.piecewise_agent_fee && item.piecewise_agent_fee.tips}}</span>
          </div>
          <div class="right">
            <span class="distance">{{item.distance}}</span>
            /
            <span class="minute">47分钟</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import picUrl from '@/initData/picUrl'
export default {
  name: 'StoreItem',
  props: {
    shopList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      baseUrl: 'https://fuss10.elemecdn.com/',
      value: 4.4,
      picUrl: picUrl,
    }
  },
  methods: {
    getRandomUrl() {
      const length = picUrl.length
      const index = Math.floor(Math.random() * length)
      return picUrl[index]
    },
  },
}
</script>

<style lang="less" scoped>
.list-item {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
}
.img {
  width: 64px;
  height: 64px;
}
.info {
  flex:1 ;
  padding-left: 10px;
  .top {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .brand {
        background-color: #f5d302;
        color: #333;
        font-size: 12px;
        padding: 1px 2px;
        font-weight: 600;
        line-height: 16px;
      }
      .name {
        margin-left: 5px;
        font-weight: 700;
        font-size: 16px;
        width: 150px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .item {
        background-color: #fff;
        border: 1px dashed rgba(100, 100, 100, 0.4);
        color: #999999;
        margin: 0 2px;
        padding: 2px;
        font-size: 10px;
      }
    }
  }
  .center {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    .left {
      .rating {
        color: #ff9b00;
        font-size: 12px;
        font-weight: 600;
        margin-left: 5px;
      }
      .sell {
        color: #847070;
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .right {
      display: flex;
      .deliver {
        font-size: 11px;
        padding: 1px 2px;
        border-radius: 4px;
        margin-left: 4px;
      }
      .mode {
        background-color: #fff;
        color: #57a9ff;
        border: 1px solid;
      }
      .mode1 {
        background-color: #298eeb;
        color: #f5f5f5;
        line-height: 14px;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    .left {
      .fee {
        font-size: 12px;
        color: #190b0b;
      }
    }
    .right {
      .distance {
        font-size: 12px;
        color: #666;
      }
      .minute {
        color: #298eeb;
        font-size: 12px;
      }
    }
  }
}
</style>