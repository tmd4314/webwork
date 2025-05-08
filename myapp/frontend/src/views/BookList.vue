<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>이미지</th>
          <th>도서명</th>
          <th>출간일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in paginatedBooks" :key="book.id" @click="infoHandler(book.id)">
          <td>{{ book.id }}</td>
          <td class="text-center" valign="top" height="200">
            <img v-if="book.img" :src="`/img/${book.img}`" alt="Book Image" style="max-width:150px; max-height:150px;" />
          </td>
          <td>{{ book.book_title }}</td>
          <td>{{ formatDate(book.create_date) }}</td>
        </tr>
        <tr>
          <td colspan="6" class="text-center">
            <button class="btn btn-xs btn-info" @click="bookInsert()">
              등록
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <button class="btn btn-xs btn-info" @click="prevPage" :disabled="currentPage === 1">이전</button>
      <span>페이지 {{ currentPage }} / {{ totalPages }}</span>
      <button class="btn btn-xs btn-info" @click="nextPage" :disabled="currentPage === totalPages">다음</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const books = ref([]);
const router = useRouter();
const currentPage = ref(1); // 현재 페이지 번호
const pageSize = 5; // 한 페이지에 보여줄 게시글의 개수

const List = async () => {
  const result = await axios.get("/api/book");
  books.value = result.data;
};

// 총 페이지 수
const totalPages = computed(() => {
  return Math.ceil(books.value.length / pageSize);
});

// 현재 페이지에 해당하는 게시글 목록을 반환하는 속성
const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return books.value.slice(start, end);
});

//이전 페이지
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

//다음 페이지
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const infoHandler = (id) => {
  router.push({ path: "/info", query: { id } });
};

const bookInsert = () => {
  router.push({ path: "/form" });
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}`;
};

onMounted(() => {
  List();
});
</script>

<style scoped>
table th, table td {
  text-align: center;
  vertical-align: middle;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.pagination-controls button {
  margin: 0 10px;
}
</style>
