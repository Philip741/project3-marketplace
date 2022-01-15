import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import './aside.css'

function aside() {
    return (
        <div className="aside">
            <div className="search">
             <input type="text" placeholder='Search' id="ip2"/>
             
             <BiSearch className="searchIcon"/>
             </div>
             <div><p>test</p></div>
        </div>
    )
}

export default aside;