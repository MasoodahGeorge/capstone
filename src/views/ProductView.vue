<template>
  <div class="product-view">
    <div class="container">
      <!-- Breadcrumb for navigation -->
      <div v-if="product" class="breadcrumb mb-4">
        <router-link to="/" class="breadcrumb-link">Home</router-link> / {{ product.name }}
      </div>
  
      <!-- Product Details Section -->
      <div class="row justify-content-between" v-if="product">
        <!-- Product Image on the Left -->
        <div class="col-md-6">
          <img :src="product.image_url" alt="Product Image" class="img-fluid rounded" />
        </div>
  
        <!-- Product Details on the Right -->
        <div class="col-md-5">
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="price"><strong>Price:</strong> R{{ product.price }}</p>
          <p class="description">{{ product.description || 'No description available for this product.' }}</p>
  
          <!-- Back and Purchase Buttons -->
          <div class="button-wrapper mt-4">
            <router-link to="/products">
              <button class="btn btn-outline-dark me-2" id="backbtn">
                Back to Products
              </button>
            </router-link>
            <button @click="purchaseProduct" class="btn btn-outline-dark me-2" id="purchasebtn">
              Purchase
            </button>
          </div>
        </div>
      </div>
  
      <!-- Spinner if product is not found -->
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
    
  </template>
  
  <script>
  import Spinner from "@/components/SpinnerComp.vue";
  import { mapState, mapActions } from "vuex";
  
  export default {
    components: { Spinner },
    computed: {
      ...mapState(["products"]),
      product() {
        const productId = this.$route.params.id;
        return this.products.find((p) => p.id === parseInt(productId));
      }
    },
    methods: {
      ...mapActions(["addToCart"]),
      purchaseProduct() {
        if (this.product) {
          this.addToCart(this.product); // Adds product to cart
          alert(`${this.product.name} added to cart!`); // Simple confirmation
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 60px;
    padding: 20px;
  }
  .product-view{
  /* background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/backgrnd.jpg?raw=true"); */
   background-color: #DDACB4;
    background-size: cover;
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-blend-mode: darken;
    background-position: center;
    padding-top: 5rem;
    margin-bottom: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .breadcrumb {
    font-size: 0.9rem;
    color: #666;
  }
  
  .breadcrumb-link {
    text-decoration: none;
    color: #333;
  }
  
  .product-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .img-fluid {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .description {
    margin-top: 15px;
    font-size: 1rem;
    color: #555;
  }
  
  .button-wrapper {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }
  
  .button-wrapper button {
    max-width: 200px;
  }
  
  @media (max-width: 768px) {
    .row.justify-content-between {
      flex-direction: column;
      align-items: center;
    }
  
    .button-wrapper {
      justify-content: center;
    }
  }
  </style>
  