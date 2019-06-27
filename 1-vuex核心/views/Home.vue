<template>
  <div class="page-home">
    <h1>我是首页 - {{ name }}</h1>

    <div class="todoList">
      <div class="todoList__top">
        <el-input ref="todoInput" v-model="inputVal" placeholder="请输入..."></el-input>
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
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',

  data () {
    return {
      inputVal: '',
    }
  },

  computed: {
    ...mapState(['todoList', 'name']),
    ...mapGetters(['todoListNum'])
  },

  methods: {
    // ...mapMutations(['DEL_TODO']),
    DEL_TODO (payload) {
      this.$store.commit({
        type: 'DEL_TODO',
        ...payload
      })
    },

    // ...mapActions(['ADD_TODO_ACT']),
    ADD_TODO_ACT (payload) {
      this.$store.dispatch('ADD_TODO_ACT', payload);
      // this.$store.dispatch({
      //   type: 'ADD_TODO_ACT',
      //   ...payload
      // })
    },
    /**
     * 添加todo
     */
    addTodo () {
      let lastTodo = this.todoList[this.todoList.length - 1];
      let id = lastTodo ? lastTodo.id + 1 : 1;

      // this.$store.dispatch('ADD_TODO_ACT', {
      //   id,
      //   name: this.inputVal
      // })
      this.ADD_TODO_ACT({
        id,
        name: this.inputVal
      })

      this.inputVal = '';
      this.$refs.todoInput.focus();

      // this.todoList.push({
      //   id,
      //   name: this.inputVal
      // })
      // setTimeout(() => {
      //   this.$store.commit({
      //     type: 'ADD_TODO',
      //     id,
      //     name: this.inputVal
      //   });

      //   this.inputVal = '';
      //   // console.log(this.$refs.todoInput);
      //   this.$refs.todoInput.focus();
      // }, 2000)
    },

    /**
     * 删除todo
     * @param {Number} index 下标
     */
    // delTodo (index) {
    //   // this.todoList.splice(index, 1);
    //   this.$store.commit({
    //     type: 'DEL_TODO',
    //     index
    //   })
    //   // 发现这个 delTodo 方法，里面的代码就只有提交 mutation, 那么就推荐使用 辅助函数的方法
    // }
  },

  // mounted () {
  //   console.log(this.$store);
  // }
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
</style>
