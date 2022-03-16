import { createApp } from "vue";

// Oruga
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

//Material Design

import "@mdi/font/css/materialdesignicons.min.css"


import axios from 'axios'

import App from "./App.vue"

const app = createApp(App).use(Oruga)

app.config.globalProperties.$axios = axios
window.axios = axios

app.mount("#app")