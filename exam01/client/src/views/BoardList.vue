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
        <tr v-for="board in boards" :key="board.no" @click="infoHandler(board.no)" >
          <td>{{ board.no }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ formatDate(board.updated_dt) }}</td>
          <td>{{ countComment(board.no) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from "axios";
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
        let result = await axios.get("/api/board")
        console.log(result.data);
        this.boards = result.data;
      },
      async getAllComments() {
        const res = await axios.get("/api/comment");
        this.comments = res.data;
      },
      countComment(bno) {
        return this.comments.filter(comment => comment.bno == bno).length;
      },
      async infoHandler(no) {
        this.$router.push({path: "/info", query: {no: no}});
      },
      async boardInsert(){
        this.$router.push({path: "/form"});
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
      }
    }
  }
</script>
<style scoped>
table * {
  text-align: center;
}
</style>
