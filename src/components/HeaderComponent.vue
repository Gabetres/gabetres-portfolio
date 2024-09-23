<template>
  <header>
    <h2>Gabe<strong>tres</strong></h2>
    <img src="@/assets/images/moon-darkmode.svg" alt="">
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  gap: 20px;

  color: #000;
  background: #efefef;
  box-shadow: 0px 0px 15px #00000028;

  h2 {
    font-weight: 600;
    position: relative;
    right: 95px;

    strong {
      color: #e01e37;
      font-weight: 600;
      font-size: 25px;
    }
  }

  img {
    width: 25px;
    position: relative;
    left: 25px;
  }
}

@media (max-width: 768px) {
  header {
    position: unset;
    align-items: flex-start;
    align-items: center;
  }

  h2{
    right: 0;
  }

  img{
    left: 0;
  }
}

@media (max-width: 480px) {
  header {
    align-items: flex-start;
    align-items: center;
  }
}
</style>
