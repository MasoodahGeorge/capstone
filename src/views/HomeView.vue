<template>
  <div class="home">
    <div class="landing">
      <BR></BR>
      <h1>textsiess</h1>
      <img src="https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-dariusz-duchiewicz-299516704-27818674.jpg?raw=true" alt="">
    </div>
    
</div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

    }
}
</script>

<style scoped>
.home {
  height:100vh;
  padding-top: 10rem;
  /* display: flex;
  flex-direction: column; */
}

.landing {
  background-image: url("https://github.com/MasoodahGeorge/CapstonePics/blob/main/pexels-dariusz-duchiewicz-299516704-27818674.jpg?raw=true");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  min-height: 100vh;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
}
</style>