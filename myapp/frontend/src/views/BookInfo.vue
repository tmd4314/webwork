<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ book.id}}</td>
            <th scope="col" class="text-center table-primary">출간일</th>
            <td scope="col" class="text-center">
              {{ dateFormat }}
            </td>
            <th scope="col" class="text-center table-primary">저자</th>
            <td scope="col" class="text-center">{{ book.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="2">{{ book.book_title }}</td>
            <th  class="text-center table-primary">페이지</th>
            <td class="text-center" colspan="2">{{ book.page }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center table-primary">isbn</th>
            <td colspan="4">{{ book.isbn}}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">출판사</th>
            <td colspan="2">{{ book.publisher}}</td>
            <th class="text-center table-primary">가격</th>
            <td colspan="2" class="text-center">{{ book.price}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-center" valign="top" height="200">
              <img v-if="imageUrl" :src="imageUrl" alt="Book Image" style="max-width:800px; max-height:800px;" />
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info" @click="UpdateBook(book.id)">
                수정
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
