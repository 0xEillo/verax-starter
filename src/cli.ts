#!/usr/bin/env bun

import { $ } from 'bun'

async function main() {
  try {
    await $`git clone https://github.com/0xEillo/verax-starter.git`
    await $`cd verax-starter && bun install`
    console.log('Verax-starter is set up!')
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

main()
