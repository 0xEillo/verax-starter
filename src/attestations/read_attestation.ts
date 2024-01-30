import { attestationDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const readAttestation = async () => {
  const attestationId = await askQuestion('Please input the attestationId: ')
  const myAttestation = await attestationDataMapper.findOneById(
    attestationId as string,
  )
  console.log(myAttestation)
  rl.close()
}

readAttestation()
