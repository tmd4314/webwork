<template>
  <table>
    <thead>
      <tr>
        <th>번호</th>
        <th>작성자</th>
        <th>작성내용</th>
        <th>삭제</th>
        <th>작성일</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in comments">
        <td>{{ comment.id }}</td>
        <td>{{ comment.writer }}</td>
        <td>{{ comment.content }}</td>
        <td>
          <button
            class="btn btn-xs btn-danger" @click="commentDelete(comment.id)">
            삭제
          </button>
        </td>
        <td>{{ formatDate(comment.create_date) }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
    async commentDelete(id) {
      const confirmed = confirm("정말 이 댓글을 삭제하시겠습니까?");
      if (!confirmed) return;

      try {
        await axios.delete(`http://localhost:3000/comment/${id}`);
        alert("댓글이 삭제되었습니다.");
        this.commentList(); // 삭제 후 목록 다시 불러오기
      } catch (err) {
        console.error(err);
        alert("댓글 삭제 중 오류가 발생했습니다.");
      }
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
