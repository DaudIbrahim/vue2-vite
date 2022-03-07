<template>
    <section class="mt-5">
        <router-link to="/create-task">Create New Tasks</router-link>
        <div v-for="task in taskStore.tasks" :key="task.id">
            <task-card :task="task" @delete="deleteTask" />
        </div>
    </section>
</template>

<script setup>
import { useTaskStore } from '@/stores/task'
import TaskCard from '@/components/TaskCard.vue';
const taskStore = useTaskStore()

const getTasks = async () => {
    try {
        const result = await taskStore.getTasksAction()
        taskStore.tasks = result.data.data.tasks
    } catch (error) {
        console.error(error)
    }
}

const deleteTask = async (id) => {
    try {
        const result = await taskStore.deleteTaskAction(id)
        getTasks()
    } catch (error) {
        console.error(error)
    }
}

getTasks()
</script>

<style scoped>
</style>
