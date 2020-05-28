import App from './App.svelte'
import './main.css'

const app = new App({
  target: document.body,
  props: {
    name: 'Garret Harp',
    role: 'Full Stack Developer',
    topSkills: ['Node.JS', 'Svelte', 'AWS'],
    heroHeading: "Hey, I'm Garret.",
    heroDescription:
      'I have a passion for web development, and solving problems. I enjoy creating things that benefit others.',
    github: 'https://github.com/garretcharp',
    linkedin: 'https://www.linkedin.com/in/garretcharp/',
    email: 'garretcharp@gmail.com'
  }
})

export default app
