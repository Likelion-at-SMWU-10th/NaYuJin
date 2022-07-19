import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Plan=()=>{
    const nextId=useRef(0);
    const index=nextId.current;
    const[value,setValue]=useState('');
    const [myinput,setInput]=useState([]);
    const what=(e)=>{
       e.preventDefault();
        const content=[
            index,
            value
        ]
        nextId.current+=1; 
        setInput([content,...myinput]);
        setValue('');
        
    }
    const change=(e)=>{
        setValue(e.target.value);
    }
    return(
        <div>
            <h1>방학때 하고싶은 일</h1>
            <ul>
                <li>스프링 스터디 & 클론코딩 잘 마무리하기 + !!!!기록하기!!!!</li>
                <li>멋사해커톤 잘 마무리하기 + !!!!기록하기!!!!</li>
                <li>알고리즘 공부!!!</li>
                <li>그동안 해온 플젝들 복기하기(노션)</li>
                <li>바다보러가기{' >_<'}</li>
                {myinput.map((item)=>(
                    <li key={item[0]}>{item[1]}</li>
                ))}
                <li>{
                    <form onSubmit={what}>
                        <input onChange={change} onSubmit={what} value={value} type='text' placeholder='쓰고 엔터치세용'/>
                    </form>
                    }</li>
            </ul>
            <Link to='/whoami'>뒤로 가기</Link>
        </div>
    );
}
export default Plan;