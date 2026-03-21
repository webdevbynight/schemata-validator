# schemata-validator

Check the validity of Schema.org vocabulary used in JSON-LD data

![License: MIT](https://img.shields.io/github/license/webdevbynight/schemata-validator)
[![ESM-only package](https://img.shields.io/badge/package-ESM--only-ffe536)](https://nodejs.org/api/esm.html)
[![Conventional Commits 1.0.0](https://img.shields.io/badge/Conventional_Commits-1.0.0-fe5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Released with release-change](https://img.shields.io/badge/Released_with-release--change-8d8d8d)](https://github.com/release-change/release-change)
![NPM latest version](https://img.shields.io/npm/v/schemata-validator/latest)
![Node support](https://img.shields.io/node/v/schemata-validator)
![Build status](https://img.shields.io/github/actions/workflow/status/webdevbynight/schemata-validator/run-tests.yml)

**schemata-validator** takes JSON-LD and HTML files using JSON-LD data and returns detailed validation results.

## Installation

Install package for Node.js:
```
pnpm add --save-dev schemata-validator
```
You can also install it using `npm`:
```
npm install --save-dev schemata-validator
```

## Usage

### Options

##### data

Type: `array`

Specifies which JSON-LD data to be sent to validation. This option takes precedence over the other options.

##### files

Type: `array`  
CLI arguments: `-f <space-separated list of files>`, `--files <space-separated list of files>`

Specifies which files to be sent to validation. This option takes precedence over the other options.

##### paths

Type: `array`  
CLI arguments: `-p <space-separated list of paths>`, `--paths <space-separated list of paths>`

Specifies which folders or files to be sent to validation. When omitted, all files are validated (skipping the `node_modules` folder), unless the `exclude` option is specified.

##### exclude

Type: `array`
CLI arguments: `-e <space-separated list of paths>`, `--exclude <space-separated list of paths>`

Lists strings to match in paths to skip. When omitted, all files specified by `files` options if defined (all files otherwise) are validated (skipping the `node_modules` folder).

##### dryRun

Type: `boolean`  
Default: `false`
CLI arguments: `-d`, `--dry-run`

Bypasses the validation (for usage while building CI).

### CLI

schemata-validator can be used as a CLI tool.

```
schemata-validator [flags]
```

#### `package.json` scripts

You can run `schemata-validator` from the `scripts` section of your `package.json` file.

```json
{
  "scripts": {
    "one-folder": "schemata-validator --paths docs",
    "one-file": "schemata-validator --files docs/index.html",
    "all-files": "schemata-validator"
  }
}
```

#### Examples

- `schemata-validator`: validates all HTML files using JSON-LD data in the project;
- `schemata-validator --paths docs --exclude build tmp`: validates all HTML files using JSON-LD data in the `docs/` folder, except files which have `build` or `tmp` anywhere in their pathname or filename;
- `schemata-validator --files docs/index.html`: validates only the specified files.

### Application code

In addition to the CLI interface, schemata-validator can be imported and called in ESM and TypeScript projects.

```js
import { SchemataValidator } from "schemata-validator";

const jsonld = `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Web page title",
  "description": "Web page description"
}`;
const options = { data: [jsonld] };
const validator = new SchemataValidator(options);
const validate = await validator.validate();
validator.log(validate); // Outputs the reporting object
```

## Get help

- [Stack Overflow](https://stackoverflow.com/questions/tagged/schemata-validator)

## Copyright & licence

© 2026 Victor Brito — Released under the [MIT licence](./LICENSE).
