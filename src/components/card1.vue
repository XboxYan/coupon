<template>
  <main class="main">
    <div class="card-con">
      <div class="card" :style="style"></div>
    </div>
    <aside class="side">
      <section>
        <span>radius</span>
        <input type="range" v-model="state.radius" />{{state.radius}}
      </section>
      <section>
        <span>direction</span>
        <label><input type="radio" name="dir" value="horizontal" v-model="state.direction" />horizontal</label>
        <label><input type="radio" name="dir" value="vertical" v-model="state.direction" />vertical</label>
      </section>
      <section>
        <span>position</span>
        <label><input type="radio" name="pos" value="start" v-model="state.position"/>start</label>
        <label><input type="radio" name="pos" value="center" v-model="state.position"/>center</label>
        <label><input type="radio" name="pos" value="end" v-model="state.position"/>end</label>
      </section>
      <section v-if="state.position!=='center'">
        <span>offset</span>
        <input type="range" v-model="state.offset" />{{state.offset}}
      </section>
    </aside>
  </main>
</template>
<script setup>
import { reactive, computed } from 'vue'

const state = reactive({ 
  radius: 10,
  direction: 'horizontal',
  position: 'start',
  offset: 20
})

const style = computed(() => {
  const offset = state.position==='center'?'50%':state.offset+'px';
  const position = `${state.direction === 'horizontal'?'':0} ${state.position=='end'?'':'-'}${state.radius}px`;
  return {
    '-webkit-mask': `radial-gradient(circle at ${state.position=='end'?'right':''} ${state.direction === 'horizontal'? state.radius+'px' : offset} ${state.position=='end'?'bottom':''} ${state.direction === 'horizontal'? offset : state.radius+'px'}, #0000 ${state.radius}px, red 0) ${position}`,
  }
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
</style>
