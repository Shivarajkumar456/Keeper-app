import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

// function CreateItem(x){
//     return <Note key = {x.key} title = {x.title}
//     content = {x.content} />;
// }

function App(){
    const [notes, setNotes] = useState([]);
    
    function onAdd(newNote){
        setNotes(prevNote => {
            return [...prevNote, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNote => {
            return prevNote.filter((noteItem, index) => {
                return index !== id;
            });
        });;
    }

    return <div>
        <Header />
        <CreateArea addNote = {onAdd} />
        {notes.map((noteItem, index) => {
            return <Note key={index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNote} />
        })}
      <Footer />
        <Footer />
    </div>;
}

export default App;