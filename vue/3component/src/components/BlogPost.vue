<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      좋아요 {{ likes }}
      <div v-if="isPublished">출판</div>
      <div v-else>편집중</div>
      <div v-for="commentId in commentIds">
        {{ commentId }}
      </div>
    </div>
</div>
</template>
<script>
  export default{
    // props : ['title' , 'likes', 'isPublished', 'commentIds']
    props :  {
      title :{type: String, default : "기본 타이틀"},
      likes : { type: Number, 
                validator: function(value){return value > 0}
              },
      isPublished : { type: Boolean, required : true},
      commentIds : Array
    }
  }
</script>