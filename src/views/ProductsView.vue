<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      <SpinnerComp /> <!-- Your loading spinner component -->
    </div>
    <div v-else class="products">
      <h2 class="text-center mb-5">Our Products</h2> <!-- Products heading -->
      <div class="row justify-content-center">
        <div v-for="product in products" :key="product.id" class="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
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
  computed: {
    ...mapState(['products']),
    loading() {
      return this.products === null;
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart']) // Add addToCart action
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.products {
  padding-top: 10rem;
  background-color: pink; /* Changed background color to pink */
}

/* Ensures images are properly scaled and have a uniform height */
.product-image {
  /* width: 80%; */
  margin: 0 auto;
  object-fit:contain;
  height: 50%; /* Adjusted height for the image */
}

/* Set a fixed height for the card */
.product-card {
  height: 10vh; /* Adjusted height for the card */
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
