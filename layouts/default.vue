<template>
  <div class="app-page">
    <Header />

    <main>
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/default/Header.vue';
import Footer from '~/components/layout/default/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style module lang="scss"></style>
