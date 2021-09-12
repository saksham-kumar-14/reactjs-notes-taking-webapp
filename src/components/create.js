import React, { useState } from "react";
import stored_notes from "./notes_api";

function adding_note(title,description,all_notes,set_all_notes,set_is_creating){
    let arr = [];
    for(let i=0;i<all_notes.length;i++){
        arr.push(all_notes[i]);
    }
    const new_obj = {"id" : all_notes.length+1,"title" : title,"description": description}; 
    arr.push(new_obj);  
    set_all_notes(arr); 
    set_is_creating(false); 
}

const Create=({set_is_creating,all_notes,set_all_notes})=>{
    const [title,set_title] = useState(undefined); 
    const[description,set_description] = useState(undefined); 
    return(
        <>
            <div className="note-creation">
                <input className="note-creation-title" onChange={(event)=>{set_title(event.target.value)}} placeholder="Title"></input>
                <textarea className="note-creation-description" onChange={(event)=>{set_description(event.target.value)}} placeholder="Description"></textarea>
                <button className="note-creation-submit-btn" onClick={()=>{adding_note(title,description,all_notes,set_all_notes,set_is_creating)}} >Submit</button>
                <button className="note-creation-cancel-btn" onClick={()=>{set_is_creating(false)}}>Cancel</button>
            </div>
        </>
    )
}

export default Create
