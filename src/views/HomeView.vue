<template>
  <div class="home">
    <div class="landing"></div>
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          First featurette heading.
          <span class="text-muted">It’ll blow your mind.</span>
        </h2>
        <p class="lead">
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
      </div>
      <div class="col-md-5">
        <svg
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#eee" />
          <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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

.row{
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.col-md-7{
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
