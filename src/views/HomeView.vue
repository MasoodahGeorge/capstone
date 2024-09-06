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
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading" style="color: palevioletred;">
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

    <div class="info-section fade-in">
      <h2 class="section-title">Come visit us.</h2>
      <div class="row justify-content-center info-content">
        <div class="col-md-4 info-block text-center">
          <h4>Address</h4>
          <p>500 Landsdowne St.<br />Landsdowne, WC 7780</p>
        </div>
        <div class="col-md-1 divider"></div>
        <div class="col-md-4 info-block text-center">
          <h4>Opening Hours</h4>
          <p>
            Mon - Fri: 9am - 6pm<br />
            Saturday: 10am - 2pm<br />
            Sunday: Closed
          </p>
        </div>
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
.featurette-heading{
  text-align: right;
}
.lead{
  text-align: right;
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
  margin-bottom: 0.5rem;
  color: #474747;
}

.info-block p {
  font-size: 1rem;
  line-height: 1.6;
  color: #474747;
  margin: 0;
}

.divider {
  width: 1px;
  height: 80px;
  background-color: #474747;
  margin: 0 2rem;
}

.info-block {
  padding: 0 1rem;
}
</style>
