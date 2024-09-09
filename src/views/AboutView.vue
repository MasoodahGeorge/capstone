<template>
  <div class="about">
    <div class="intro-section">
      <h1 class="text-center mb-4">About Us</h1>
      <p class="lead text-center mb-5" style="color: white;">
        PrettyPottery was founded out of a love for beautiful ceramics and pottery. What began as a small personal collection has grown into an online store where we share our passion for craftsmanship with the world. Every item in our collection is selected for its quality and unique design.
      </p>
    </div>

    <div class="moreabout">
      <div class="row">
      <!-- Left column for text -->
      <div class="col-md-6">
        <h1 class="section-title mb-4 text-center">Our Vision</h1>
        <p>
          Our vision is to become a leading provider of unique, high-quality pottery and ceramics that bring warmth and elegance into every home. We are dedicated to supporting artisans and ensuring that every piece in our store tells a story of tradition and craftsmanship.
        </p>
      </div>

      <!-- Right column for image -->
      <div class="col-md-6">
        <img src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/91203208e3887c813298397664d79540.jpg?raw=true" class="img-fluid mb-4" alt="Company Image" height="500" width="500">
      </div>
    </div>

    <div class="row mt-5">
      <!-- Left column for another image -->
      <div class="col-md-6">
        <img src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-kowalievska-1170982.jpg?raw=true" class="img-fluid" alt="Modern building image" >
      </div>

      <!-- Right column for list and button -->
      <div class="col-md-6">
        <h1 class="section-title mb-4 text-center">
          Why Choose Us?
        </h1>
        <ul class="list-unstyled">
          <li>✔ Exclusive, handmade pieces that you won’t find anywhere else.</li>
          <li>✔ High-quality products crafted by skilled artisans.</li>
          <li>✔ Secure online shopping experience.</li>
          <li>✔ Fast and reliable shipping, with customer support every step of the way.</li>
        </ul>

        <!-- Learn more button -->
        <a href="#" class="btn btn-outline-dark mt-3">LEARN MORE</a>
      </div>
    </div>
    </div>
  
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: "AboutView",
};
</script>

<style>
.intro-section{
  background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/back%20(2).jpg?raw=true");
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    background-position: center;
    padding-top: 5rem;
    margin-bottom: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.about {
  /* background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-filip-marcus-adam-3638207-16576796.jpg?raw=true"); */
  background-color: #fff;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.moreabout{
  padding: 3rem;
}

.col-md-6{
  margin: auto 0;
}
.intro-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  min-height: 100vh;
}
h1{
  font-size: 5rem;
  padding-bottom: 1rem;
}
.lead{
  width: 80%;
  font-size: 1.5rem;
}
h1, h2 {
  color: #fff;
}

.card {
  background-color: transparent;
  border: none;
  min-height: 100vh;
}


p {
  list-style-type: disc;
  margin-left: 20px;
  color: #fff;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1rem;
  color: #666;
}

ul li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.btn {
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
}

.img-fluid {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>