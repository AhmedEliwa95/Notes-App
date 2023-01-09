const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes');



yargs.version('1.1.0');

// create add command
yargs.command({
    command:'add',
    describe:'Add a new Note !!',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    }
});

// create remove commmand
yargs.command({
    command:'remove',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'Note Title'
        }
    },
    describe:'removing note',
    handler:(argv)=>{
         notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',

    describe:'to list our notes',
    handler:()=>notes.listNote()
});

yargs.command({
    command:'read',
    builder:{
        title:{
            demandOption:true,
            type:'string',
            describe:'Note Title to read'
        }
    },
    describe:'to read our notes',
    handler(argv){
        notes.getNotes(argv.title);
    }
})


// console.log(yargs.argv);
yargs.parse()
