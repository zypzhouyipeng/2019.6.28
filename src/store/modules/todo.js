import { CHG_INPUT_VAL } from '../types'
export default {
    namespaced: true,

    state: {
        inputVal: '',
    
        todoList: [
          {id: 1, name: '吃饭'},
          {id: 2, name: '睡觉'}
        ]
      },
    
      getters: {
        todoListNum (state) {
          return state.todoList.length
        }
      },
    
      mutations: {
        /**
         * 修改 inputVal
         * @param {Object} payload 需要修改成的内容
         */
        [CHG_INPUT_VAL] (state, payload) {
          state.inputVal = payload.value
        },
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
        ADD_TODO (state, payload) {
          state.todoList.push(payload)
        },
    
        /**
         * 删除 payload.index 下标的 todo
         */
        DEL_TODO (state, payload) {
          state.todoList.splice(payload.index, 1)
        }
      },
    
      actions: {
        /**
         * 一个添加 todo 的动作
         * @param {Object} context 可以简单理解为就是 store
         * @param {Object} payload 传递过来的参数
         */
        ADD_TODO_ACT ({ commit }, payload) {
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
        }
      }
}