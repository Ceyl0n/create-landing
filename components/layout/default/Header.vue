<template>
  <header :class="$style['header']">{{ header }}</header>
</template>

<script>
export default {
  data() {
    return {
      header: 'header'
    };
  }
};
</script>

<style module lang="scss">
.header {
  position: relative;
  padding: 2rem 0;
}
</style>
