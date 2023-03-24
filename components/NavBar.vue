<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Laragigs</a>
            <div v-if="user" class="dropstart">
                <button class="btn btn-secondary avatar" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><a class="dropdown-item" :href="'/user/' + user.uuid">Profile</a></li>
                    <li>
                        <button class="dropdown-item" type="button" @click="$logout">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const user = readonly(useUser());

const { $logout } = useNuxtApp();

</script>

<style scoped>
.avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
</style>