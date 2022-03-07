import { defineStore } from 'pinia'
import { ref, computed } from '@vue/composition-api'
import taskService from '@/service/task'

export const useTaskStore = defineStore('task', () => {
    /** State */
    let tasks = ref([])

    /** Actions */
    const getTasksAction = () => {
        return taskService.fetchTasksService()
    }
    const addTaskAction = (data) => {
        return taskService.addTaskService(data)
    }
    const updateTaskAction = (id, data) => {
        return taskService.updateTaskService(id, data)
    }
    const deleteTaskAction = (id) => {
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
