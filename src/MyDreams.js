import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin2Fill } from "react-icons/ri";


export const MyDreams = ({ text, updatingInput, deleteDream, index }) => {
    return (
        <div>
        
        <ol>
         
 {index+1}.{text}
                  
            <LiaEdit onClick={updatingInput}></LiaEdit>
            <RiDeleteBin2Fill onClick={deleteDream}></RiDeleteBin2Fill>
            </ol>
        

        </div>
    )
}