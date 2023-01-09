this is a simple app to write notes from command line and save it in in a JSON file,
I know it's too simple but it's to learn how to deal with JSON files and how to save inputs from command propmt 

you can use this app by 4 running commands
1- "ADD" : it's to add anote with a title and you can run it like this:
     node app.js add --title="the title of ur note" --body="the body of ur note"
2- "REMOVE : it's to remove a note by it's title
     node app.js remove --title="the title of a saved note" 
3- "READ" : it will return the body of a saved note     
        node app.js remove --title="the title of a saved note"
4- "LIST" : it will return to u the remaining notes 
       node app.js list
