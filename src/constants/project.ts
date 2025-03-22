import { z } from 'zod'
import { generateRandomString } from '@/utils/functions'

export const projectDefaultValueForm = {
  slug: generateRandomString(10),
  title: '',
  description: '',
  image: '',
  isFeatured: false,
  isShow: false,
  stacks: [],
  content: '',
  linkDemo: '',
  linkGithub: '',
  updatedAt: new Date(),
  createdAt: new Date()
}

export const stackOptions = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'html5', label: 'HTML5' },
  { id: 'css3', label: 'CSS3' },
  { id: 'react.js', label: 'React.js' },
  { id: 'next.js', label: 'Next.js' },
  { id: 'three.js', label: 'Three.js' },
  { id: 'tailwindcss', label: 'TailwindCSS' },
  { id: 'material-ui', label: 'Material UI' },
  { id: 'redux', label: 'Redux' },
  { id: 'react-query', label: 'React Query' },
  { id: 'node.js', label: 'Node.js' },
  { id: 'express.js', label: 'Express.js' },
  { id: 'python', label: 'Python' },
  { id: 'django', label: 'Django' },
  { id: 'rest', label: 'REST' },
  { id: 'graphql', label: 'GraphQL' },
  { id: 'jwt', label: 'JWT' },
  { id: 'oauth', label: 'OAuth' },
  { id: 'rabbitmq', label: 'RabbitMQ' },
  { id: 'mysql', label: 'MySQL' },
  { id: 'postgresql', label: 'PostgreSQL' },
  { id: 'mongodb', label: 'MongoDB' },
  { id: 'redis', label: 'Redis' },
  { id: 'aws', label: 'AWS' },
  { id: 'google-cloud', label: 'Google Cloud' },
  { id: 'jest', label: 'Jest' },
  { id: 'puppeteer', label: 'Puppeteer' },
  { id: 'ci-cd', label: 'CI/CD' },
  { id: 'git', label: 'Git' },
  { id: 'github', label: 'GitHub' },
  { id: 'agile', label: 'Agile' },
  { id: 'scrum', label: 'Scrum' },
  { id: 'jira', label: 'Jira' }
] as const

export type IProject = {
  id?: string
  title: string
  slug: string
  description: string
  image: string
  linkDemo: string
  linkGithub: string
  stacks: string[]
  isShow: boolean
  content: string
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date | null
}

export type IProjectPayloadCreate = {
  title: string
  slug: string
  description: string
  image: string
  linkDemo: string
  linkGithub: string
  stacks: string[]
  isShow: boolean
  content: string
  isFeatured: boolean
}

export type IProjectPayloadUpdate = { id: string } & IProjectPayloadCreate

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  isFeatured: z.boolean(),
  isShow: z.boolean(),
  slug: z.string().min(1),
  content: z.string().min(1),
  linkDemo: z.string().min(1),
  linkGithub: z.string().min(1),
  stacks: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.'
  })
})
