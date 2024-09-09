<template>
  <div class="home">
    <div class="landing">
      <h1>
        Welcome to
        <span style="color: pink" class="beth-ellen-regular">PrettyPottery</span
        >
      </h1>
      <p class="lead1 text-center mb-5" style="color: white;">
        Welcome to PrettyPottery, your one-stop shop for exquisite pottery and ceramics! We offer a carefully curated selection of tea sets, vintage plates, cups, and more. Our mission is to bring beauty and elegance into your home with high-quality, handcrafted items.
      </p>
    </div>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading" style="color: palevioletred;">
          Handcrafted
          <span style="color: pink">Excellence</span>
        </h2>
        <p class="text" style="color: grey">
          Our products are carefully selected to ensure they meet the highest
          standards of craftsmanship.
        </p>
      </div>
      <div class="col-md-5">
        <img
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/back%20(1).jpg?raw=true" alt="Company Image"
          width="500"
          height="500"
        />

        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee"/>
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
  text-align: center;
  margin: auto 0;
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
.featurette-heading{
  text-align: center;
}
.text{
  text-align: center;
}

  .lead1 {
  max-width: 60vw;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  text-align: center;
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

.row > h1{
  text-align: center;
}
.col-md-7 {
  margin: auto 0;
}
.info-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-block h4 {
  font-size: 1.2rem;
  font-weight: bold;
  /* margin-bottom: 0.5rem; */
  color: #474747;
}

.info-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #474747;
  /* margin: 0; */
}

.divider {
  width: 1px;
  height: 80px;
  background-color: #474747;
  margin: 0 2rem;
}

</style>
