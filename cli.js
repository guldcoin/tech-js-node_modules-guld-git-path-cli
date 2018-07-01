#!/usr/bin/env node
const { getGitDir, pathEscape } = require('guld-git-path')
const program = require('commander')
const VERSION = require('./package.json').version

/* eslint-disable no-console */
program
  .name('guld-git-path')
  .description('Blocktree path resolution tools.')
  .version(VERSION)
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
    console.log(getGitDir(p))
  })

program.parse(process.argv)
if (program.args.length === 0) console.log(pathEscape())
