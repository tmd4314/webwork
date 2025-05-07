<template>
<div class="container">
    <form @submit.prevent>

        <label for="writer">작성자</label>
        <input type="text" id="writer" v-model="comment.writer" />

        <label for="content">댓글내용</label>
        <input type="text" id="content" v-model="comment.content" />

        <label for="bid">게시글 번호</label>
        <input type="text" id="bid" :value="bid" readonly />

        <button
        type="button"
        class="btn btn-xs btn-info"
        @click="insertComment()"
        >
        등록
        </button>
    </form>
</div>
</template>
<script setup>
  import axios from 'axios';
  import { ref,defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps({
    bid: {
      type: [Number ],
      required: true
    }
  });

  const comment = ref({
    writer: '' ,
    content: ''
  });

  const insertComment = async() => {
    try {
      const payload = {
        ...comment.value,
        bid: props.bid
      };
      await axios.post(`/api/comment`, payload);
      alert("정상적으로 등록되었습니다.");
      router.push({ path: "/list" });
    } catch (err) {
      console.error(err);
      alert("댓글 등록 중 오류 발생");
    }
  };
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
