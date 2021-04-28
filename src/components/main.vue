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

</style>
