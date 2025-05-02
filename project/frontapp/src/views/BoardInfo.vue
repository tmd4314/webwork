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
                class="btn btn-xs btn-info" @click="boardUpdate(board.id)">
                수정
              </button>
              <button
                class="btn btn-xs btn-danger" @click="boardDelete(board.id)">
                삭제
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
      <CommentComp v-if="board.id" :bid="board.id"/>
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
      this.id = this.$route.query.id;
      this.fetchInfo();
    },
    computed: {
      dateFormat(){
        const date = new Date(this.board.create_date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');  // 0~11 이므로 +1
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');  // 로컬 기준으로 가져옴
        const minute = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hour}:${minute}`;
      }
    },
    methods: {
     async fetchInfo() {
        let board = await axios.get(`http://localhost:3000/board/${this.id}`)
        console.log(board.data);
        this.board = board.data[0];
      },
      boardUpdate(id) {
        this.$router.push({path: "/form", query: {id: id}});
      },
      goToList(){
        this.$router.push({path:"/list"});
      },
      async boardDelete(id){
        if (!this.id) {
          alert("삭제 실패했습니다.");
          return;
        }

        // 사용자 확인창
        const confirmed = confirm("정말 삭제하시겠습니까?");
        if (!confirmed) {
          // 취소 누르면 아무것도 하지 않음
          return;
        }

        try {
          await axios.delete(`http://localhost:3000/board/${this.id}`);
          alert("정상적으로 삭제되었습니다.");
          this.$router.push({ path: "/list" });
        } catch (err) {
          console.error(err);
          alert("삭제 중 오류가 발생했습니다.");
        }
      }
     
    }
  }
</script>
