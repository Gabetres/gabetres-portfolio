<template>
  <header>
    <h2>Gabe<strong>tres</strong></h2>
    <font-awesome-icon icon="fa-solid fa-moon" />
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
  z-index: 1000;
  gap: 20px;

  color: #000;
  background: #efefef;
  padding: 10px;
  box-shadow: 0px 0px 15px #00000028;

  h2 {
    font-weight: 600;

    strong {
      color: #e01e37;
      font-weight: 600;
    }
  }

  .fa-moon {
    color: black;
    font-weight: 300;
  }

  h2,
  .fa-moon {
    font-size: 25px;
  }
}

@media (max-width: 768px) {
  header {
    align-items: flex-start;
    align-items: center;


  }
}

@media (max-width: 480px) {
  header {
    align-items: flex-start;
    align-items: center;

    h2,
    .fa-moon {
      font-size: 15px;
    }
  }
}
</style>
