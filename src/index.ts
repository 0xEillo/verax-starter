import { VeraxSdk } from '@verax-attestation-registry/verax-sdk'
import type { Hex } from 'viem'

const privateKey = process.env.PRIVATE_KEY as Hex

// Default configuration for Linea Mainnet
// export const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_MAINNET, privateKey)
export const veraxSdk = new VeraxSdk(
  VeraxSdk.DEFAULT_LINEA_TESTNET,
  undefined,
  privateKey,
)

// Each Verax class has its corresponding DataMapper
// Get them from the SDK instance
export const portalDataMapper = veraxSdk.portal // RW Portals
export const schemaDataMapper = veraxSdk.schema // RW Schemas
export const moduleDataMapper = veraxSdk.module // RW Modules
export const attestationDataMapper = veraxSdk.attestation // RW Attestations
export const utilsDataMapper = veraxSdk.utils // Utils
