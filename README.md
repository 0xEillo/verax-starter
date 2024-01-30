# Verax Starter

This is a starter project for Verax, a JavaScript runtime. It includes scripts for creating and reading schemas, modules, portals, and attestations.

## Installation

To install the project dependencies, run the following command:
bash
bun install

## Usage

The project includes several scripts that you can run. Here are some examples:

First: go to ./src/index.ts and chose your chain configuration.
Second: add your privateKey to a .env file

- To build the project, run:

bash
bun run build

- To read a schema, run:

  ```bash
  bun run read-schema
  ```

- To create a schema, run:

  ```bash
  bun run create-schema
  ```

- To read an attestation, run:

  ```bash
  bun run read-attestation
  ```

- To create an attestation, run:

  ```bash
  bun run create-attestation
  ```

- To read a module, run:

  ```bash
  bun run read-module
  ```

- To create a portal, run:

  ```bash
  bun run create-portal
  ```

- To read a portal, run:
  ```bash
  bun run read-portal
  ```

Please note that these scripts will prompt you for necessary input in the command line.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
