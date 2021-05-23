<template>
  <footer :class="$style['footer']">{{ footer }}</footer>
</template>

<script>
export default {
  data() {
    return {
      footer: 'footer'
    };
  }
};
</script>

<style module lang="scss">
.footer {
  position: relative;
  padding: 2rem 0;
}
</style>
