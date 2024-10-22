<script setup>
const props = defineProps(['btnName'])
</script>
<template>
  <button type="button">{{ props.btnName }}</button>
</template>
<style scoped></style>
