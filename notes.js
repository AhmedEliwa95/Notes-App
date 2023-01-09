const chalk = require('chalk');
const fs = require('fs');
const { title } = require('process');

const addNote= (title,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find(note=>note.title === title);


    if(!duplicateNote){   
        notes.push({
            title:title,
            body:body
        }) ;
        saveNotes(notes);
        console.log(chalk.green.inverse('Note Added'));
    }else{
        console.log(chalk.red.inverse('Note Title Taken!'))
    }
};
const saveNotes = (notes)=>{
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',notesJsON);
};

const loadNotes = ()=>{
    try{
        const bufferData = fs.readFileSync('notes.json');
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
};
const removeNote = (title)=>{
    const notes = loadNotes();
    const removedNote = notes.filter(note=>note.title === title);
    if (removedNote.length === 0){
        console.log(chalk.red.inverse('this note not exsit'));
    }else{
        const updatedNotes = notes.filter(note=>note.title !== title);
        console.log(chalk.green.inverse(`this title: ${title} have been removed successfuly`))
        saveNotes(updatedNotes);
    }
}

const getNotes =(title)=>{
    const notes = loadNotes();
    const note = notes.find(n=>n.title === title);
    if(!note){
        console.log(chalk.red('ERROR: no note added with this title'))
    }else{
        console.log(chalk.green.inverse(`${title} : ${note.body}`))
    }
}
const listNote =()=>{
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title))
    });
}
module.exports = {
    addNote:addNote,
    getNotes:getNotes,
    removeNote,
    listNote,
    getNotes

}