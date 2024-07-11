import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin2Fill } from "react-icons/ri";


export const MyDreams = ({ text, updatingInput, deleteDream }) => {
    return (
        <div>
        
        <ol>
         
 <li>{text}</li>
                  
            <LiaEdit onClick={updatingInput}></LiaEdit>
            <RiDeleteBin2Fill onClick={deleteDream}></RiDeleteBin2Fill>
            </ol>
        

        </div>
    )
}