<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
        Player 1
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
        <div v-for="card in cards" :card="card" :key="card.id" class="column">
            <Card :card="card" />
        </div>
        <nav class="panel">
            <a class="panel-block is-active"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>playerCredits: 200</a> 
            <a class="panel-block is-active"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>currentRaise: 0</a> 
            <a class="panel-block is-active"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>amountToFollow: 0</a> 
            <a class="panel-block is-active"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span>maxRaise: 200</a>    
        </nav>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Fold</a>
    <a href="#" class="card-footer-item">Follow</a>
    <a href="#" class="card-footer-item">Raise</a>
  </footer>
</div>

  <!-- handCards: [ { value: '02', suit: 'Spades' }, { value: '12', suit: 'Clubs' } ],
  communityCards: [
    { value: '11', suit: 'Hearts' },
    { value: '08', suit: 'Hearts' },
    { value: '10', suit: 'Diamonds' },
    { value: '06', suit: 'Spades' },
    { value: '03', suit: 'Spades' }
  ],
  playerCredits: 200,
  currentRaise: 0,
  amountToFollow: 0,
  maxRaise: 200,
  possibleDecisions: [ 'raise' ]
  }-->
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "player",
  components: {
    Card,
  },
  props: ["player"],
  data() {
    return {
      card: {},
      cards: [
        {
          id: 1,
          suit: "♣",
          number: "A",
        },
        {
          id: 2,
          suit: "♣",
          number: "2",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
    .card {
        max-width: 300px;
    }
</style>