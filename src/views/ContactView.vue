<template>
    <div class="contact">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h1 class="text-center mb-4">Contact Us</h1>
            <p class="lead text-center mb-5">
              Have any questions or inquiries? We're here to help! Please fill out the form below and our team will get back to you as soon as possible.
            </p>
  
            <!-- Contact Form -->
            <form
              action="https://formspree.io/f/mqazjybl"
              method="POST"
              class="shadow p-4 rounded bg-light"
            >
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  v-model="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
  
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  v-model="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  v-model="message"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
  
              <button type="submit" class="btn btn-primary w-100" style="background-color: #C79B31;border: none;">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        name: '',
        email: '',
        message: '',
      };
    },
    methods: {
      // You can handle additional logic here if needed
    },
  };
  </script>
  
  <style scoped>
  .contact {
    background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/back%20(2).jpg?raw=true");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    background-position: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 {
    color: #fff;
  }
  
  p {
    color: #f1f1f1;
    margin: 0 auto;
  }
  
  form {
    background-color: rgba(255, 255, 255, 0.8);
  }
  </style>
  