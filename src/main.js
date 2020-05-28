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
    email: 'garretcharp@gmail.com',
    skillHeading: 'What I Do',
    skills: [
      {
        heading: 'Backend Developer',
        image: 'backend.svg',
        skillTypes: [
          {
            heading: 'Languages & Frameworks',
            skills: ['Node.JS', 'Express.JS', 'Hapi.JS']
          },
          {
            heading: 'Cloud Platforms',
            skillsWithHeadings: [
              {
                subHeading: 'AWS',
                skills: ['EC2', 'Lambda', 'DynamoDB', 'S3']
              },
              { subHeading: 'GCP', skills: ['Cloud Functions', 'App Engine'] },
              { subHeading: 'Cloudflare', skills: ['Workers', 'KV Storage'] }
            ]
          },
          {
            heading: 'Tools/Misc',
            skillsWithHeadings: [
              { subHeading: 'Git', skills: ['Github', 'Gitlab'] }
            ],
            skills: ['NoSQL', 'REST API', 'Docker']
          }
        ]
      },
      {
        heading: 'Frontend Developer',
        image: 'frontend.svg',
        skillTypes: [
          {
            heading: 'Languages & Frameworks',
            skills: [
              'HTML',
              'CSS',
              'JavaScript',
              'React.JS',
              'Next.JS',
              'Svelte',
              'Sapper',
              'Angular'
            ]
          },
          {
            heading: 'Platforms',
            skills: ['Vercel', 'Netlify']
          },
          {
            heading: 'Tools/Misc',
            skills: ['Tailwind CSS', 'Materialize', 'Bootstrap']
          }
        ]
      }
    ]
  }
})

export default app
