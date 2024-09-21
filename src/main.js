import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faMoon } from "@fortawesome/free-solid-svg-icons";
// import Vue from "vue";
library.add(faCoffee, faMoon);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
