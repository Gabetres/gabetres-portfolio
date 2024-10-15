<script>
import { useDark, useToggle } from '@vueuse/core';

export default {
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return {
      isDark,
      toggleDark,
    };
  },
};
</script>

<template>
  <header>
    <router-link to="/">
      <h2>Gabe<strong>tres</strong></h2>
    </router-link>
    <img class="moon" @click="toggleDark()" src="@/assets/images/moon-darkmode.svg" alt="">
    <img class="sun" @click="toggleDark()" src="@/assets/images/sun-lightmode.svg" alt="">
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  background-color: #efefef;
  box-shadow: 0 0 12px #00000038;

  a {
    text-decoration: none;
    color: #000;
  }

  h2 {
    font-weight: 700;

    strong {
      color: #e01e37;
    }
  }

  .sun {
    display: none;
  }

  .moon {
    display: block;
  }

  img {
    width: 2rem;
    cursor: pointer;
  }
}

.dark {
  header {

    a {
      text-decoration: none;
      color: #fff;
    }

    background-color: black;
    color: #fff;

    .moon {
      display: none;
    }

    .sun {
      display: block;
    }
  }
}

@media (max-width: 640px) {
  header {
    width: 100%;
    justify-content: space-between;

    h2 {
      font-size: 1.3rem;
      margin-left: 1rem;
    }

    img {
      max-width: 1.35rem;
      min-width: 1rem;
      margin-right: 1rem;
    }
  }

  .dark {
    header {
      background-color: black;
      color: #fff;

      .moon {
        display: none;
      }

      .sun {
        display: block;
      }
    }
  }
}
</style>
