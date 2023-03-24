<template>
    <div class="container my-4">
        <h3 class="pb-4">Listings:</h3>
       <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div class="col" v-for="listing in listings" :key="listing.id">
            <div class="card h-100">
            <div class="card-body">
                <a :href="'/listings/' + listing.id" style="text-decoration: none;"><h5 class="card-title">{{listing.title}}</h5></a>
                <p class="card-text">Salary: {{listing.salary}}</p>
                <p class="card-text">{{listing.description}}</p>
            </div>
        </div>
        </div>
       </div>
    </div>
</template>

<script setup>

const listings = await $fetch("/listings")

</script>