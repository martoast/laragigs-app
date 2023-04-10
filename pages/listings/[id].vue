<template>
    <div class="container mt-5">
        <div class="pb-4">
            <a href="/listings">
            <button class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.354 4.354a.5.5 0 0 1 0 .708L6.707 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/>
                </svg>
                Back to listings
            </button>
        </a>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <img :src="listing.image" class="card-img-top" alt="listing image" v-if="listing.image" style="height: 10%;">
                    <div class="card-body">
                        <h5 class="card-title">{{listing.title}}</h5>
                        <p class="card-text">{{listing.description}}</p>
                        <p class="mb-4">Salary: {{listing.salary}}</p>
                        <p class="mb-0">Contact email: {{listing.email}}</p>
                        <div class="d-flex justify-content-between align-items-center mt-4">
                            <div></div>
                            <button class="btn btn-primary" onclick="location.href='mailto:support@example.com?subject=Laravel Position Request&body=Hello, I am interested in your Larevel Job Listing. Please contact me at your earliest convenience.'">
                                Get in contact
                            </button>
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

<style scoped>
.btn-primary {
background-color: #F5A623;
border-radius: 4px;
color: #FFFFFF;
font-weight: bold;
padding: 10px 25px;
border: none;
}
.btn-primary svg {
  width: 1em;
  height: 1em;
  margin-right: 0.25em;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>