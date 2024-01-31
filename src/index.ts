import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import type { Hex } from 'viem'

const privateKey = process.env.PRIVATE_KEY as Hex

let veraxSdk
if (privateKey) {
  console.log('SDK read/write enabled.\n')
  veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_TESTNET, undefined, privateKey)
} else {
  console.log(
    'SDK read enabled (fill in PRIVATE_KEY in .env to enable read/write)\n',
  )
  veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_TESTNET)
}

// Each Verax class has its corresponding DataMapper
// Get them from the SDK instance
export const portalDataMapper = veraxSdk.portal // RW Portals
export const schemaDataMapper = veraxSdk.schema // RW Schemas
export const moduleDataMapper = veraxSdk.module // RW Modules
export const attestationDataMapper = veraxSdk.attestation // RW Attestations
export const utilsDataMapper = veraxSdk.utils // Utils
