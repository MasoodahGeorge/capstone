<template>
    <main class="container-fluid">
      <div class="row">
        <h2 class="display-2">Admin</h2>
      </div>
      <!-- Add button on admin page -->
      <div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          <i class="bi bi-plus-circle-fill"></i> Add Item
        </button>
      </div>
  
      <!-- Add Product Modal -->
      <div
        class="modal fade"
        id="addProductModal"
        tabindex="-1"
        aria-labelledby="addProductModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addProductModalLabel">
                Add New Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to add new product -->
              <form @submit.prevent="handleAddProduct">
                <div class="mb-3">
                  <label for="productName" class="form-label">Product Name</label>
                  <input
                    v-model="payload.prodName"
                    type="text"
                    class="form-control"
                    id="productName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editDescription" class="form-label">Description</label>
                  <input
                    v-model="payload.prodDescription"
                    type="text"
                    class="form-control"
                    id="editDescription"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="Category" class="form-label">Category</label>
                  <textarea
                    v-model="payload.Category"
                    class="form-control"
                    id="Category"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="amount" class="form-label">Amount</label>
                  <input
                    v-model="payload.amount"
                    type="number"
                    class="form-control"
                    id="amount"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="img_url" class="form-label">Image URL</label>
                  <input
                    v-model="payload.prodUrl"
                    type="text"
                    class="form-control"
                    id="img_url"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Edit Product Modal -->
      <div
        class="modal fade"
        id="editProductModal"
        tabindex="-1"
        aria-labelledby="editProductModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to edit product -->
              <form @submit.prevent="handleEditProduct">
                <div class="mb-3">
                  <label for="editProductName" class="form-label">Product Name</label>
                  <input
                    v-model="currentProduct.prodName"
                    type="text"
                    class="form-control"
                    id="editProductName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editDescription" class="form-label">Description</label>
                  <input
                    v-model="currentProduct.prodDescription"
                    type="text"
                    class="form-control"
                    id="editDescription"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editCategory" class="form-label">Category</label>
                  <textarea
                    v-model="currentProduct.Category"
                    class="form-control"
                    id="editCategory"
                    required
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="editAmount" class="form-label">Amount</label>
                  <input
                    v-model="currentProduct.amount"
                    type="number"
                    class="form-control"
                    id="editAmount"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editImgUrl" class="form-label">Image URL</label>
                  <input
                    v-model="currentProduct.prodUrl"
                    type="text"
                    class="form-control"
                    id="editImgUrl"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Products Table -->
      <div class="table-responsive" v-if="products && products.length">
        <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
  <tr v-for="(product, index) in products" :key="product.id">
    <td>{{ index + 1 }}</td>
    <td>{{ product.name }}</td> <!-- Reference correct field -->
    <td>{{ product.description }}</td> <!-- Reference correct field -->
    <td>{{ product.category }}</td> <!-- Reference correct field -->
    <td>R{{ product.price }}</td> <!-- Reference correct field -->
    <td>
      <button
        class="btn btn-warning"
        @click="handleEditProduct(product)"
        data-bs-toggle="modal"
        data-bs-target="#editProductModal"
      >
        Edit
      </button>
    </td>
    <td>
      <button class="btn btn-danger" @click="handleDeleteProduct(product.id)">
        Delete
      </button>
    </td>
  </tr>
</tbody>

        </table>
      </div>
  
      <!-- Add User Button -->
      <div>
        <button
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
        >
          <i class="bi bi-plus-circle-fill"></i> Add User
        </button>
      </div>
  
      <!-- Add User Modal -->
      <div
        class="modal fade"
        id="addUserModal"
        tabindex="-1"
        aria-labelledby="addUserModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addUserModalLabel">Add New User</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to add new user -->
              <form @submit.prevent="handleAddUser">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    v-model="newUser.username"
                    type="text"
                    class="form-control"
                    id="username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    v-model="newUser.email"
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    v-model="newUser.password"
                    type="password"
                    class="form-control"
                    id="password"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Add User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Edit User Modal -->
      <div
        class="modal fade"
        id="editUserModal"
        tabindex="-1"
        aria-labelledby="editUserModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editUserModalLabel">Edit User</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- Form to edit user -->
              <form @submit.prevent="handleEditUser">
                <div class="mb-3">
                  <label for="editUsername" class="form-label">Username</label>
                  <input
                    v-model="currentUser.username"
                    type="text"
                    class="form-control"
                    id="editUsername"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editEmail" class="form-label">Email</label>
                  <input
                    v-model="currentUser.email"
                    type="email"
                    class="form-control"
                    id="editEmail"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editPassword" class="form-label">Password</label>
                  <input
                    v-model="currentUser.password"
                    type="password"
                    class="form-control"
                    id="editPassword"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Users Table -->
      <div class="table-responsive" v-if="users && users.length">
        <table class="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <td>{{ index + 1 }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button
                  class="btn btn-warning"
                  @click="handleEditUser(user)"
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="handleDeleteUser(user.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  import { Toast } from 'bootstrap';
  
  export default {
    data() {
      return {
        apiUrl: 'https://capstone-a5jc.onrender.com',
        products: [],
        users: [],
        payload: {
          prodName: '',
          prodDescription: '',
          Category: '',
          amount: '',
          prodUrl: ''
        },
        currentProduct: {},
        newUser: {
          username: '',
          email: '',
          password: ''
        },
        currentUser: {}
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get(`${this.apiUrl}/products`);
          this.products = response.data.results; // Adjust for correct data path
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async fetchUsers() {
        try {
          const response = await axios.get(`${this.apiUrl}/users`);
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
      async handleAddProduct() {
        try {
          await axios.post(`${this.apiUrl}/products`, this.payload);
          this.fetchProducts(); // Refresh product list
          this.showToast('Product added successfully');
        } catch (error) {
          console.error('Error adding product:', error);
          this.showToast('Error adding product');
        }
      },
      async handleEditProduct() {
        try {
          await axios.put(`${this.apiUrl}/products/${this.currentProduct.id}`, this.currentProduct);
          this.fetchProducts(); // Refresh product list
          this.showToast('Product updated successfully');
        } catch (error) {
          console.error('Error updating product:', error);
          this.showToast('Error updating product');
        }
      },
      async handleDeleteProduct(productId) {
        try {
          await axios.delete(`${this.apiUrl}/products/${productId}`);
          this.fetchProducts(); // Refresh product list
          this.showToast('Product deleted successfully');
        } catch (error) {
          console.error('Error deleting product:', error);
          this.showToast('Error deleting product');
        }
      },
      showToast(message) {
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new Toast(toastLiveExample);
        toast.show();
        toastLiveExample.querySelector('.toast-body').textContent = message;
      }
    },
    mounted() {
      this.fetchProducts();
      this.fetchUsers();
    }
  };
  </script>
  

<style>
main{
    padding-top: 10rem;
    background-color: pink;
}
</style>