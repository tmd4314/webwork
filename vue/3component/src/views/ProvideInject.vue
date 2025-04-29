<template>
  <div>
    provide
    <ProvideInjectChild/>
  </div>
</template>
<script>
import ProvideInjectChild from '@/components/ProvideInjectChild.vue';
  export default {
    components:{ProvideInjectChild},
    data() {
      return{ 
       items: ['A', 'B']
      };
    },
    provide() {
      return {
        itemLength : this.items.length
      }
    }
  }
</script>