import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from "@/router";

const apiURL = "https://capstoneproject-89nz.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setRecentProducts(state, value) {
      state.recentProducts = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    // Users
    async fetchAllUsers(context) {
      try {
        const response = await axios.get(`${apiURL}users`); // Make sure your endpoint is correct
        const { results, msg } = response.data;
        if (results) {
          context.commit("setUsers", results);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchAUser(context, id) {
      try {
        const response = await axios.get(`${apiURL}users/${id}`);
        const { result, msg } = response.data;
        if (result) {
          context.commit("setUser", result);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async registerUser(context, payload) {
      try {
        const response = await axios.post(`${apiURL}users/register`, payload);
        const { msg, err, token } = response.data;
        if (token) {
          context.dispatch("fetchAllUsers");
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          router.push({ name: "login" });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateAUser(context, payload) {
      try {
        const response = await axios.patch(
          `${apiURL}users/${payload.userID}`,
          payload
        );
        const { msg, err } = response.data;
        if (msg) {
          context.dispatch("fetchAllUsers");
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteAUser(context, id) {
      try {
        const response = await axios.delete(`${apiURL}users/${id}`);
        const { msg, err } = response.data;
        if (msg) {
          context.dispatch("fetchAllUsers");
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    //  Products
    async fetchProducts(context) {
      try {
        const response = await axios.get(`${apiURL}products`);
        const { results } = response.data;
        if (results) {
          context.commit("setProducts", results);
        } else {
          router.push({ name: "login" });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async recentProducts(context) {
      try {
        const response = await axios.get(`${apiURL}products/recent`);
        const { results, msg } = response.data;
        if (results) {
          context.commit("setRecentProducts", results);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async fetchProduct(context, id) {
      try {
        const response = await axios.get(`${apiURL}products/${id}`);
        const { result, msg } = response.data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          toast.error(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async addAProduct(context, payload) {
      try {
        const response = await axios.post(`${apiURL}products/add`, payload);
        const { msg } = response.data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async updateProduct(context, payload) {
      try {
        const response = await axios.patch(
          `${apiURL}products/${payload.productID}`,
          payload
        );
        const { msg } = response.data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    async deleteProduct(context, id) {
      try {
        const response = await axios.delete(`${apiURL}products/${id}`);
        const { msg } = response.data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
  modules: {},
});
