import { $ } from 'bun'

await $`git clone https://github.com/0xEillo/verax-starter.git`
await $`cd verax-starter && bun install`
