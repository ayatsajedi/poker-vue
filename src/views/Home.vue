<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to the EatSleepBet Casino.         
        </h1>
        <h2 class="subtitle">
          Make sure you to bet all your savings.
        </h2>
        <div class="button-block">
          <button class="button is-xl is-dark">Sign Up to play</button>
        </div>
      </div>
    </div>
  </section>
  <Hand />
</div>
</template>
<script>
import Hand from '../components/Hand';
export default {
  name: 'home',
  components: {
      Hand
  }
}
</script>
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    background-image: url("https://cdn.pixabay.com/photo/2015/11/07/11/08/cards-1030852_1280.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>