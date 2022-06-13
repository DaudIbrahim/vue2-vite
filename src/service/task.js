import axios from 'axios'

const baseURL = 'http://localhost:5000/tasks'

const authAxiosInstance = axios.create({
    baseURL,
    // headers: {
    //     Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzNDU2ODc5MCIsImlhdCI6MTY0NjM4NzEyNywiZXhwIjoxNjQ2NjQ2MzI3fQ.AJjJNzodSLQJ5oFoDn_tp8Yd2GXRhXB4S1MJiHDPjrs',
    // }
});

export default {
    setToken (token) {
        if (token) {
            authAxiosInstance.interceptors.request.use(config => {
                config.headers.common.Authorization = `${token}`;
                return config
            });
        }
    },

    fetchTasksService() {
        return authAxiosInstance({
            method: 'GET',
            url: '/'
        })
    },
    addTaskService(data) {
        return authAxiosInstance({
            method: 'POST',
            url: '/',
            data
        })
    },
    updateTaskService(id, data) {
        return authAxiosInstance({
            method: 'PUT',
            url: baseURL + `/${id}`,
            data
        })
    },
    deleteTaskService(id) {
        return authAxiosInstance({
            method: 'DELETE',
            url: baseURL + `/${id}`
        })
    }
}
