<template>
  <!-- <page-title title="마이페이지" subtitle="주문내역"/> -->
  <page-title :title="title"/>
  <!-- 정적 바인딩 -->
  <blog-post 
             :likes="50"
             :is-published="false"
             :comment-ids="[100, 103, 200]"
  />
  <!-- 동적 바인딩 -->
  <blog-post :title="post.title"
             :likes="post.likes"
             :is-published="post.isPublished"
             :comment-ids="post.commentIds"
  />
  <!-- post 객체 한번에 넘기기 -->
  <blog-post v-bind="post"/>
  <hr>
  <blog-post v-for="post in posts" v-bind="post"/>
</template>
<script>
  import PageTitle from '../components/PageTitle.vue';
  import BlogPost from '../components/BlogPost.vue';
  export default{
    components : {PageTitle, BlogPost},  // 컴포넌트 등록
    data() {
      return {
        title: '동적페이지이름',
        posts :[ {isPublished: true, title:"블로그1"}, 
                 {isPublished: false, title:"블로그2"},
                 {isPublished: false, title:"블로그3"},
        ],
        post: {
          commentIds:[100, 103, 200], 
          isPublished: true,
          likes :100,
          title:"vue 블로그"
        }
      }
    }
  }
</script>