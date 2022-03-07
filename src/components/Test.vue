<template>
    <section>
        <h1 class="title">{{ testData ? testData : 'Test API Data' }}</h1>
        <b-button native-type="button" @click="testApiCall">Test Api Call</b-button>
        <b-button native-type="button" @click="get">GET</b-button>
        <b-button native-type="button" @click="post">POST</b-button>
        <b-button native-type="button" @click="put">PUT</b-button>
        <b-button native-type="button" @click="deleteTask">Delete</b-button>
    </section>
</template>

<script setup>
import { ref } from '@vue/composition-api'
import authService from '@/service/auth'
import taskService from '@/service/task'

const testData = ref('')
const testApiCall = async () => {
    try {
        const result = await authService.testService()
        testData.value = result.data
    } catch (error) {
        console.error(error)
    }
}

const get = async () => {
    try {
        const result = await taskService.fetchTasksService()
        testData.value = result.data.data.tasks[result.data.data.tasks.length - 1]
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

const post = async () => {
    try {
        const temp = {
            name: "Hello One O One test",
            description: "Add a new TEST field",
            status: "Todo",
            estimatedTime: "1h"
        }
        const result = await taskService.addTaskService(temp)
        testData.value = result.data
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

const put = async () => {
    try {
        const temp = {
            name: "Random STring",
            description: "Add a Random Fields",
            status: "Todo-s-s-s-s",
            estimatedTime: "6h"
        }
        const result = await taskService.updateTaskService(761747321647818, temp)
        testData.value = result.data
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

const deleteTask = async () => {
    try {
        const result = await taskService.deleteTaskService(761747321647818)
        testData.value = result.data
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}


</script>

<style>
</style>
