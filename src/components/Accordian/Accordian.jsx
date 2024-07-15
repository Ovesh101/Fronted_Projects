import { useState } from "react"
import data from "./data"

const Accordian = () => {
    const [singleSelect , SetSingleSelect] = useState(null);
    const [isMultiSelect , setIsMultiSelect] = useState(false);
    const [multiSelect , setMultiSelect] = useState([]);

    console.log(isMultiSelect);
 
    const handleSingleSelect = (getCurrentId)=>{
        
        SetSingleSelect(singleSelect === getCurrentId ? null : getCurrentId);

    }
    const handleMultiSelection = (getCurrentId)=>{
        let copyArray = [...multiSelect];
        if(copyArray.includes(getCurrentId)){
            copyArray = copyArray.filter((id)=>id !== getCurrentId);
        }else{
            copyArray.push(getCurrentId);
        }

        setMultiSelect(copyArray);

        

    }

   

  return (
    <div className="w-[100rem] flex bg-blue-300">
          <button className="text-center" onClick={()=> {
            SetSingleSelect(null);
            setMultiSelect([]);
      
            setIsMultiSelect((prev)=>!prev)
          }
            }>Enable MultiSelection</button>
  
   {
    data && data.length > 0 ?
    (data.map((dataItem)=>(
         <div key={dataItem.id}>
            
            <h2 onClick={
                isMultiSelect 
                ?()=>handleMultiSelection(dataItem.id)
                :()=>handleSingleSelect(dataItem.id)
                }>{dataItem.title}</h2>
            <span>{singleSelect === dataItem.id ? "Collapse" : "Expand"}</span>

                {singleSelect === dataItem.id || multiSelect.includes(dataItem.id)  ? (
                    <p>{dataItem.description}</p>
                ) : ""}



         </div>
        
    )))

     : (<div>loading...</div>) 
   }

    </div>
  )
}

export default Accordian