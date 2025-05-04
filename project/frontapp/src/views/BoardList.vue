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
          <td>{{ formatDate(board.create_date) }}</td>
          <td>{{ countComment(board.id) }}</td>
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
        boards: [],
        comments: []
      }
    },
    created() {
      this.List();
      this.getAllComments();
    },
    methods : {
      async List(){
        let result = await axios.get("")
        console.log(result.data);
        this.boards = result.data;
      },
      async getAllComments() {
        const res = await axios.get("http://localhost:3000/comment");
        this.comments = res.data;
      },
      countComment(bid) {
        return this.comments.filter(comment => comment.bid === bid).length;
      },
      async infoHandler(id) {
        this.$router.push({path: "/info", query: {id: id}});
      },
      async boardInsert(){
        this.$router.push({path: "/form"});
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hour}:${minute}`;
      }
    }
  }
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
