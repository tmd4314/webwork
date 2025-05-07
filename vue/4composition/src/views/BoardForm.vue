<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no"  v-model="board.id" readonly />

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

      <div v-if="id > 0">
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
<script setup>
  import axios from 'axios';
  import { ref, computed, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const board =  ref({});
  const router = useRouter();
  const route = useRoute();

  const id = route.query.id;

  const fetchInfo = async() => {
    let res = await axios.get(`/api/board/${id}`)
    board.value = res.data[0];
  };

  const dateFormat= computed(() => {
    const date = new Date(board.value.create_date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // 0~11 이므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');  // 로컬 기준으로 가져옴
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
  });

     
  const insertOrUpdate = async () => {
    if(id){
      let res = await axios.put(`/api/board/${id}`, board.value)
      alert("정상적으로 수정되었습니다.");
      router.push({path:"/list"});
    } else{
      let res = await axios.post(`/api/board`, board.value)
      alert("정상적으로 등록되었습니다.");
      router.push({path:"/list"});
    }
  }

  onMounted(() => {
    if (id) {
      fetchInfo();
    }
  });
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
