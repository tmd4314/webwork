<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input type="text" id="no" v-model="book.id" readonly />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="book.book_title" />

      <label for="writer">저자</label>
      <input type="text" id="writer" v-model="book.writer" />

      <label for="price">가격</label>
      <input type="text" id="price" v-model="book.price" />

      <label for="isbn">isbn</label>
      <input type="text" id="isbn" v-model="book.isbn" />

      <label for="publisher">출판사</label>
      <input type="text" id="publisher" v-model="book.publisher" />

      <label for="page">페이지</label>
      <input type="text" id="page" v-model="book.page" />

      <label for="img">이미지 업로드
        <!-- 수정 모드일 때 기존 이미지 표시 -->
        <div v-if="id && book.img">
          <img :src="`/img/${book.img}`" alt="Current Image" style="max-width: 200px; max-height: 200px;" />
          <button type="button" @click="removeImage">이미지 삭제</button>
        </div>
        <input type="file" @change="setFile" />
      </label>

      <div v-if="id > 0">
        <label for="regdate">출간일</label>
        <input type="text" :value="dateFormat" readonly />
      </div>

      <button type="button" class="btn btn-xs btn-info" @click="insertOrUpdate">
        저장
      </button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const book = ref({});
const file = ref(null);
const router = useRouter();
const route = useRoute();

const id = route.query.id;

const fetchInfo = async () => {
  let res = await axios.get(`/api/book/${id}`);
  book.value = res.data[0];
};

const dateFormat = computed(() => {
  const date = new Date(book.value.create_date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}`;
});

const setFile = (event) => {
  file.value = event.target.files[0];
};

const removeImage = () => {
  book.value.img = ''; // 기존 이미지명 제거
};

const insertOrUpdate = async () => {
  const formData = new FormData();

  // 파일 있으면 추가
  if (file.value) {
    formData.append('file', file.value);
  }

  // 나머지 book 정보 추가 (문자열로)
  Object.keys(book.value).forEach((key) => {
    formData.append(key, book.value[key]);
  });

  try {
    if (id) {
      await axios.put(`/api/book/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('정상적으로 수정되었습니다.');
    } else {
      await axios.post(`/api/book`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('정상적으로 등록되었습니다.');
    }
    router.push({ path: '/list' });
  } catch (error) {
    console.error(error);
    alert('오류가 발생했습니다.');
  }
};

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
