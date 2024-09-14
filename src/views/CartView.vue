<template>
  <div>
    <!-- Main Content -->
    <main class="main-content" id="cart-body">
      <div class="container">
        <h2 id="cart-heading">Your Cart</h2>

        <!-- Show spinner when loading -->
        <SpinnerComp v-if="isLoading" />

        <!-- Show cart content when not loading -->
        <div v-else class="table-responsive">
          <table class="table table-bordered" style="background-color: white;">
            <thead v-if="cartItems.length > 0">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="cart-items">
              <!-- Show cart items if there are any -->
              <template v-if="cartItems.length > 0">
                <tr v-for="item in cartItems" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ (item.price && typeof item.price === 'number') ? item.price.toFixed(2) : 'N/A' }}</td>
                  <td>{{ (item.price && typeof item.price === 'number' && item.quantity) ? (item.price * item.quantity).toFixed(2) : 'N/A' }}</td>
                  <td>
                    <button @click="removeFromCart(item.id)" class="btn btn-danger">
                      Remove
                    </button>
                  </td>
                </tr>
              </template>
              
              <!-- Show this message when there are no items in the cart -->
              <tr v-else>
                <td colspan="5" class="text-center">
                  No products in your cart.
                  <br>
                  <router-link to="/products" class="btn btn-primary mt-2">Add products to cart</router-link>
                </td>
              </tr>
            </tbody>
            <tfoot v-if="cartItems.length > 0">
              <tr>
                <td colspan="3" class="text-end">
                  <strong>Total Amount:</strong>
                </td>
                <td colspan="2" id="total-amount" class="text-center">
                  R {{ (totalAmount && typeof totalAmount === 'number') ? totalAmount.toFixed(2) : '00.00' }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Checkout button or empty cart message -->
        <div class="order-summary" v-if="cartItems.length > 0 && !isLoading">
          <button
            class="btn btn-primary checkout-btn"
            id="checkout-button"
            @click="checkout"
          >
            Checkout Products
          </button>
        </div>

        <!-- Thank you message after checkout -->
        <div v-if="checkoutCompleted && !isLoading" class="text-center mt-4">
          <h3>Thank you for your purchase!</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SpinnerComp from '@/components/SpinnerComp.vue'; // Import SpinnerComp

export default {
  name: 'CartView',
  components: {
    SpinnerComp,
  },
  data() {
    return {
      checkoutCompleted: false, // Track checkout status
      isLoading: true, // Track loading status
    };
  },
  computed: {
    ...mapState(['cart']),
    cartItems() {
      return this.cart;
    },
    totalAmount() {
      return this.cart.reduce((total, item) => {
        return total + (item.price && typeof item.price === 'number' ? item.price * item.quantity : 0);
      }, 0);
    }
  },
  mounted() {
    // Simulate data loading with a timeout
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // 2 seconds delay to show loading
  },
  methods: {
    ...mapActions(['removeFromCart']),
    checkout() {
      // Perform checkout logic (e.g., send cart items to the server)
      this.checkoutCompleted = true;

      // Clear cart items
      this.$store.commit('clearCart');
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #C79B31;
  border-color: #C79B31;
}
.btn:hover {
  background-color: #977c3d;
  border-color: #977c3d;
}
.main-content {
  background-color: #DDACB4;
  background-size: cover;
  background-blend-mode: darken;
  background-position: center;
  padding-top: 5rem;
  margin-bottom: 5rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
