#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
const program = require('commander');
const xu = require('./src/generate.js');
program
.command('generate')
.version('v' + require('./package.json').version)
.description('quick generate your file')
.alias('a')
.action(function(type, name){
    xu.run(type, name);
});
program.parse(process.argv);
