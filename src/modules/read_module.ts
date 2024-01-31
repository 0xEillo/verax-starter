import { moduleDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const readModule = async () => {
  const moduleId = await askQuestion('Please input the moduleId: ')
  const moduleIdString = moduleId as string
  const myModule = await moduleDataMapper.findOneById(
    moduleIdString.toLowerCase(),
  )
  console.log(myModule)
  rl.close()
}

readModule()
