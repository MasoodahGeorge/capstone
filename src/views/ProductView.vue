<template>
    <div class="product-view">
      <h2>{{ product.name }}</h2>
      <img :src="product.image_url" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p><strong>Price:</strong> R{{ product.price }}</p>
      <!-- Add other product details here -->
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['products']),
      product() {
        const productId = this.$route.params.id;
        return this.products.find(p => p.id === parseInt(productId));
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  