<template>
    <div class="spinner-container">
      <p class="loading-text">{{ loadingText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp',
    data() {
      return {
        baseText: 'Loading',
        loadingText: 'Loading',
        dotCount: 0,
      };
    },
    mounted() {
      this.startLoadingAnimation();
    },
    beforeUnmount() {
      clearInterval(this.loadingInterval);
    },
    methods: {
      startLoadingAnimation() {
        this.loadingInterval = setInterval(() => {
          this.dotCount = (this.dotCount + 1) % 4; // Cycle through 0, 1, 2, 3
          this.loadingText = this.baseText + '.'.repeat(this.dotCount);
        }, 500); // Change dots every 500ms
      },
    },
  };
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full screen height */
  }
  
  .loading-text {
    font-size: 24px;
    font-weight: bold;
    color: #FF8FD2; /* Customize your color */
  }
  </style>
  