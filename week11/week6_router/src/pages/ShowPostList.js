import axios from "axios";
import React, { useEffect, useState } from "react";
import EachPost from './EachPost';

const ShowPostList=({apiUrl})=>{
    const [postList,setPostList]=useState([]);
    useEffect(()=>{
        axios.get(`${apiUrl}list/?page=1&page_size=10`).then(response =>{
            setPostList(response.data.results);
        })
    },[])

    return (
        <div>
            <h1>글 목록</h1>
            <ul>
                {postList.map((element)=>(
                    <EachPost
                        key={element.id}
                        title={element.title}
                        postID={element.id}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ShowPostList;