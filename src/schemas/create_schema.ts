import { schemaDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const createSchema = async () => {
  const schemaName = await askQuestion('Please input the Schema name: ')
  const schemaDescription = await askQuestion(
    'Please input the Schema description: ',
  )
  const schemaContext = await askQuestion(
    'Please input the Schema context URL: ',
  )
  const schemaString = await askQuestion('Please input the Schema string: ')

  const schemaId = await schemaDataMapper.getIdFromSchemaString(
    schemaString as string,
  )
  console.log(`Schema ID: ${schemaId}`)

  const txHash = await schemaDataMapper.create(
    schemaName as string,
    schemaDescription as string,
    schemaContext as string,
    schemaString as string,
  )
  console.log(`Schema created! Transaction Hash: ${txHash}`)
  rl.close()
}

createSchema()
