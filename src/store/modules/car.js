export default {
    namespaced: true,

    state: {
        name: '张三',

        productList: [
        { id: 1, name: 'apple', price: 18 },
        { id: 2, name: 'banana', price: 10 },
        { id: 3, name: 'orange', price: 5 }
        ],

        carList: []
    },

    getters: {
        carTotal(state) {
          let total = 0
          if (state.carList.length) {
            // reduce((total, item)里的total是自带的参数,不是我的变量total
            total = state.carList.reduce((total, item) => {
              //
              return total + item.total
            }, 0)
          }
          return total
        }
      },

      mutations: {   
        CHG_CARLIST(state, payload) {
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
        }
      }
}