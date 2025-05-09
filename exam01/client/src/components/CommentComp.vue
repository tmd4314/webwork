<template>
    <div v-if="comments.length === 0" class="text-center">댓글 없음</div>
    <table v-else table class="table table-bordered">
      <thead>
        <tr>
          <th>작성내용</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.no">
          <td>{{ comment.content }}</td>
          <td>{{ comment.writer }}</td>
          <td>{{ formatDate(comment.updated_dt) }}</td>
        </tr>
      </tbody>
    </table>
</template>
<script>
import axios from 'axios';
export default{
  props:['bno'],
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
      let comments = await axios.get(`/api/comment/${this.bno}`)
      this.comments = comments.data;
    },
    formatDate(isoStr) {
      const date = new Date(isoStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }
}
   
</script>
