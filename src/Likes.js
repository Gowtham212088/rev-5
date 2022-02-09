import React from "react";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';

function Like() {
    const [Like, setLike] = useState(1)
    const [disLike, setDisLike] = useState(1)
  return (
    <div className="like">
      <IconButton onClick={()=>setLike(Like+1)} color="primary" aria-label="add to shopping cart" sx={{ fontSize: 40 }}>
        <Badge badgeContent={Like} color="success">
          <ThumbUpIcon sx={{ fontSize: 35 }} />
        </Badge>
      </IconButton>

      


      <span>
        {" "}
        <IconButton onClick={()=>setDisLike(disLike+1)} color="primary" aria-label="add to shopping cart" >
        <Badge badgeContent={disLike} color="success">
      <ThumbDownAltIcon sx={{ fontSize: 35 }} />
        </Badge>
        </IconButton>
      </span>
    </div>
  );
}





export default Like;
