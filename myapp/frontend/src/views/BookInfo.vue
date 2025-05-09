<template>
  <div class="container mt-3">
    <div class="row">
      <!-- 이미지와 소개를 나란히 배치 -->
      <div class="col-md-6">
        <img v-if="imageUrl" :src="imageUrl" alt="Book Image" style="max-width:100%; height:100%;" />
      </div>
      <div class="col-md-6">
        <h4>책 소개</h4>
        <hr>
        <pre
          style="white-space: pre-wrap;
            border: none;
            background-color: white; ">{{ book.content }}</pre>
      </div>
    </div>

    <div class="row mt-3">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="text-center table-primary">번호</th>
            <td class="text-center">{{ book.id }}</td>
            <th class="text-center table-primary">출간일</th>
            <td class="text-center">{{ dateFormat }}</td>
            <th class="text-center table-primary">저자</th>
            <td class="text-center">{{ book.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="2">{{ book.book_title }}</td>
            <th class="text-center table-primary">페이지</th>
            <td class="text-center">{{ book.page }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center table-primary">ISBN</th>
            <td colspan="4">{{ book.isbn }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">출판사</th>
            <td colspan="2">{{ book.publisher }}</td>
            <th class="text-center table-primary">가격</th>
            <td class="text-center">{{ book.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-center">
      <button class="btn btn-info btn-sm" @click="UpdateBook(book.id)">수정</button>
      <button class="btn btn-warning btn-sm" @click="goToList()">목록</button>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';

  const book =  ref({});
  const router = useRouter();
  const route = useRoute();


  const id = route.query.id;

  const fetchInfo = async() => {
    const res = await axios.get(`/api/book/${id}`)
    book.value = res.data[0];
  };

  const imageUrl = computed(() => {
    if(!book.value.img) return '';
    return `/img/${book.value.img}`;
  })

  const dateFormat = computed(() => {
    const date = new Date(book.value.create_date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // 0~11 이므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');  // 로컬 기준으로 가져옴
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
  });

  const UpdateBook = (id) => {
    router.push({path: "/form", query: {id: id}});
  };

  const goToList = () => {
    router.push({path:"/list"});
  };  

onMounted(() => {
  fetchInfo();
});
</script>
