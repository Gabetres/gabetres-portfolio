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
    <h2>Gabe<strong>tres</strong></h2>
    <img class="moon" @click="toggleDark()" src="@/assets/images/moon-darkmode.svg" alt="">
    <img class="sun" @click="toggleDark()" src="@/assets/images/sun-lightmode.svg" alt="">
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

  .sun {
    display: none;
  }

  .moon {
    display: block;
  }

  img {
    width: 2.5rem;
  }
}

/* dark mode config */

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

@media (max-width: 640px) {
  header {
    justify-content: space-between;
    padding: 0 3rem;

    h2 {
      font-size: 1.3rem;
    }

    img {
      width: 1.35rem;
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
