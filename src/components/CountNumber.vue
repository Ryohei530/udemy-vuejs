<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
  import { tokyoNumber } from '@/tokyoNumber.js';
  
  export default {
    mixins: [tokyoNumber] 
  };
</script>