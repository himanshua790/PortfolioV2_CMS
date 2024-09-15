import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getCareers = (): Prisma.CareerCreateInput[] => [
  {
    position: 'Software Engineer',
    company: 'Stealth Startup',
    logo: 'stealth_startup.png',
    location: 'Remote',
    locationType: 'remote',
    type: 'part-time',
    startDate: new Date('2024-06-01'),
    endDate: undefined,
    link: 'www.stealthstartup.com',
    slug: 'stealth-startup',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    position: 'Senior Software Engineer',
    company: 'Cheers Infinity',
    logo: 'cheers_infinity.png',
    location: 'Remote',
    locationType: 'remote',
    type: 'full-time',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2024-02-01'),
    link: 'www.cheersinfinity.com',
    slug: 'cheers-infinity',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    position: 'Software Developer',
    company: 'RoaDo',
    logo: 'roado.png',
    location: 'Bangalore, India',
    locationType: 'on-site',
    type: 'full-time',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-07-01'),
    link: 'www.roado.com',
    slug: 'roado',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    position: 'Full-Stack Developer',
    company: 'Autowriter.ai',
    logo: 'autowriter.png',
    location: 'Remote',
    locationType: 'remote',
    type: 'full-time',
    startDate: new Date('2021-05-01'),
    endDate: new Date('2022-01-01'),
    link: 'www.autowriter.ai',
    slug: 'autowriter',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    position: 'Python Developer Intern',
    company: 'The Kabadiwala',
    logo: 'kabadiwala.png',
    location: 'Bhopal, India',
    locationType: 'on-site',
    type: 'internship',
    startDate: new Date('2021-01-01'),
    endDate: new Date('2021-05-01'),
    link: 'www.thekabadiwala.com',
    slug: 'the-kabadiwala',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const seedUser = async () => {
  const email = 'youremail' // Replace with your desired email
  const name = 'yournamei' // Replace with your desired name
  const password = 'yourpassword' // Replace with your desired password

  // Check if the user already exists to avoid duplicate seeding
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (!existingUser) {
    // Create the user
    await prisma.user.create({
      data: {
        email,
        name,
        password: password
      }
    })

    console.log('User created:', email)
  } else {
    console.log('User already exists:', email)
  }
}

const main = async () => {
  // Seed Careers
  await prisma.career.deleteMany({})
  await Promise.all(getCareers().map(career => prisma.career.create({ data: career })))

  // Seed User
  await seedUser()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
