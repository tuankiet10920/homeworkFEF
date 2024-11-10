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
  window.addEventListener('online', updateStatus)
  window.addEventListener('offline', updateStatus)
  updateStatus()
})
onUnmounted(() => {
  window.removeEventListener('online', updateStatus)
  window.removeEventListener('offline', updateStatus)
  console.log('unmounted hook')
})
</script>
