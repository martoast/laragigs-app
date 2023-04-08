<template>
  <div class="container register-container">
    <div class="row justify-content-center align-items-center" style="height: calc(100vh - 66px);">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center mb-5">Create Listing</h1>
            <form @submit.prevent="onSubmit">
              <div class="form-group mb-4">
                <label for="title" class="form-label">Title</label>
                <input v-model="data.form.title" type="text" class="form-control" id="title" placeholder="Enter the listing title">
              </div>
              <div class="form-group mb-4">
                <label for="description" class="form-label">Description</label>
                <textarea v-model="data.form.description" class="form-control" id="description" placeholder="Enter the listing description"></textarea>
              </div>
              <div class="form-group mb-4">
                <label for="salary" class="form-label">Salary</label>
                <input v-model="data.form.salary" type="text" class="form-control" id="salary" placeholder="Enter the listing salary">
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary" :disabled="data.loading">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const hasError = (field) => {
    return !!data.errors[field]
}
const data = reactive({
    loading: false,
    errors: {},
    form: {
        title: null,
        description: null,
        salary: null
    }
});

const onSubmit = async () => {
    data.loading = true
    try {
        let response = await $fetch('/listings', {
            method: 'post',
            body: data.form
        })
        console.log(response)
        await navigateTo('/listings/' + response.listing.id)
        // Handle success
    } catch (error) {
        data.errors = error.response._data.errors
        data.loading = false
    }
}
</script>
<style scoped>
  .register-container .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  }
  .register-container .card-title {
    font-weight: bold;
    font-size: 2.5rem;
    color: #333;
  }
  .register-container .form-label {
    font-weight: bold;
    color: #333;
  }
  .register-container .form-control {
    border: 2px solid #f3f3f3;
    border-radius: 8px;
    padding: 1.25rem;
    font-size: 1.125rem;
    color: #333;
  }
  .register-container .form-control:focus {
    border-color: #f8b500;
    box-shadow: none;
  }
  .register-container button {
    border-radius: 8px;
    font-size: 1.25rem;
    padding: 1.25rem;
    background-color: #f8b500;
    border-color: #f8b500;
  }
  .register-container button:hover {
    background-color: #fa7f00;
    border-color: #fa7f00;
  }
  .register-container a {
    color: #333;
  }
</style>