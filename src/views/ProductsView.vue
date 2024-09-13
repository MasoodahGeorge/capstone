<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      <SpinnerComp /> <!-- Your loading spinner component -->
    </div>
    <div v-else>

      <h2 class="text-center mb-5">Our Products</h2> <!-- Products heading -->

      <!-- Filters -->
      <div class="row mb-4">
        <div class="col-md-4">
          <select v-model="selectedCategory" class="form-select" aria-label="Category filter">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <div class="col-md-4">
          <select v-model="selectedPrice" class="form-select" aria-label="Price filter">
            <option value="">Sort by Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        <div class="col-md-4">
          <input v-model="searchQuery" type="text" class="form-control" placeholder="Search products">
        </div>
      </div>

      <div class="row justify-content-center">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
          <div class="card shadow-sm product-card"> <!-- Adjusted card class -->
            <img :src="product.image_url" class="card-img-top product-image" alt="Product Image" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-center">{{ product.name }}</h5>
              <p class="card-text"><strong>Price:</strong> R{{ product.price }}</p>
              <div class="mt-auto text-center">
                <button @click="addToCart(product)" class="btn btn-secondary">Add to Cart</button>
                <router-link :to="'/products/' + product.id" class="btn btn-primary">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue'; // Your Spinner component

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      selectedCategory: '',
      selectedPrice: '',
      searchQuery: '',
      categories: [] // This will be populated dynamically
    };
  },
  computed: {
    ...mapState(['products']),
    loading() {
      return this.products === null;
    },
    filteredProducts() {
      let filtered = this.products;

      // Filter by category
      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }

      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      // Sort by price
      if (this.selectedPrice === 'lowToHigh') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (this.selectedPrice === 'highToLow') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart']),
    async fetchCategories() {
      // Assuming you have an endpoint to fetch categories
      const response = await fetch('https://your-api-endpoint.com/categories');
      const data = await response.json();
      this.categories = data;
    }
  },
  created() {
    this.fetchProducts();
    this.fetchCategories();
  }
};
</script>

<style scoped>
.container{
  padding-top: 10rem;
}
.products {
  padding-top: 2rem; /* Adjusted for better spacing */
  background-color: pink; /* Changed background color to pink */
}

/* Ensures images are properly scaled and have a uniform height */
.product-image {
  margin: 0 auto;
  object-fit: contain;
  height: 50%; /* Adjusted height for the image */
}

/* Set a fixed height for the card */
.product-card {
  height: 100%; /* Adjusted height for the card */
}

/* Adds a box-shadow to make the cards look elevated */
.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* Adjust the layout of the card's text and buttons */
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-weight: 600;
}

.text-muted {
  font-size: 0.9rem;
}

/* Adjusts the button styling */
.btn-primary {
  background-color: rgb(240, 168, 180);
  border-color: rgb(240, 168, 180);
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
}

.btn-primary:hover {
  background-color: #C79B31;
  border-color: #C79B31;
}

/* Adjusts the button styling for Add to Cart */
.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

/* Adjust card shadow and spacing for better structure */
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}
</style>
