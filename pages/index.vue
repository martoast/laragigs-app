<template>
    <div>
        <pre>
            {{data}}
        </pre>
    </div>
</template>

<script setup lang="ts">


const { data } = await useFetch(() => "http://api.laragigs.test/users")

</script>