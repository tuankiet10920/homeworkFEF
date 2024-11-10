<template>
  <div class="alert" :class="statusClass">
    Trạng thái: {{ isOnline ? 'Online' : 'Offline' }}
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isOnline = ref(true)
const statusClass = ref('alert-success')
const updateStatus = () => {
  isOnline.value = navigator.onLine

  statusClass.value = isOnline.value ? 'alert-success' : 'alert-danger'
}
onMounted(() => {
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
  updateStatus()
})
onUnmounted(() => {
  window.removeEventListener('online', updateStatus)
  window.removeEventListener('offline', updateStatus)
})
</script>
