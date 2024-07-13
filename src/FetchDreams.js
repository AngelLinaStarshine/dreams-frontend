import axios from 'axios';

const getAllDreams = (setDreams) => {
    axios.get("http://localhost:8000")
    .then(({data}) => {console.log(data)
    setDreams(data);

    })
}

const addDream = (dream, setDream, setDreams) => {  //title, setTitle, setMeals
    axios.post(`http://localhost:8000/saveDreams`, { dream })
    .then((data) => {
        console.log(data);
        setDream("");
        getAllDreams(setDreams)

    })
}


const editDream = (dreamId, dream, setDream, setDreams, setEditing ) => {
    axios.post(`http://localhost:8000/editDream`, { _id: dreamId, dream })
    .then((data) => {
        console.log(data)
        setDream("")
        setEditing(false)
        getAllDreams(setDreams)

    })
}

const deleteDream = (_id, setDreams) => {
    axios.post(`http://localhost:8000/deleteDream`, { _id })
    .then((data) => {
        console.log(data)
        getAllDreams(setDreams)

    })
}


export {getAllDreams, addDream, editDream, deleteDream };