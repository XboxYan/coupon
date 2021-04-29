<template>
  <div class="nav">
    <input type="radio" name="type" value="A" v-model="state.type" />
    <input type="radio" name="type" value="B" v-model="state.type" />
    <input type="radio" name="type" value="C" v-model="state.type" />
  </div>
  <keep-alive>
    <component :is="view"></component>
  </keep-alive>
</template>
<script setup>
import CardA from './cardA.vue'
import CardB from './cardB.vue'
import CardC from './cardC.vue'
import { reactive, computed } from 'vue'

const state = reactive({ 
  type: 'A'
})

const view = computed(() => {
  return {
    A: CardA,
    B: CardB,
    C: CardC,
  }[state.type]
})
</script>
<style scoped>
[type="radio"]::before{
  content: '';
  display: block;
  width: 3rem;
  height: 2rem;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 60%;
  color: inherit;
  background: currentColor;
  /* opacity: 0.5; */
}
[type="radio"]:checked::before{
  opacity: 1;
}
[value="A"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h150v30c-11.046 0-20 8.954-20 20s8.954 20 20 20v30H0V70c11.046 0 20-8.954 20-20S11.046 30 0 30V0z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
[value="B"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 0h110c0 11.046 8.954 20 20 20v60c-11.046 0-20 8.954-20 20H20c0-11.046-8.954-20-20-20V20c11.046 0 20-8.954 20-20z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
[value="C"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h150v10c-5.523 0-10 4.477-10 10s4.477 10 10 10v10c-5.523 0-10 4.477-10 10s4.477 10 10 10v10c-5.523 0-10 4.477-10 10s4.477 10 10 10v10H0V90c5.523 0 10-4.477 10-10S5.523 70 0 70V60c5.523 0 10-4.477 10-10S5.523 40 0 40V30c5.523 0 10-4.477 10-10S5.523 10 0 10V0z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
</style>
