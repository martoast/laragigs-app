<template>
    <div class="container my-4">
        <div class="d-flex justify-content-between align-items-center my-4">
            <div></div>
            <a href="/listings/create" class="btn btn-primary">
                Post job
            </a>
        </div>
       <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div class="col" v-for="listing in listings" :key="listing.id">
            <a :href="'/listings/' + listing.id" class="card-link">
                <div class="card h-100 border-0">
                    <img :src="listing.image" class="card-img-top" alt="listing image" v-if="listing.image">
                    <div class="card-body text-center">
                        <a :href="'/listings/' + listing.id" style="text-decoration: none; color: black;"><h5 class="card-title">{{listing.title}}</h5></a>
                        <span v-for="tag in listing.tags" :key="tag" class="badge text-white px-3 m-2" style="background-color:#f8b500">{{tag}}</span>
                    </div>
                </div>
            </a>
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
a {
  text-decoration: none;
  color: inherit;
}

.card {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
  .card-title {
    font-size: 24px;
  }
  .card-subtitle {
    font-size: 14px;
  }
</style>