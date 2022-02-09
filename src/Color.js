import React from "react";
import { useState } from "react";

export default function Addcolor(){

    const [color, setColor] = useState()

const styles = {background: color}

const [colorList,setColorList] = useState(["green", "yellow", "blue", "beige"])

    return(
        <div className="color">
               <input 
               style={styles}
               onChange={(event)=>{
                   setColor(event.target.value)
               }}
               >
               </input>


<button 
onClick={()=>{setColorList([...colorList, color])}}
>
Click here
</button>

               {colorList.map((clr)=>(
                <ColorBox color = {clr} />
    ))}                        

                

            </div>
    )

}


function ColorBox(props){

const styles = {
    background : props.color,
    marginTop : "25px",
    width : "750px",
    height : "25px"
}

    return(
        <div
        style={styles}
        >

            </div>
    )
}

