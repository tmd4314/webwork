<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.no}}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ dateFormat }}
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
                class="btn btn-xs btn-info" @click="boardUpdate(board.no)">
                수정
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 댓글 -->
    <div class="row">
      <CommentComp v-if="board.no" :bno="board.no"/>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import CommentComp from '../components/CommentComp.vue'
  export default{
    components: {CommentComp},
    data() {
      return {
        board: {},
      }
    },
    created() {
      this.no = this.$route.query.no;
      this.fetchInfo();
    },
    computed: {
      dateFormat(){
        const date = new Date(this.board.updated_dt);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');  // 0~11 이므로 +1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
      }
    },
    methods: {
     async fetchInfo() {
        let board = await axios.get(`/api/board/${this.no}`)
        console.log(board.data);
        this.board = board.data[0];
      },
      boardUpdate(no) {
        this.$router.push({path: "/form", query: {no: no}});
      },
      goToList(){
        this.$router.push({path:"/list"});
      }
    }
  }
</script>
