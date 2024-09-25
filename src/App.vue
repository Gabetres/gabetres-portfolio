<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: 'Poppins';
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
