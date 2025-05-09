<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no"  v-model="board.no" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.title"/>

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="board.writer"/>

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height: 200px"
        v-model="board.content"
      ></textarea>

      <div>
        <label for="regdate">작성일자</label>
        <input type="text" :value="dateFormat" readonly />
      </div>
      

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="insertOrUpdate()"
      >
        저장
      </button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios';
  export default{
    data() {
      return {
        board: {}
      }
    },
    created() {
      this.no = this.$route.query.no;
      if(this.no){
        this.fetchInfo();
      }
    },
    computed: {
      dateFormat(){
        const date = this.board.updated_dt ? new Date(this.board.updated_dt) : new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');  // 0~11 이므로 +1
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
      }
    },
    methods: {
     async fetchInfo() {
        let board = await axios.get(`/api/board/${this.no}`)
        this.board = board.data[0];
      },
      async insertOrUpdate() {
        if(!this.board.title || this.board.title.trim().length === 0){
          alert("제목을 입력하세요!!!!!!!!!");
          return;
        }
        if(this.no){
          await axios.put(`/api/board/${this.no}`, this.board)
          alert("정상적으로 수정되었습니다.");
          this.$router.push({path:"/list"});
        } else{
          await axios.post(`/api/board`, this.board)
          alert("정상적으로 등록되었습니다.");
          this.$router.push({path:"/list"});
        }
      }
    }
  }
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
