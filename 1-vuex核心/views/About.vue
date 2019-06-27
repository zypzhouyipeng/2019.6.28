<template>
  <div class="about">
    <h1>This is an about page - {{ name }}</h1>

    <el-button @click="CHG_NAME({ name: '张无忌', age: 20 })">修改仓库中的 name </el-button>

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
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'About',

  computed: {
    ...mapState(['todoList', 'name'])
  },

  methods: {
    ...mapMutations(['CHG_NAME']),

    // CHG_NAME () {
    //   // this.name = '李四'
    //   // this.$store.commit('CHG_NAME', {
    //   //   name: '张三丰',
    //   //   age: 19
    //   // });
    //   this.$store.commit({
    //     type: 'CHG_NAME',
    //     name: '张三丰',
    //     age: 19
    //   })
    // }
  }
}
</script>
