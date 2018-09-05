# guld-git-path-cli

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-path-cli) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-guld-git-path-cli/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/cli/guld-git-path-cli.html)

[![node package manager](https://img.shields.io/npm/v/guld-git-path-cli.svg)](https://www.npmjs.com/package/guld-git-path-cli) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-path-cli.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-guld-git-path-cli?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-guld-git-path-cli.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-guld-git-path-cli/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path-cli/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path-cli) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path-cli/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-guld-git-path-cli?type=dev)

Guld tool for getting the git directory of a path, or converting local paths into git-friendly repo names.

### Install

##### Node

```sh
npm i -g guld-git-path-cli
```

### Usage

##### CLI

```sh
guld-git-path --help

  Usage: guld-git-path [options] [command]

  Guld tool for getting the git directory of a path, or converting local paths into git-friendly repo names.

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    escape [path]  Convert a local path into an escaped blocktree path, like used in git repo names.
    dir [path]     Guld tool for getting the git directory of a path.

```

### License

MIT Copyright isysd
