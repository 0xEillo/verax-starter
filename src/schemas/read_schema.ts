import { schemaDataMapper } from '..'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question: string) =>
  new Promise((resolve) => rl.question(question, resolve))

const readSchema = async () => {
  const schemaId = await askQuestion('Please input the schemaID: ')
  const mySchema = await schemaDataMapper.findOneById(schemaId as string)
  console.log(mySchema)
  rl.close()
}

readSchema()
