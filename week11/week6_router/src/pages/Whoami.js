import React from 'react';
import { Link } from 'react-router-dom';

const whoAmI=()=>{
    return (
        <div>
            <h1>자기소개</h1>
            <ol>
                <li>이름 : 나유진</li>
                <li>취미 : 멍때리기, 누워있기</li>
                <li>최근의 관심사 :  {' '}
                <Link to='/plan'>방학 계획</Link> 세우기 (종강한지 오래지만..)</li>
            </ol>
        </div>
    );
}
export default whoAmI;