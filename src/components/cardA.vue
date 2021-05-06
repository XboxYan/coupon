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
      <section class="item">
        <span class="name">direction</span>
        <input type="radio" name="dir" value="horizontal" v-model="state.direction" />
        <input type="radio" name="dir" value="vertical" v-model="state.direction" />
      </section>
      <section class="item" :direction="state.direction">
        <span class="name">position</span>
        <input type="radio" name="pos" value="start" value1="left" value2="top" v-model="state.position"/>
        <input type="radio" name="pos" value="center" value1="center" value2="center" v-model="state.position"/>
        <input type="radio" name="pos" value="end" value1="right" value2="bottom" v-model="state.position"/>
      </section>
      <section class="item" v-show="state.position!=='center'">
        <span class="name">offset</span>
        <input type="range" v-model="state.offset" :data-tips="state.offset+'px'" :style="{'--percent':state.offset / state.max}" :max="state.max" />
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
  direction: 'vertical',
  position: 'start',
  offset: 50
})

const style = computed(() => {
  const offset = state.position==='center'?'50%':state.offset+'px';
  const position = `${state.direction==='horizontal'?'':'0 '}${state.position==='end'?'':'-'}${state.radius}px`;
  return {
    '-webkit-mask-image': `radial-gradient(circle at ${state.position==='end'?'right ':''}${state.direction==='horizontal'? state.radius+'px':offset} ${state.position==='end'?'bottom ':''}${state.direction==='horizontal'?offset:state.radius+'px'}, transparent ${state.radius}px, red ${state.radius}.5px)`,
    '-webkit-mask-position': position
  }
})

const card = ref(null);

onMounted(()=>{
  const { width, height} = card.value.getBoundingClientRect();
  state.max = Math.min(width, height) / 2;
})

</script>
<style scoped>
h1{
    font-size: 4em;
    margin-bottom: 0;
}
h2{
    font-weight: normal;
}
/* [name="pos"][type="radio"]::before{
  content: attr(value2);
}
[direction="vertical"] [name="pos"][type="radio"]::before{
  content: attr(value1);
} */
</style>
