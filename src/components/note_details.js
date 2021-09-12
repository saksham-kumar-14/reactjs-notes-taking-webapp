import React from "react";

function go_back(set_should_show){
    set_should_show(false); 
}

const NoteDetail=({note,set_should_show})=>{
    return(
        <>
            <div className="note-details-temp">
                <div className="note-details">
                    <h2 className="note-details-heading">{note.title}</h2> 
                    <hr/>
                    <p className="note-details-description">{note.description}</p>
                    <button className="note-details-go-back-btn" onClick={()=>{go_back(set_should_show)}}>Go Back</button>
                </div>
            </div>
            
        </>
    )
}

export default NoteDetail






