import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menubar=()=>{
    return (
        <div>
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/whoami'>Who Am I</Link>
                </li>
                {/* <li>Home</li> */}
                {/* <li>Who Am I ?</li> */}
            </ul>
            <Outlet/>
        </div>
    );
}
export default Menubar;