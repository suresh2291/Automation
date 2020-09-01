#!/usr/bin/env node
const program = require('commander')
const { prompt } = require('inquirer');
const {
    getData
} = require('./index')

const data = {
    "fn": "First Name ",
    "ln": "Last Name ",
    "strt": "Street ",
    "dr": "Door/Flat No ",
    "ct": "City ",
    "st": "State ",
    "zp":"Zip Code ",
    "ctry": "Country ", 
    "ctn": "Contact No "
  }


program
    .version('1.0.0')
    .description('Synonym/Abbreviation expansion.\n 1. First Type  "amrutham showData or amrutham sd" to view the data \n 2.After Viewing Data type "amrutham inputData or amrutham ip" enter the data and see the output')


//Add a task
program
    .command('inputData')
    .alias('ip')
    .description('Input your data')
    .action(()=>{
        prompt([
            {
              name: data.fn,
              message: 'First Name',
              require:true,
              default:'NA'
            },
            {
              name: data.ln,
              message: 'Last Name ',
              require:true,
              default:'NA'
            },
            {
                name: data.strt,
                message: 'Street',
                default:'NA'
            },
            {
                name: data.dr,
                message: 'Door no',
                default:'NA'
              },
              {
                name: data.ct,
                message: 'City',
                default:'NA'
              },
              {
                  name: data.st,
                  message: 'State',
                  default:'NA'
              },
              {
                name: data.zp,
                message: 'ZipCode',
                default:'NA'
              },
              {
                name: data.ctry,
                message: 'Country',
                default:'NA'
                
              },
              {
                  name: data.ctn,
                  message: 'Contact No',
                  default:'NA'
              }
          ]).then(answers => {
            console.info(answers);
        })    
    }) 

program
    .command('showData')
    .alias('sd')
    .description('choose your abbrevations')
    .action(()=>{
            console.info(data)
    }) 
program.parse(process.argv)


