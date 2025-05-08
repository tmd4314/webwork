<script setup>
import { computed, ref, watch } from 'vue';

const author = ref({  
    name: 'John Doe',  
    books: [ 'Vue 2 - Advanced Guide',  
            'Vue 3 - Basic Guide',  
            'Vue 4 - The Mystery' ] 
}) 

const publishedBooksMessage = computed(() => {
  return author.value.books.length > 0 ? 'Yes' : 'No'
})

const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.');
const src = ref('');

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    answer.value = '생각 중...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      const data = await res.json();
      console.log('API 반환값:', data);
      answer.value = data.answer === 'yes' ? '네' : '아니오';
      src.value = data.image;
    } catch (error) {
      console.error('에러 발생:', error);
      answer.value = '에러! API에 연결할 수 없습니다.' + error;
    }
  }
});
</script>

<template>
 <input v-model="question">
  <div>{{ answer }}</div>
  <img :src="src"/>
  <hr>
  books: {{ author.books.length > 0? 'yes' : 'no' }}
  books: {{ publishedBooksMessage }}
</template>
