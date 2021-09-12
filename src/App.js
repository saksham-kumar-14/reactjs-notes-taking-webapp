import React, { useState } from 'react'; 
import s from './style.css'; 
import Header from './components/header';
import Body from './components/body';
import stored_notes from './components/notes_api';

function remove_pop_up(set_delete_pop_up){
  set_delete_pop_up(false); 
}

const App=()=>{
  const[all_notes,set_all_notes] = useState(stored_notes)
  const[delete_pop_up,set_delete_pop_up] = useState(false); 
  return(
    <>
      {delete_pop_up && <div className="delete-pop-up">
        <p className="delete-pop-up-text">You have deleted a note</p>
        <button onClick={()=>{remove_pop_up(set_delete_pop_up)}} className="delete-pop-up-btn"> X </button>
      </div>}

      <div  className="heading">
        <span className="heading-1">Notes App</span> <br/> 
        <span className="heading-2">Just Note It Down!</span>
      </div>

      <Header all_notes={all_notes} set_all_notes={set_all_notes}/>
      <Body all_notes={all_notes} set_all_notes={set_all_notes} delete_pop_up={delete_pop_up} set_delete_pop_up={set_delete_pop_up}/>

    </>
  )
}

export default App 


