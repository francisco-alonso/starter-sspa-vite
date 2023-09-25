import './assets/main.css'

import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa
        }
      })
    }
  },
  handleInstance: (app) => {
    app.use(router)
  }
})
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
