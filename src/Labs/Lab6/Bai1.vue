<template>
  <div class="alert" :class="statusClass">
    Trạng thái: {{ isOnline ? 'Online' : 'Offline' }}
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isOnline = ref(false)
const statusClass = ref('alert-danger')
const updateStatus = () => {
  // navigator is an object includes online property
  isOnline.value = navigator.onLine
  // update statusClass by isOnline value
  statusClass.value = isOnline.value ? 'alert-success' : 'alert-danger'
}
onMounted(() => {
  // use this to change isOnline value when the internet is low or no internet
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
  updateStatus()
})
onUnmounted(() => {
  window.removeEventListener('online', updateStatus)
  window.removeEventListener('offline', updateStatus)
})
</script>
