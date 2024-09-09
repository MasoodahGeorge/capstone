<template>
  <div class="contact">
    <div class="form-container">
      <h1>Contact Us</h1>
      <p class="lead">
        Have any questions or inquiries? We're here to help! Please fill out the form below and our team will get back to you as soon as possible.
      </p>

      <!-- Contact Form -->
      <form
        action="https://formspree.io/f/mqazjybl"
        method="POST"
        class="contact-form"
      >
        <div class="field-wrap">
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="field-wrap">
          <label for="email">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="field-wrap">
          <textarea
            id="message"
            name="message"
            v-model="message"
            rows="5"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button type="submit" class="button button-block">
          Send Message
        </button>
      </form>
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
};
</script>

<style scoped>
.contact {
  background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/c9b13692f7fc9d092c510d95353091d8.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  padding-top: 10rem;
  padding-bottom: 5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: rgba(71, 71, 71, 0.19);
  padding: 40px;
  max-width: 600px;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
}

h1 {
  text-align: center;
  color: #fff;
  font-weight: 300;
  margin-bottom: 20px;
}

p.lead {
  color: #f1f1f1;
  text-align: center;
  margin-bottom: 40px;
}

.field-wrap {
  position: relative;
  color:white;
  margin-bottom: 20px;
}

label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgb(255, 255, 255);
  transition: all 0.25s ease;
  pointer-events: none;
}

label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}

label .req {
  margin: 2px;
  color: #C79B31;
}

input, textarea {
  display: block;
  width: 100%;
  padding: 10px;
  background: none;
  border: 2px solid white;
  color: #fff;
  border-radius: 4px;
  transition: border-color .25s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #C79B31;
}

textarea {
  border: 2px solid white;
  resize: vertical;
}

.button {
  border: 0;
  outline: none;
  border-radius: 4px;
  padding: 15px 0;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: #C79B31;
  color: #ffffff;
  transition: background .5s ease;
}

.button:hover {
  background: #c79a3167;
}

.button-block {
  display: block;
  width: 100%;
}
</style>
