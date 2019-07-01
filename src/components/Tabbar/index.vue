<template>
    <div class="mz-tabbar">
    <ul class="mz-tabbar__ul">
      <li 
        class="mz-tabbar__li"
        v-for="(item,index) in tabs"
        :key="index"
      >
        <router-link :to="item.to" active-class="active">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.name }}</span>
        </router-link>                
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "mzTabbar",

    props: {
        tabs: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/px2rem.scss";
@import "../../assets/styles/common/mixins.scss";
.mz-tabbar {
    @include border-top;
    @include border-bottom;
    height: px2rem(50);
    background: #fff;
    &__ul {
        display: flex;
        height: 100%;
    }
    &__li {
        flex: 1;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            height: 100%;
            font-size: 12px;
            font-style: normal;
            color: #797d82;
            .iconfont {
                font-size: 24px;
                margin-bottom: 4px;
            }
            &.active {
                color: #ff5f16;
            }
        }
    }
}
</style>

