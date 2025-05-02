<template>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>작성자</th>
        <th>작성내용</th>
        <th>삭제</th>
        <th>작성일</th>
        <th>등록</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in comments">
        <td>{{ comment.id }}</td>
        <td>{{ comment.writer }}</td>
        <td>{{ comment.content }}</td>
        <td>
          <button
            class="btn btn-xs btn-danger" @click="boardDelete(board.id)">
            삭제
          </button>
        </td>
        <td>{{ formatDate(comment.create_date) }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <tr>
    <td colspan="6" class="text-center">

      <button
        class="btn btn-xs btn-info" @click="commentInfo(board.id)">
        등록
      </button>
    </td>
  </tr>
</template>
<script>
import axios from 'axios';
export default{
  props:['bid'],
  data() {
    return {
      comments: []
    }
  },
  created() {
    this.commentList();
  },
  methods: {
    async commentList(){
      let comments = await axios.get(`http://localhost:3000/comment/${this.bid}`)
      this.comments = comments.data;
    },
    formatDate(isoStr) {
      const date = new Date(isoStr);
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
