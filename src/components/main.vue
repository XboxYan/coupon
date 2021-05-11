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
[type="radio"][value="A"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M75 0c0 11.046-8.954 20-20 20S35 11.046 35 0H10C4.477 0 0 4.477 0 10v80c0 5.523 4.477 10 10 10h25c0-11.046 8.954-20 20-20s20 8.954 20 20h65c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H75z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
[type="radio"][value="B"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 0h110c0 11.046 8.954 20 20 20v60c-11.046 0-20 8.954-20 20H20c0-11.046-8.954-20-20-20V20c11.046 0 20-8.954 20-20z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
[type="radio"][value="C"]::before{
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='150' height='100' viewBox='0 0 150 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M65 0c0 11.046-8.954 20-20 20S25 11.046 25 0H10C4.477 0 0 4.477 0 10v80c0 5.523 4.477 10 10 10h15c0-11.046 8.954-20 20-20s20 8.954 20 20h20c0-11.046 8.954-20 20-20s20 8.954 20 20h15c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10h-15c0 11.046-8.954 20-20 20S85 11.046 85 0H65z' fill='%23C4C4C4'/%3E%3C/svg%3E")
}
</style>
