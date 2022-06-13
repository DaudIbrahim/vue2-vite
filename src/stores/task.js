import { defineStore } from 'pinia'
import { ref, computed } from '@vue/composition-api'
import { useAuthStore } from '@/stores/auth'
import taskService from '@/service/task'

/**
 * Refactor to better acces token
 * task service and store
 */

export const useTaskStore = defineStore('task', () => {
     // Compose other stores
     const authStore = useAuthStore()

    /** State */
    let tasks = ref([])

    /** Actions */
    const getTasksAction = () => {
        if (authStore.isLoggedIn) {
            taskService.setToken(authStore.token)
        }
        return taskService.fetchTasksService()
    }
    const addTaskAction = (data) => {
        if (authStore.isLoggedIn) taskService.setToken(authStore.token)
        return taskService.addTaskService(data)
    }
    const updateTaskAction = (id, data) => {
        if (authStore.isLoggedIn) taskService.setToken(authStore.token)
        return taskService.updateTaskService(id, data)
    }
    const deleteTaskAction = (id) => {
        if (authStore.isLoggedIn) taskService.setToken(authStore.token)
        return taskService.deleteTaskService(id)
    }

    return {
        tasks,
        getTasksAction,
        addTaskAction,
        updateTaskAction,
        deleteTaskAction
    }
})
