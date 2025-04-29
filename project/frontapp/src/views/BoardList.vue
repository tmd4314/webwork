<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" :key="board.id" @click="infoHandler(board.id)" >
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>

        <tr>
          <td colspan="6" class="text-center">
            <button
              class="btn btn-xs btn-info" @click="boardInsert()">
              등록
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from "axios";
  axios.defaults.baseURL="http://localhost:3000/board"
  export default {
    data() {
      return {
        boards: []
      }
    },
    created() {
      this.List()
    },
    methods : {
      async List(){
        let result = await axios.get("")
        this.boards = result.data;
      },
      async infoHandler(id) {
        this.$router.push({path: "/info", query: {id: id}});
      },
      async boardInsert(){
        this.$router.push({path: "/form"});
      }
    }
  }
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
