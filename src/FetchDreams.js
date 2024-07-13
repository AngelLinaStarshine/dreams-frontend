import axios from 'axios';

const getAllDreams = (setDreams) => {
    axios.get("https://dreams-backend-1.onrender.com")
    .then(({data}) => {console.log(data)
    setDreams(data);

    })
}

const addDream = (dream, setDream, setDreams) => {  //title, setTitle, setMeals
    axios.post(`https://dreams-backend-1.onrender.com/saveDreams`, { dream })
    .then((data) => {
        console.log(data);
        setDream("");
        getAllDreams(setDreams)

    })
}


const editDream = (dreamId, dream, setDream, setDreams, setEditing ) => {
    axios.post(`https://dreams-backend-1.onrender.com/editDream`, { _id: dreamId, dream })
    .then((data) => {
        console.log(data)
        setDream("")
        setEditing(false)
        getAllDreams(setDreams)

    })
}

const deleteDream = (_id, setDreams) => {
    axios.post(`https://dreams-backend-1.onrender.com/deleteDream`, { _id })
    .then((data) => {
        console.log(data)
        getAllDreams(setDreams)

    })
}


export {getAllDreams, addDream, editDream, deleteDream };