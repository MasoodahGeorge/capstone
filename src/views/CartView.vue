<template>
  <div>
    <!-- Main Content -->
    <main class="main-content" id="cart-body">
      <div class="container">
        <h2 id="cart-heading">Your Cart</h2>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="cart-items">
              <!-- Cart items will be dynamically inserted here -->
              <tr v-for="item in cartItems" :key="item.id">
                <td>{{ item.name }}</td> <!-- Assuming product name is stored in `name` -->
                <td>{{ item.quantity }}</td>
                <td>{{ (item.price && typeof item.price === 'number') ? item.price.toFixed(2) : 'N/A' }}</td>
                <td>{{ (item.price && typeof item.price === 'number' && item.quantity) ? (item.price * item.quantity).toFixed(2) : 'N/A' }}</td>
                <td>
                  <button @click="removeFromCart(item.id)" class="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">
                  <strong>Total Amount:</strong>
                </td>
                <td colspan="2" id="total-amount" class="text-center">
                  R {{ (totalAmount && typeof totalAmount === 'number') ? totalAmount.toFixed(2) : 'N/A' }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div class="order-summary">
          <button
            class="btn btn-primary checkout-btn"
            id="checkout-button"
            @click="checkout"
          >
            Thank You for your purchase!
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CartView',
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
  methods: {
    ...mapActions(['removeFromCart']),
    checkout() {
      // Logic for checkout process (e.g., send cart items to the server)
      alert('Thank you for your purchase!');

      // Clear cart items
      this.$store.commit('clearCart');
    }
  }
};
</script>

<style scoped>
/* Add custom styles here */
</style>
