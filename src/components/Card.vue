<template>
  <div class="card">
    <span class="card__suit card__suit--top">{{ card.suit }}</span>
    <span class="card__number">{{ card.number }}</span>
    <span class="card__suit card__suit--bottom">{{ card.suit }}</span>
  </div>
</template>
<script>
export default {
  props: [
    'card'
  ]
};
</script>
<style lang="scss" scoped>
.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.card {
  width: 75px;
  height: 100px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  text-align: center;
}

.red {
  color: #ff0000;
}

.black {
  color: #000;
}
</style>