import Vue from 'vue'
import Vuex from 'vuex'
// import { CHG_INPUT_VAL } from './types'

import todo from './modules/todo'
import car from './modules/car'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // inputVal: '',

    // todoList: [
    //   {id: 1, name: '吃饭'},
    //   {id: 2, name: '睡觉'}
    // ],

    name: '张三'

    // productList: [
    //   { id: 1, name: 'apple', price: 18 },
    //   { id: 2, name: 'banana', price: 10 },
    //   { id: 3, name: 'orange', price: 5 }
    // ],

    // carList: []
  },

  getters: {
    /**
     * 获取仓库 todoList 长度
     * @param {*} state store.state
     * @param {*} getters store.getters
     */
    // todoListNum (state) {
    //   return state.todoList.length
    // }

    // carTotal(state) {
    //   let total = 0
    //   if (state.carList.length) {
    //     // reduce((total, item)里的total是自带的参数,不是我的变量total
    //     total = state.carList.reduce((total, item) => {
    //       //
    //       return total + item.total
    //     }, 0)
    //   }
    //   return total
    // }
  },

  mutations: {
    /**
     * 修改 inputVal
     * @param {Object} payload 需要修改成的内容
     */
    // [CHG_INPUT_VAL] (state, payload) {
    //   state.inputVal = payload.value
    // },

    /**
     * 修改 name 这个 状态（数据）
     * @param {Object} state store.state
     * @param {Object} payload 参数
     */
    CHG_NAME (state, payload) {
      state.name = payload.name
    },

    /**
     * 新增一个todo
     */
    // ADD_TODO (state, payload) {
    //   state.todoList.push(payload)
    // },

    /**
     * 删除 payload.index 下标的 todo
     */
    // DEL_TODO (state, payload) {
    //   state.todoList.splice(payload.index, 1)
    // }

    /* CHG_CARLIST(state, payload) {
      // payload.product是我点击添加或减少按钮传过来的对象(productList里的对象)
      let product = payload.product
      if (payload.name === 'add') {
        // 判断，当前点击的商品是否已经存在购物车中
        // 找不到，push
        // 找到了，carList[index].num += 1;
        // item.id是库里的id,  product.id是我点击的id
        let index = state.carList.findIndex(item => item.id === product.id)

        // index > -1代表有商品,因为只要有商品,index最小是0
        if (index > -1) {
          // state.carList[index]就是我库里carList数组里对应index下标的对象
          state.carList[index].num++
          state.carList[index].total += product.price
        } else {
          state.carList.push({
            ...product,
            num: 1,
            total: product.price * 1
          })
        }
      } else if (payload.name === 'reduce') {
        // 判断，当前商品是否已经存在购物车中
        let index = state.carList.findIndex(item => item.id === product.id)

        if (index > -1) {
          if (state.carList[index].num > 1) {
            state.carList[index].num--
            state.carList[index].total -= product.price
          } else {
            state.carList.splice(index, 1)
          }
        }
      }
    } */
  },

  actions: {
    /**
     * 一个添加 todo 的动作
     * @param {Object} context 可以简单理解为就是 store
     * @param {Object} payload 传递过来的参数
     */
    /* ADD_TODO_ACT ({ commit }, payload) {
      setTimeout(() => {
        // commit('ADD_TODO', payload);
        // commit({
        //   type: 'ADD_TODO',
        //   name: payload.name,
        //   id: payload.age
        // })
        commit({
          type: 'ADD_TODO',
          ...payload
        })
      }, 2000)
    } */
  },
  modules: {
    todo,
    car
  }
})
