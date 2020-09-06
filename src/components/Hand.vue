<template>
  <div class="hand">
    <h2 class="subtitle is-3">Hand of card</h2>
    <div v-for="card in cards" :card="card" :key="card.id" class="column">
        <Card :card="card" />
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "Hand",
  components: {
    Card,
  },
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
.cards {
  margin-top: 100px;
  text-align: center;
}
</style>