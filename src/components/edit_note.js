import React, { useState } from "react";

//the second half of editing
function edit_note(set_editing,all_notes,set_all_notes,title,description,edit_id){
    let edited_obj = {
        "id" : edit_id, 
        "title" : title, 
        "description" : description, 
    }; 
    const arr = all_notes; 
    arr[edit_id-1] = edited_obj; 
    set_all_notes(arr); 
    
    set_editing(false); 
}


const EditNote=({set_editing,all_notes,set_all_notes,edit_id})=>{
    const [title,set_title] = useState(undefined); 
    const[description,set_description] = useState(undefined); 
    return(
        <div className="edit-note-form-outer">
            <div className="edit-note-form">
                <input placeholder="New Title" className="edit-note-form-title" onChange={(e)=>{set_title(e.target.value)}} type="text"></input> <br/>
                <textarea placeholder="New Description" className="edit-note-form-description" onChange={(e)=>{set_description(e.target.value)}} ></textarea> <br/>
                <button className="edit-note-form-submit-btn" onClick={()=>{edit_note(set_editing,all_notes,set_all_notes,title,description,edit_id)}}>Submit</button> 
                <button className="edit-note-form-cancel-btn" onClick={()=>{set_editing(false)}}>Cancel</button> 
            </div>
        </div>
    )
}

export default EditNote




