import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const forumApp = createApp(App)
forumApp.use(router)

/**
 * Import and add globally App Components
 */
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach((fileName) => {
  let appComponentConfig = requireComponent(fileName)
  appComponentConfig = appComponentConfig.default || appComponentConfig
  const appComponentName = appComponentConfig.name || (
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
  )
  forumApp.component(appComponentName, appComponentConfig)
})

forumApp.mount('#app')
