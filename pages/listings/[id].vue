<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <img :src="listing.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{listing.title}}</h5>
                        <p class="card-text">{{listing.description}}</p>
                        <ul class="list-group">
                            <li class="list-group-item">Salary: {{listing.salary}}</li>
                            <!-- <li class="list-group-item">Location: {{listing.location}}</li>
                            <li class="list-group-item">Job Type: {{listing.job_type}}</li>
                            <li class="list-group-item">Experience: {{listing.experience}}</li> -->
                        </ul>
                        <div class="d-flex justify-content-between mt-3">
                            <nuxt-link to="/listings" class="btn btn-primary">Back to Listings</nuxt-link>
                            <button class="btn btn-success">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();


const listing = await $fetch("/listings/" + route.params.id)

console.log(listing)

</script>