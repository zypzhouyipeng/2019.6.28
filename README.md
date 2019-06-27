# vuex

## 使用

1. npm install --save vuex
2. 创建一个 store.js 用来实例化 vuex 的仓库  new Vuex.Store()
3. 在 new Vue 配置 store 选项

## 从仓库中获取state的数据

> 使用了 vuex 之后，会提供一个 this.$store 的对象，就是 store 的实例对象

1. this.$store.state.xxx （不推荐）
2. computed 计算属性的来获取 store 中的数据
  ```js
  computed: {
    todoList () {
      return this.$store.state.todoList
    }
  }
  ```
3. 使用 mapState 辅助函数
  ```js
  import { mapState } from 'vuex';

  computed: mapState(['todoList'])
  ```
4. 第三种写法让我们无法实现组件自身的计算属性。（推荐）
  ```js
  import { mapState } from 'vuex';

  computed: {
    ...mapState(['todoList']),

    // 下面就可以写自己组件的计算属性了
    key: value
  }
  ```

## 修改仓库中的数据

PS:
1. 绝对不能直接去修改，会报错，报 computed 不允许被修改。
2. 参数不能传递多个，如果需要多个，需要弄个对象的方式传递过来
3. commit() 还可以接受 对象形式, 一定需要一个 type 属性来指定 mutation 的名字

使用步骤：
1. state 中的数据要改变，先定义好 mutation
2. 在组件中 提交这个 mutation （推荐）
  2.1 直接使用 this.$store
  ```js
  this.$store.commit('mutation 的名字')

  this.$store.commit({
    type: 'mutation 的名字',
    // 其余的属性就是在payload中能拿到的参数
  })
  ```
  2.2 使用 mapMutations 这个辅助函数  (推荐)
  ```js
  import { mapMutations } from 'vuex';

  methods: {
    ...mapMutations(['CHG_NAME'])
  }
  ```

## 如何使用 getters

1. 定义好 getter
2. 组件中使用
   1. this.$store.getters.todoListNum  (不推荐)
   2. mapGetters 辅助函数
   ```js
   import { mapGetters } from 'vuex';

   computed: {
     ...mapGetters(['todoListNum'])
   }
   ```

## 如何使用异步

？ 如果让我们的 add 操作 延时 2秒 之后再添加

1. 能不能在 mutations 里面写 setTimeout (不允许)
2. 在组件外面先把异步代码走完之后，再做 commit (也还可以)
3. 使用 actions (推荐)
   1. 定义上 action
   2. 在组件中 派发 action
      1. this.$store.dispatch('action 的名字')
      2. mapActions 辅助函数
      ```js
      import { mapActions } from 'vuex'

      methods: {
        ...mapActions(['action 的名字'])
      }
      ```

## 如果一个数据 是 仓库 中的数据，并且在组件中使用 v-model 的方式去使用，需要注意。
```js
inputVal: {
  get () {
    return this.$store.state.inputVal
  },

  set (value) {
    // this.$store.commit('CHG_INPUG_VAL', value);
    this.$store.commit({
      type: 'CHG_INPUT_VAL',
      value
    })
  }
}
```
