import { useEffect, useState } from 'react';
import { MyDreams } from './MyDreams';
import { getAllDreams, addDream, editDream, deleteDream } from './FetchDreams';


function App() {

const [myDream, setDreams] = useState([]) //from Fetch 
const [dream, setDream] = useState("") //title
const [editing, setEditing] = useState(false);
const [dreamId, setDreamId] = useState("")


useEffect(() => {
  getAllDreams(setDreams)
}, [])

const updatingInput = (_id, dream) => {
  setEditing(true)
  setDream(dream)
  setDreamId(_id)

}

  return (
    <div>
      <h1>100 DREAMS</h1>
      
      <input 
      type="text"
      placeholder="Add your dream"
      value = {dream}
      onChange = {(e) => setDream(e.target.value)}
      />

      <button 
      disabled={!dream || myDream.length >= 100}
      onClick=
        {editing ? () => editDream(dreamId, dream, setDream, setDreams, setEditing) : () => addDream(dream, setDream, setDreams) }>
        {editing ? "Edit" : "Add"}
      </button>
        
       {myDream.length >= 100 && (
        <p>You have reached the maximum limit of 100 dreams.</p>
       
      )}
        {/* <MyDreams text="we did it..." /> */}
        
      {myDream.map((dreaaam, index) => <MyDreams text={dreaaam.dream} key={dreaaam._id}
      index={index}
      updatingInput={() => updatingInput(dreaaam._id, dreaaam.dream)}
      deleteDream={() => deleteDream(dreaaam._id, setDreams)}
      />
      )}



    </div>
  )
  }

export default App;