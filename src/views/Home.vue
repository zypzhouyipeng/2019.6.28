<template>
  <div class="page-home">
    <h1>我是首页 - {{ name }}</h1>

    <div class="todoList">
      <div class="todoList__top">
        <el-input
          ref="todoInput"
          v-model="inputVal"
          placeholder="请输入..."
          >
        </el-input>
        <el-button type="primary" :disabled="!inputVal" @click="addTodo">ADD</el-button>
      </div>

      {{ todoListNum }}
      <el-table
        :data="todoList"
        >
        <el-table-column label="序号" prop="id" />
        <el-table-column label="事项" prop="name" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              @click="DEL_TODO({ index: scope.$index })"
              >
              Delete - {{ scope.row.name }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    
    <hr>

    <div class="carList">
      <div class="left">
        <ul>
          <li
            v-for="item in productList"
            :key="item.id"
          >
            <p>商品名称：{{ item.name }}</p>
            <p>商品单价：{{ item.price }}</p>
            <button @click="CHG_CARLIST({ name: 'reduce', product: item })">-</button>
            <button @click="CHG_CARLIST({ name: 'add', product: item })">+</button>
          </li>
        </ul>
      </div>
      <div class="right">
        <p
          v-if="carTotal"
        >最终总价：{{ carTotal }}</p>
        <ul>
          <li
            v-for="item in carList"
            :key="item.id"
          >
            <p>商品名称：{{ item.name }}</p>
            <p>商品单价：{{ item.price }}</p>
            <p>购买数量：{{ item.num }}</p>
            <p>商品总价：{{ item.total }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
ggf
<script>
import { mapState, mapGetters } from 'vuex'
import { CHG_INPUT_VAL } from '../store/types'

export default {
  name: 'home',

  data () {
    return {
      // inputVal: '',
    }
  },

  computed: {
    // ...mapState(['todoList', 'name', 'productList', 'carList']),
    // ...mapGetters(['todoListNum', 'carTotal']),
    ...mapState(['name']),
    ...mapState('todo', ['todoList']),
    ...mapState('car', ['productList', 'carList']),
    ...mapGetters('todo', ['todoListNum']),
    ...mapGetters('car', ['carTotal']),

    inputVal: {
      get () {
        return this.$store.state.inputVal
      },

      set (value) {
        this.$store.commit({
          type: "todo/" + CHG_INPUT_VAL,
          value
        })
      }
    }
  },

  methods: {
    // ...mapMutations(['DEL_TODO']),
    DEL_TODO (payload) {
      this.$store.commit({
        type: "todo/" + 'DEL_TODO',
        ...payload
      })
    },

    // ...mapActions(['ADD_TODO_ACT']),
    ADD_TODO_ACT (payload) {
      this.$store.dispatch('todo/ADD_TODO_ACT', payload)
      // this.$store.dispatch({
      //   type: 'ADD_TODO_ACT',
      //   ...payload
      // })
    },
    /**
     * 添加todo
     */
    addTodo () {
      let lastTodo = this.todoList[this.todoList.length - 1]
      let id = lastTodo ? lastTodo.id + 1 : 1

      // this.$store.dispatch('ADD_TODO_ACT', {
      //   id,
      //   name: this.inputVal
      // })
      this.ADD_TODO_ACT({
        id,
        name: this.inputVal
      })

      this.inputVal = ''
      this.$refs.todoInput.focus()
    },

    CHG_CARLIST (payload) {
      this.$store.commit({
        type: "car/" + 'CHG_CARLIST',
        ...payload
      })
    }
  },

  mounted () {

  }
}
</script>


<style lang="scss">
.todoList {
  width: 500px;
  margin: 0 auto;

  &__top {
    display: flex;

    .el-input {
      margin-right: 10px;
    }
  }
}

.carList {
  display: flex;
  width: 700px;
  margin: auto;

  > div {
    flex: 1;
  }

  .left {
    border-right: 1px solid #000;
  }
}

</style>
