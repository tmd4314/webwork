<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.id}}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ board.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ board.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ board.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ board.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info" @click="boardUpdate(board.id)">
                수정
              </button>
              <button
                class="btn btn-xs btn-warning" @click="goToList()">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>작성내용</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in comments">
            <td>{{ comment.id }}</td>
            <td>{{ comment.writer }}</td>
            <td>{{ comment.content }}</td>
            <td>{{ comment.created_date }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data() {
      return {
        board: {},
        comments: []
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.fetchInfo();
      this.commentList();
    },
    methods: {
     async fetchInfo() {
        let board = await axios.get(`http://localhost:3000/board/${this.id}`)
        this.board = board.data;
      },
      boardUpdate(id) {
        this.$router.push({path: "/form", query: {id: id}});
      },
      goToList(){
        this.$router.push({path:"/list"});
      },
      async commentList(id){
        let comments = await axios.get(`http://localhost:3000/comment?bid=${this.id}`)
        this.comments = comments.data;
      }
    }
  }
</script>
