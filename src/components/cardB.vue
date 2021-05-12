<template>
  <main class="main">
    <div class="card-con">
      <div class="card" :style="style" ref="card"></div>
    </div>
    <aside class="side">
      <section class="item">
        <span class="name">corner</span>
        <input type="range" v-model="state.corner" :data-tips="state.corner+'px'" :style="{'--percent':state.corner / state.max}" :max="state.max"/>
      </section>
      <Pre :style="style"/>
    </aside>
  </main>
</template>
<script setup>
import Pre from './pre.vue'
import { ref, reactive, computed, onMounted } from 'vue'

const state = reactive({ 
  corner: 10,
})

const style = computed(() => {
  const offset = state.position==='center'?'50%':state.offset+'px';
  const position = `${state.direction==='horizontal'?'':'0 '}${state.position==='end'?'':'-'}${state.corner}px`;
  return {
    '-webkit-mask-image': `radial-gradient(circle at ${state.corner}px ${state.corner}px, transparent ${state.corner}px, red ${state.corner}.5px)`,
    '-webkit-mask-position': `-${state.corner}px -${state.corner}px`
  }
})

const card = ref(null);

onMounted(()=>{
  const { width, height} = card.value.getBoundingClientRect();
  state.max = Math.min(width, height) / 2;
})

</script>
<style scoped>

</style>
