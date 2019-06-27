<template>
  <div class="page-home">
    <h1>我是首页</h1>

    <div class="todoList">
      <div class="todoList__top">
        <el-input ref="todoInput" v-model="inputVal" placeholder="请输入..."></el-input>
        <el-button type="primary" :disabled="!inputVal" @click="addTodo">ADD</el-button>
      </div>

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
              @click="delTodo(scope.$index)"
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
export default {
  name: 'home',

  data () {
    return {
      inputVal: '',
      todoList: []
    }
  },

  methods: {
    /**
     * 添加todo
     */
    addTodo () {
      let lastTodo = this.todoList[this.todoList.length - 1];
      let id = lastTodo ? lastTodo.id + 1 : 1;
      this.todoList.push({
        id,
        name: this.inputVal
      })
      this.inputVal = '';
      // console.log(this.$refs.todoInput);
      this.$refs.todoInput.focus();
    },

    /**
     * 删除todo
     * @param {Number} index 下标
     */
    delTodo (index) {
      this.todoList.splice(index, 1);
    }
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
</style>
