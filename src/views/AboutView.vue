<template>
  <div class="about">
    <div class="intro-section">
      <h1 class="text-center mb-4">About PrettyPottery</h1>
      <p class="lead text-center mb-5">
        Welcome to PrettyPottery, your one-stop shop for exquisite pottery and ceramics! We offer a carefully curated selection of tea sets, vintage plates, cups, and more. Our mission is to bring beauty and elegance into your home with high-quality, handcrafted items.
      </p>
    </div>
    
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card">
            <h2 class="card-title mb-3">Our Story</h2>
            <p>
              PrettyPottery was founded out of a love for beautiful ceramics and pottery. What began as a small personal collection has grown into an online store where we share our passion for craftsmanship with the world. Every item in our collection is selected for its quality and unique design.
            </p>
            <h2 class="card-title mt-4 mb-3">Why Choose Us?</h2>
            <ul>
              <p>Exclusive, handmade pieces that you won’t find anywhere else.</p>
              <p>High-quality products crafted by skilled artisans.</p>
              <p>Secure online shopping experience.</p>
              <p>Fast and reliable shipping, with customer support every step of the way.</p>
            </ul>
            <h2 class="card-title mt-4 mb-3">Our Vision</h2>
            <p>
              Our vision is to become a leading provider of unique, high-quality pottery and ceramics that bring warmth and elegance into every home. We are dedicated to supporting artisans and ensuring that every piece in our store tells a story of tradition and craftsmanship.
            </p>
          </div>
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
  background-color:rgb(238, 167, 179) ;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
</style>