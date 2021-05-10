<template>
  <main class="main">
    <div class="card-con">
      <div class="card" :style="style" ref="card"></div>
    </div>
    <aside class="side">
      <section class="item">
        <span class="name">radius</span>
        <input type="range" v-model="state.radius" :data-tips="state.radius+'px'" :style="{'--percent':state.radius / state.max}" :max="state.max"/>
      </section>
      <Pre :style="style"/>
    </aside>
  </main>
</template>
<script setup>
import Pre from './pre.vue'
import { ref, reactive, computed, onMounted } from 'vue'

const state = reactive({ 
  radius: 10,
})

const style = computed(() => {
  const offset = state.position==='center'?'50%':state.offset+'px';
  const position = `${state.direction==='horizontal'?'':'0 '}${state.position==='end'?'':'-'}${state.radius}px`;
  return {
    '-webkit-mask-image': `radial-gradient(circle at ${state.radius}px ${state.radius}px, transparent ${state.radius}px, red ${state.radius}.5px)`,
    '-webkit-mask-position': `-${state.radius}px -${state.radius}px`
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
