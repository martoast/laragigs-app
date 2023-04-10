<script setup lang="ts">
    const user = useUser().value
</script>

<template>
    <pre>{{ user }}</pre>
</template>