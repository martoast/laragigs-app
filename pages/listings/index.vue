<template>
    <div class="container my-4">
        <div class="d-flex justify-content-between align-items-center my-4">
            <h3 class="pb-4">Job listings:</h3>
            <a href="/listings/create" class="btn btn-primary">
                Create listing
            </a>
        </div>
       <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div class="col" v-for="listing in listings" :key="listing.id">
            <div class="card h-100 border-0">
            <div class="card-body">
                <a :href="'/listings/' + listing.id" style="text-decoration: none; color: black;"><h5 class="card-title">{{listing.title}}</h5></a>
                <p class="card-text">{{listing.description}}</p>
                <h5 class="mb-0">Salary: {{listing.salary}}</h5>
                <div class="d-flex justify-content-end align-items-center mt-4">
                    <a :href="'/listings/' + listing.id" class="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
        </div>
       </div>
    </div>
</template>

<script setup>

const listings = await $fetch("/listings")

</script>

<style scoped>
.btn-primary {
background-color: #F5A623;
border-radius: 4px;
color: #FFFFFF;
font-weight: bold;
padding: 10px 25px;
border: none;
}

.card {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .card-title {
    font-size: 24px;
  }
  .card-subtitle {
    font-size: 14px;
  }
</style>