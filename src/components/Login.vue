<template>
    <div class="container mt-5">
        <h1 class="title">Login</h1>
        <form @submit.prevent="loginForm">
            <b-field :type="validateObject.email.type" label-for="email">
                <template #label>Email Address</template>
                <b-input type="email" id="email" required v-model.trim="email" maxlength="30"></b-input>
                <template #message>{{ validateObject.email.message }}</template>
            </b-field>

            <b-field :type="validateObject.password.type" label-for="password">
                <template #label>Password</template>
                <b-input type="password" id="password" required v-model.trim="password"></b-input>
                <template #message>{{ validateObject.password.message }}</template>
            </b-field>

            <b-button native-type="submit">Login</b-button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from '@vue/composition-api'

const email = ref('')
const password = ref('')
const validateObject = reactive({
    email: {
        is_valid: false,
        type: "",
        message: ""
    },
    password: {
        is_valid: false,
        type: "",
        message: ""
    }
})

watch(email, () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        validateObject.email.is_valid = true
        validateObject.email.type = 'is-success'
        validateObject.email.message = ''
    } else {
        validateObject.email.is_valid = false
        validateObject.email.type = 'is-danger'
        validateObject.email.message = 'Invalid Email Address'
    }
})

watch(password, () => {
    if (password.value.length >= 6) {
        validateObject.password.is_valid = true
        validateObject.password.type = 'is-success'
        validateObject.password.message = ''
    } else {
        validateObject.password.is_valid = false
        validateObject.password.type = 'is-danger'
        validateObject.password.message = 'Password must be at least six characters'
    }
})

const loginForm = () => {
    console.log('Email', email.value)
    console.log('Password', password.value)
    alert('Form Submit')
}

</script>

<style scoped>
</style>
