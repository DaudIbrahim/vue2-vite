import axios from 'axios'

const authAxiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
});

export default {
    testService() {
        return authAxiosInstance({
            method: 'GET',
            url: '/'
        })
    },
    loginService(data) {
        return authAxiosInstance({
            method: 'POST',
            url: '/auth/login',
            data
        })
    }
}
