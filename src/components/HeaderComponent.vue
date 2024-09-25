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
  flex-wrap: nowrap;
  background-color: #efefef;
  box-shadow: 0 0 12px #00000038;

  h2 {
    font-weight: 700;

    strong {
      color: #e01e37;
    }
  }
  img {
    width: 1.8rem;
  }
}
@media (max-width: 640px) {
  header{
    justify-content: space-between;
    padding: 0 3rem;

    h2{
      font-size: 1.3rem;
    }
    img{
      width: 1.35rem;
    }
  }
}
</style>
