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
      <tr v-for="comment in comments" :key="comment.id">
        <td>{{ comment.id }}</td>
        <td>{{ comment.writer }}</td>
        <td>{{ comment.content }}</td>
        <td>
          <button
            class="btn btn-xs btn-danger"
            @click="commentDelete(comment.id)"
          >
            삭제
          </button>
        </td>
        <td>{{ formatDate(comment.create_date) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';

// props
const props = defineProps({
  bid: {
    type: [Number],
    required: true
  }
});

// state
const comments = ref([]);

// methods
const commentList = async () => {
  try {
    const res = await axios.get(`/api/comment/${props.bid}`);
    comments.value = res.data;
  } catch (err) {
    console.error('Error fetching comments:', err);
  }
};

const commentDelete = async (id) => {
  const confirmed = confirm('정말 이 댓글을 삭제하시겠습니까?');
  if (!confirmed) return;

  try {
    await axios.delete(`/api/comment/${id}`);
    alert('댓글이 삭제되었습니다.');
    commentList(); // 삭제 후 목록 갱신
  } catch (err) {
    console.error(err);
    alert('댓글 삭제 중 오류가 발생했습니다.');
  }
};

const formatDate = (isoStr) => {
  const date = new Date(isoStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

// lifecycle
onMounted(() => {
  commentList();
});
</script>
