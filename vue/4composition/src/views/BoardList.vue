<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" :key="board.id" @click="infoHandler(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ formatDate(board.create_date) }}</td>
          <td>{{ countComment(board.id) }}</td>
        </tr>

        <tr>
          <td colspan="6" class="text-center">
            <button class="btn btn-xs btn-info" @click="boardInsert()">
              등록
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const boards = ref([]);
const comments = ref([]);
const router = useRouter();

const List = async () => {
  try {
    const result = await axios.get("/api/board");
    console.log(result.data);
    boards.value = result.data;
  } catch (error) {
    console.error("Error fetching boards:", error);
  }
};

const getAllComments = async () => {
  try {
    const res = await axios.get("/api/comment");
    comments.value = res.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const countComment = (bid) => {
  if (!Array.isArray(comments.value)) return 0;
  return comments.value.filter(comment => comment.bid === bid).length;
};

const infoHandler = (id) => {
  router.push({ path: "/info", query: { id } });
};

const boardInsert = () => {
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
  getAllComments();
});
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
