import React, { useState } from "react";
import Create from "./create";

const Header=({all_notes,set_all_notes})=>{
    const[is_creating,set_is_creating] = useState(false); 
    return(
        <>
            <div className="note-input">
                <button className="note-input-btn" onClick={()=>{set_is_creating(true)}}>Add a note + </button>
            </div>
            {is_creating && <div className="note-input-form">
            <Create set_is_creating={set_is_creating} all_notes={all_notes} set_all_notes={set_all_notes}/>
            </div>  }
        </>
    )
}

export default Header


