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
                  <td>{{ item.product }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.price.toFixed(2) }}</td>
                  <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
                  <td>
                    <button @click="removeItem(item.id)" class="btn btn-danger">
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
                    R {{ totalAmount.toFixed(2) }}
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
  export default {
    name: 'CartView',
    data() {
      return {
        cartItems: [], // Array of cart items, should be fetched from a store or API
        totalAmount: 0, // Total amount, will be computed from cart items
      };
    },
    methods: {
      removeItem(itemId) {
        // Find the index of the item to remove
        const index = this.cartItems.findIndex(item => item.id === itemId);
  
        if (index !== -1) {
          // Remove the item from the cart
          this.cartItems.splice(index, 1);
          this.calculateTotalAmount(); // Recalculate the total amount
        }
      },
      checkout() {
        // Logic for checkout process (e.g., send cart items to the server)
        alert('Thank you for your purchase!');
        
        // Clear cart items
        this.cartItems = [];
        this.calculateTotalAmount(); // Recalculate the total amount
      },
      calculateTotalAmount() {
        // Calculate total amount from cart items
        this.totalAmount = this.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      },
    },
    mounted() {
      // Simulate fetching cart items from a store or API
      // Replace this with actual API call
      this.cartItems = [
        { id: 1, product: 'Tea Set', quantity: 2, price: 150 },
        { id: 2, product: 'Vintage Plate', quantity: 1, price: 250 },
      ];
  
      this.calculateTotalAmount(); // Calculate initial total amount
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  </style>
  