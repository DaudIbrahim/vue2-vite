<template>
    <div class="container mt-5">
        <h1 class="title">Create Task</h1>
        <form @submit.prevent="saveData">
            <b-field label="Name" label-for="name">
                <b-input type="text" id="name" required v-model.trim="data.name" maxlength="30" />
            </b-field>

            <b-field label="Description" label-for="description">
                <b-input type="text" id="description" required v-model.trim="data.description" maxlength="30" />
            </b-field>

            <b-field label="Status" label-for="status">
                <b-input type="text" id="status" required v-model.trim="data.status" maxlength="30" />
            </b-field>

            <b-field label="EstimatedTime" label-for="estimatedTime">
                <b-input type="text" id="estimatedTime" required v-model.trim="data.estimatedTime" maxlength="30" />
            </b-field>

            <b-button native-type="submit">Save</b-button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from '@vue/composition-api'
import { useRouter } from '@/hooks/vueRouter'
import { useTaskStore } from '@/stores/task'

const router = useRouter()
const taskStore = useTaskStore()
const data = reactive({
    name: '',
    description: '',
    status: '',
    estimatedTime: ''
})

const saveData = async () => {
    try {
        await taskStore.addTaskAction(data)
        router.push({ path: '/tasks' })
    } catch (error) {
        console.error(error)
    }
}


</script>

<style scoped>
</style>
