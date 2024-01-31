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
  let attestationIdString = attestationId as string
  // Check if the user input starts with '0x', if not, prepend it
  if (!attestationIdString.startsWith('0x')) {
    attestationIdString = '0x' + attestationIdString
  }
  const myAttestation = await attestationDataMapper.findOneById(
    attestationIdString.toLowerCase(),
  )
  console.log(myAttestation)
  rl.close()
}

readAttestation()
