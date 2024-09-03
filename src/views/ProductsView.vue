<template>
    <div class="products-view">
      <h1>Products</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="products && products.length">
        <ul>
          <li v-for="product in products" :key="product.id">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        loading: false,
        error: null
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        this.loading = true;
        try {
          const response = await axios.get('https://capstoneproject-89nz.onrender.com/products');
          this.products = response.data;
        } catch (err) {
          this.error = 'Failed to load products. Please try again later.';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .products-view {
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  