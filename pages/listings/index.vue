<template>
    <div class="container my-4">
        <h3 class="pb-3">Listings:</h3>
       <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div class="col" v-for="listing in listings" :key="listing.id">
            <div class="card h-100" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{listing.title}}</h5>
                <p class="card-text">{{listing.description}}</p>
                <a :href="'/listings/' + listing.id" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        </div>

       </div>
    </div>
</template>

<script setup>


const listings = await $fetch("/listings")

console.log(listings)


</script>