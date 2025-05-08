<template>
  <div>
    useComponentrefs 이용
    <input ref="my-input" value="hello"/>
    <hr/>
    현재페이지는 {{ route.fullPath }}<br>
    <a href="#" @click="router.push('/')">home</a>
    <a href="#" @click="goproduct">상품조회</a>
  </div>
  <hr/>
  {{ count.value }}
  <button @click="clickHandler">1 추가</button>
  <ButtonCounter :counter="count.value" @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>

<script setup>
  import ButtonCounter from '../components/ButtonCounter.vue';
  import { useTemplateRef ,onMounted, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const count = reactive({value: 0});
  const input = useTemplateRef('my-input')

  const clickHandler = (initValue) => {
    // number 0 -> false
    if(initValue > 0){
      count.value = initValue
    } else{
      count.value ++
    }
  }

  const goproduct = () => {
    router.push('/');
    router.push({name: "home"});
  }

  onMounted(()=>{
    console.log('count=', count.value);
    console.log('input=', input.value.value);
    input.value.select()
  });
</script>
