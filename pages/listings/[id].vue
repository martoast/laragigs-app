<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{listing.title}}</h5>
                        <p class="card-text">{{listing.description}}</p>
                        <h5 class="mb-0">Salary: {{listing.salary}}</h5>
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <a href='/listings/' class="btn-primary">Back</a>
                            <a class="btn-primary">Apply now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute();


const listing = await $fetch("/listings/" + route.params.id)

console.log(listing)

</script>