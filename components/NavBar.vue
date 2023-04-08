<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Laragigs</a>
        <button class="navbar-toggler" type="button"  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
            <li v-if="user" class="nav-item dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" :href="'/users/' + user.uuid">Profile</a>
                <button class="dropdown-item" type="button" @click="$logout">Logout</button>
            </div>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
    const user = useUser();
    const { $logout } = useNuxtApp();
  </script>
  
  <style scoped>
    .navbar {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  
    .navbar-brand {
      font-weight: bold;
      font-size: 1.5rem;
    }
  
    .nav-link {
      font-weight: bold;
      font-size: 1.2rem;
    }
  
    .nav-link:hover {
      color: #f8b500;
    }
  
    .dropdown-toggle {
      color: #333;
    }
  
    .dropdown-menu {
      border: none;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    }
  
    .dropdown-item {
      font-weight: bold;
      font-size: 1.2rem;
      color: #333;
    }
  
    .dropdown-item:hover {
      background-color: #f8b500;
      color: #fff;
    }
  </style>
  