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
                skills: [
                  'EC2',
                  'Lambda',
                  'DynamoDB',
                  'S3',
                  'SNS',
                  'SQS',
                  'API Gateway'
                ]
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
    ],
    projectsHeading: 'My Work',
    projects: [
      {
        heading: 'SmartClips',
        description:
          'A tool that allows Mixer streamers to easily create, and share clips from their live streams.',
        image: 'smartclips.svg',
        subHeading: 'Built With',
        tools: [
          'Next.JS',
          'Vercel',
          'Node.JS',
          'Express.JS',
          'MongoDB',
          'Docker',
          'AWS Lambda',
          'Digital Ocean',
          'Braintree Payments'
        ],
        link: 'https://smartclips.app'
      },
      {
        heading: 'SmartHost',
        description:
          'A tool that allows streamers to easily automate their hosting on their Mixer channel.',
        image: 'smarthost.svg',
        subHeading: 'Built With',
        tools: [
          'Preact',
          'Netlify',
          'Node.JS',
          'Express.JS',
          'AWS DynamoDB',
          'AWS EC2',
          'Stripe Payments'
        ],
        link: 'https://smarthostapp.com'
      },
      {
        heading: 'Seven Networks',
        description:
          'Adclear is an app for Android & iOS that removes those pesky ads. My role requires me to develop, debug, and test features, or fix any issues that occur.',
        image: 'seven.svg',
        subHeading: 'Built With',
        tools: ['Java', 'Swift'],
        link: 'https://adclear.com/'
      },
      {
        heading: 'PlayrGG',
        description:
          'PlayrGG is a service that allows businesses, and content creators to easily run legal giveaways to maximize their ROIs. My role requires me to automate tasks such as finding clients who would fit our product.',
        image: 'playrgg.jpg',
        subHeading: 'Built With',
        tools: ['Node.JS'],
        link: 'https://playr.gg/'
      }
    ]
  }
})

export default app
