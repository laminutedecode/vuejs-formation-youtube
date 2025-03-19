<template>
    <div class="box">CSS Normal</div>

    <div>
      <p v-bind:style="inlineStyle">Ce texte a du CSS inline !</p>
    </div>

    <div class="box-style">Box Style</div>

    <div class="box-style2">Box Style</div>
</template>

<script>

export default {
  data() {
    return {
      inlineStyle: {
        color: "blue",
        fontSize: "16px"
      },
    };
  }
};
</script>

<style scoped src="../../assets/styles/mystyle2.css">

.box {
  width: 150px;
  height: 150px;
  background-color: crimson;
  margin-bottom: 10px;
  text-align: center;
  line-height: 150px;
}


</style>
