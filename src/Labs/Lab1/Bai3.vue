<script setup>
import { ref } from "vue"

// declare reactive

const arrayGreeting = ref([
    "Xin chào bạn",
    "Hello World!"
])
const arrayTittle = ref([
    "Nhấn để thay đổi lời chào",
    "Lời chào mới đã được cập nhật"
])

const greeting = ref(arrayGreeting.value[0])
const buttonTitle = ref(arrayTittle.value[0])
const componentKey = ref(0)
// declare function change greeting
const changeGreeting = () => {
    if(componentKey.value === 0){
        greeting.value = arrayGreeting.value[1]
        buttonTitle.value = arrayTittle.value[1]
        componentKey.value = 1
    }else{
        greeting.value = arrayGreeting.value[0]
        buttonTitle.value = arrayTittle.value[0]
        componentKey.value = 0
    }
}
</script>
<template>
    <div>
        <h1>{{ greeting }}</h1>
        <!-- create button change content -->
        <button type="button" @click="changeGreeting">{{ buttonTitle }}</button>
    </div>
    <!-- display greeting -->
    
</template>
<style scoped>
h1{
    color: red;
}
</style>