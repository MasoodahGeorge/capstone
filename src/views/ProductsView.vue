<template>
  <div class="products-view">
    <h1>Products</h1>
    
    <!-- Filters -->
    <div class="controls mb-4">
      <!-- Search -->
      <input type="text" v-model="searchQuery" placeholder="Search products..." class="form-control me-2" />

      <!-- Category -->
      <select v-model="selectedCategory" class="form-select me-2">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>

      <!-- Sort -->
      <select v-model="sortOrder" class="form-select">
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>

    <!-- Products -->
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredAndSortedProducts.length">
      <ul>
        <li v-for="product in filteredAndSortedProducts" :key="product.id">
          <h2>{{ product.name }}</h2>
          <img :src="product.image" loading="lazy" class="img-fluid" :alt="product.name" />
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
      categories: [],
      searchQuery: "",
      sortOrder: "asc",
      selectedCategory: "",
      loading: false,
      error: null,
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let filtered = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedCategory === "" || product.categoryId === this.selectedCategory)
      );

      return filtered.sort((a, b) =>
        this.sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://capstoneproject-89nz.onrender.com/products');
        this.products = response.data;
      } catch (err) {
        this.error = 'Failed to load products. Please try again later :(';
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get('https://capstoneproject-89nz.onrender.com/categories');
        this.categories = response.data;
      } catch (err) {
        console.error("Error fetching categories:", err);
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

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.form-control,
.form-select {
  flex: 1;
  max-width: 200px;
  margin-right: 10px;
}

.img-fluid {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}
</style>
