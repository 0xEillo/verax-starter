import { portalDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const createPortal = async () => {
  const portalName = await askQuestion('Please input the name of your portal: ')
  const portalDescription = await askQuestion(
    'Please input the description for your portal: ',
  )
  const portalOwnerName = await askQuestion(
    'Please input owner name of your portal: ',
  )
  let modulesInput = await askQuestion(
    'Please input the modules of your portal (leave empty if none): ',
  )
  let modules = modulesInput ? modulesInput : []

  const newPortal = await portalDataMapper.deployDefaultPortal(
        modules as `0x${string}`[],
        portalName as string,
        portalDescription as string,
        true,
        portalOwnerName as string,
  );
  console.log(newPortal)
  rl.close()
}

createPortal()
