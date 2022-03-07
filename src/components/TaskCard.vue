<template>
    <div class="card">
        <div class="card-content">
            <p class="title">{{ task.name }}</p>
            <p class="subtitle">{{ task.description }} {{ task.estimatedTime}}</p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
                <span>
                    <b-button @click="$emit('delete', task.id)">Delete {{ task.id }} </b-button>
                </span>
            </p>
        </footer>
    </div>
</template>

<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['delete'])

</script>

<style scoped>
</style>