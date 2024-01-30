import { portalDataMapper } from '..'

import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const readPortal = async () => {
  const portalId = await askQuestion('Please input the portalId: ')
  const myPortal = await portalDataMapper.findOneById(portalId as string)
  console.log(myPortal)
  rl.close()
}

readPortal()
