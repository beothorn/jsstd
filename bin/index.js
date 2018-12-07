#!/usr/bin/env node

const prettyjson = require('prettyjson');
const getStdin = require('get-stdin');
const program = require('commander');


getStdin().then(str => {
    program
    .version('0.0.1')
    .description('Concats stdin with code and eval')
    .option('-u, --unsafe', 'Uses eval on stdin instead of JSON.parse . Make sure you trust your stdin.') 
    .option('-p, --pretty', 'Pretty print result')
    .option('-e, --eval <code>', 'Code concatenated to stdin', '')
    .option('-v, --verbose', 'Verbose mode', false)
    .parse(process.argv);

    let input = '';
    if(program.unsafe){
	if(program.verbose) console.log('Running unsafe');
        input = eval('('+str+')');
    }else{
	if(program.verbose) console.log('Running safe');
        input = JSON.parse(str);
    }

    let toEval = '('+JSON.stringify(input)+program.eval+')';
    if(program.verbose) console.log('eval = '+toEval);
    let result = eval(toEval);
    if(program.pretty){
        console.log(prettyjson.render(result));
    }else{
        console.log(JSON.stringify(result));
    }
});
