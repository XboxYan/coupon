<template>
  <div class="pre-wrap" :class="{copied: state.copied}">
    <pre
      class="pre"
      ref="pre"
    ><template v-for="(value, name, index) in style" :key="name">{{index!==0?'\n':''}}<code>{{name}}</code>: {{value}};</template></pre>
    <button class="copy" @click="copy">Copy</button>
    <textarea class="hidden" ref="txt" readonly></textarea>
  </div>
</template>
<script setup>
import { ref, defineProps, reactive } from "vue";

defineProps({
  style: Object,
});

const state = reactive({ 
  copied: false
})

const pre = ref(null);
const txt = ref(null);
let timer = null;

const copy = () => {
    txt.value.value = pre.value.textContent;
    txt.value.select();
    document.execCommand('copy');
    state.copied = true;
    timer && clearTimeout(timer);
    timer = setTimeout(()=>{
        state.copied = false;
    }, 2000)
}



</script>

<style scoped>
.pre-wrap {
    position: relative;
    margin: 1rem 0;
}
.pre-wrap::after{
    content: 'Copied to clipboard!';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #f3f4f5;
    font-size: 1.5rem;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: .2s;
}
.pre-wrap::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    opacity: 0.8;
    border-radius: 0.5rem;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: .2s;
}
.pre-wrap.copied::before,
.pre-wrap.copied::after{
    opacity: 1;
    visibility: visible;
}
.pre {
  padding: 1rem;
  background-color: #2c3e50;
  color: #f3f4f5;
  font-size: 1.2rem;
  overflow: auto;
  border-radius: 0.5rem;
  white-space: pre-wrap;
  line-height: 1.5;
  margin: 0;
}
code {
  color: var(--theme);
}
.copy{
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    outline: 0;
    background: var(--theme);
    color: #f3f4f5;
    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0 0.5rem 0 0;
    cursor: pointer;
    transition: .2s;
}
.copy:focus{
    box-shadow:  0 0 0 0.25rem rgba(255,255,255,0.6), 0 0 0 0.25rem var(--theme);
}
.hidden{
    position: absolute;
    opacity: 0;
    clip: rect(0 0 0 0);
    /* visibility: hidden; */
}
</style>
