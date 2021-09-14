<template>
  <div>
    <label for="title">タイトル</label>
    <input 
      id="title" 
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
  export default {
    props: ["value"]
  };
</script>