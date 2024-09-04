<template>
  <div class="home">
    <div class="landing">
      <h1>
        Welcome to
        <span style="color: pink" class="beth-ellen-regular"
          >PrettyPottery</span
        >
      </h1>
    </div>
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <img
            src="https://i.postimg.cc/zBzqdhvz/B-4-removebg-preview-2.png"
            class="home-img"
          />
          <h5>Worldwide Delivery</h5>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/N07g7DgC/B-5-removebg-preview-1.png"
            class="home-img"
          />
          <h5>100% Cash Back</h5>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/CMvxQcbW/B-6-removebg-preview-1.png"
            class="home-img"
          />
          <h5>Secure Payment</h5>
        </div>
      </div>
    </div>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Handcrafted
          <span style="color: pink">Excellence</span>
        </h2>
        <p class="lead" style="color: grey">
          Our products are carefully selected to ensure they meet the highest
          standards of craftsmanship.
        </p>
      </div>
      <div class="col-md-5">
        <img
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-kowalievska-1170982.jpg?raw=true"
          width="500"
          height="500"
          alt="Beautiful Image"
        />

        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.landing {
  background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-dariusz-duchiewicz-299516704-27818674.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: left;
}

.beth-ellen-regular {
  font-family: "Beth Ellen", cursive;
  font-weight: 400;
  font-style: normal;
}

.landing > h1 {
  margin: 0 auto;
  font-size: 3rem;
}

.home-img {
  width: 30%;
}

.container{
  background-color: #ffecbf;
  width: 100%;
}

.row {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.col-md-7 {
  margin: auto 0;
}
.carousel {
  margin-bottom: 4rem;
}

.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  top: 0;
  left: 0;
}
</style>
