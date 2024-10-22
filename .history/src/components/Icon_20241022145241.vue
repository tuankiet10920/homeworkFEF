<script setup>
const props = defineProps(['iconName'])
</script>
<template>
  <span class="material-symbols-outlined"> {{ props.iconName }} </span>
</template>
<style scoped></style>
