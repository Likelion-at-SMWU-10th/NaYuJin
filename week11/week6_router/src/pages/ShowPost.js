import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowPost=({apiUrl})=>{
    const [post,setPost]=useState(null);
    const Params=useParams();
    useEffect(()=>{
        axios.get(`${apiUrl}posts/${Params.postID}`)
        .then(response=>{
            setPost(response.data);
        })
    },[])
    return (
        <>
        <h1>글 목록</h1>
        <strong>제목 : {post&& post.title}</strong>
        <div>내용 : {post&& post.contents}</div>
        </>
    );
}

export default ShowPost;