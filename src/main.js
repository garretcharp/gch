import App from './App.svelte'
import './main.css'

const app = new App({
  target: document.body,
  props: {
    name: 'Garret Harp',
    role: 'Full Stack Developer',
    topSkills: ['Node.JS', 'Svelte', 'AWS']
  }
})

export default app
