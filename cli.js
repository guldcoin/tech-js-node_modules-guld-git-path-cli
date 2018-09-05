#!/usr/bin/env node
const { getGitDir, pathEscape } = require('guld-git-path')
const program = require('commander')
const thispkg = require(`${__dirname}/package.json`)
const runCLI = require('guld-cli-run')

/* eslint-disable no-console */
program
  .name(thispkg.name.replace('-cli', ''))
  .version(thispkg.version)
  .description(thispkg.description)
program
  .command('escape [path]')
  .description('Convert a local path into an escaped blocktree path, like used in git repo names.')
  .action(async (p, options) => {
    console.log(pathEscape(p))
  })
program
  .command('dir [path]')
  .description('Guld tool for getting the git directory of a path.')
  .action(async (p, options) => {
    console.log(await getGitDir(p))
  })

runCLI.bind(program)(() => console.log(pathEscape()))
/* eslint-enable no-console */
module.exports = program
