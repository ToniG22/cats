import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CatsContainer from './components/CatsContainer.vue'
import CatsView from './views/CatsView.vue'
import TopBarContainer from './components/TopBarContainer.vue'
import TopBarView from './views/TopBarView.vue'
import MenuContainer from './components/MenuContainer.vue'
import MenuView from './views/MenuView.vue'

import './assets/main.css'

const app = createApp(App)
app.component('CatsContainer', CatsContainer)
app.component('CatsView', CatsView)
app.component('TopBarContainer', TopBarContainer)
app.component('TopBarView', TopBarView)
app.component('MenuContainer', MenuContainer)
app.component('MenuView', MenuView)

app.use(router)

app.mount('#app')
