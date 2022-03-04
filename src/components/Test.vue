<template>
    <section>
        <h1 class="title">{{ testData ? testData : 'Test API Data' }}</h1>
        <b-button native-type="button" @click="testApiCall">Test Api Call</b-button>
    </section>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import authService from '@/service/auth'

const testData = ref('')
const testApiCall = async () => {
    try {
        const result = await authService.testService()
        testData.value = result.data
    } catch (error) {
        console.error(error)
    }
}

</script>

<style>
</style>
