<template>
  <HeaderComponent/>
  <MainComponent/>
</template>
  
<script>
// import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  components: {
    // HeaderComponent,
    MainComponent
  },
};
</script>

<style>
body {
  font-family: 'Poppins';
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>
