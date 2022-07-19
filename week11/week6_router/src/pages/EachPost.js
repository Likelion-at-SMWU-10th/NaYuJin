import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EachPost({title,postID}){
    const navigate=useNavigate();
    const goPost=()=>{
        navigate(`${`/post/`+postID}`);
    }
    return(
        <div onClick={goPost}>
            {title}
        </div>
    );
}

export default EachPost;