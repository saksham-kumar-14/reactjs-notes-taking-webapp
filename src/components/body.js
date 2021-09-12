import  React, { useState } from 'react'
import EditNote from './edit_note';
import NoteDetail from './note_details';

//showing each detailed note 
function note_details_showing(set_show_note,set_should_show,e){
    set_should_show(true); 
    set_show_note(e); 
}

//HALF-EDIT operation
function edit_note(id,set_edit_id,set_editing){
    set_editing(true); 
    set_edit_id(id); 
}

//DELETE operation
function delete_note(element_id,all_notes,set_all_notes,set_delete_pop_up){
    let arr = []
    for(let i=0;i<all_notes.length;i++){
        if(all_notes[i].id != element_id){
            arr.push(all_notes[i]); 
        }
    }
    const temp = element_id-1; 
    if(temp>=0){
        for(let i=temp;i<arr.length;i++){
            arr[i].id -= 1; 
        }
    }
    
    set_all_notes(arr); 
    set_delete_pop_up(true); 
}

//main body 
const Body=({all_notes,set_all_notes,delete_pop_up,set_delete_pop_up})=>{
    const [should_show,set_should_show] = useState(false); 
    const [show_note,set_show_note] = useState("lsdkjflsakj"); 
    const [is_editing,set_editing] = useState(false); 
    const [edit_id,set_edit_id] = useState(-1); 
    return( 
        <>
            <div className="all-notes-link">
                {all_notes.map((element,index)=>{
                    return(
                        <>
                            {!should_show && <div className="note-link">
                                <a className="note-title-link" onClick={()=>{note_details_showing(set_show_note,set_should_show,element);}}> ⚪ {element.title}</a>
                                <button className="note-edit-btn" onClick={()=>{edit_note(element.id,set_edit_id,set_editing)}}>Edit</button>
                                <button className="note-delete-btn" onClick={()=>{delete_note(element.id,all_notes,set_all_notes,set_delete_pop_up)}}>Delete</button>
                            </div>}
                            
                            {!should_show && is_editing && edit_id===element.id && <EditNote set_editing={set_editing} set_all_notes={set_all_notes} all_notes={all_notes} edit_id={edit_id}/>}

                            {index!=all_notes.length-1 && !should_show && <hr className="body-divider"></hr>}

                        </>
                    )
                })}
                {should_show &&  <NoteDetail note={show_note} set_should_show={set_should_show}/>}
            </div>
        </>
    )
}

export default Body

