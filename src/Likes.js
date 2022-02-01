import React from "react";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge from '@mui/material/Badge';



function Like(){



    return(
        <div className="like">


<IconButton color="primary" aria-label="add to shopping cart">
ThumbUpIcon  
      </IconButton>
        
         
          <span> <ThumbDownAltIcon/> </span> 
        </div>
    )
}

export default Like;