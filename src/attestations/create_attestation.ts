import type { AttestationPayload } from '@verax-attestation-registry/verax-sdk'
import { portalDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const createAttestation = async () => {
  const portalAddress = await askQuestion(
    'Please input the address of your portal: ',
  )
  const schemaId = await askQuestion(
    'Please input the schemaId for your attestion: ',
  )
  const expirationDate = await askQuestion(
    'Please input the expiration date (0 if none): ',
  )
  const subject = await askQuestion(
    'Please input the subject of the attestation: ',
  )
  
  const attesationData = await askQuestion('Please input the attestation data: ')

  const attestationPayload: AttestationPayload = {
    schemaId: schemaId as `0x${string}`,
    expirationDate: expirationDate as number,
    subject: subject as string,
    attestationData: attesationData as object[],
  }
  const newAttestation = await portalDataMapper.attest(portalAddress as `0x${string}`, attestationPayload, []);
    console.log(newAttestation)
  rl.close()
}

createAttestation()
