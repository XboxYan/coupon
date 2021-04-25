<template>
  <main class="main">
    <div class="card-con">
      <div class="card"></div>
    </div>
    <aside class="side">
      <section>
        <lable>圆角</lable><input type="range" id="demo1_input" value="20">
      </section>
      <section>
        <lable>方向</lable><input type="radio" name="demo1_radio" id="r1_1" checked>
        <label for="r1_1">水平</label><input type="radio" name="demo1_radio" id="r1_2">
        <label for="r1_2">垂直</label></section>
      <section>
        <lable>位置</lable><input type="checkbox" name="demo1_radio2" id="demo1_check" checked>
        <label for="demo1_check">居中</label><input hidden type="range" id="demo1_pos">
      </section>
    </aside>
  </main>
</template>

<style scoped>
h1{
    font-size: 4em;
    margin-bottom: 0;
}
h2{
    font-weight: normal;
}
</style>
