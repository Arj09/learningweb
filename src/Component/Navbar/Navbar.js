import React, { useState } from 'react'
import "./Navbar.css"



export const Navbar = ()=>{
    const [hide, setHide] = useState(false);
    const [currentUser, setCurrentUser] = useState("Un")
   
    const handlebtnSHow = ()=>{
        hide ? setHide(false) :setHide(true)
    }

    const handleLogout = ()=>{
        
       
       
    }

   
    return(
        <>
        <nav>
            <label className='logo'>MernStack</label>
            <div className='avatar'>
                <div className='circle' onClick={handlebtnSHow}>{currentUser}</div>
                <div className={hide ? 'option' : 'option1'}>
                    <button className='optbtn' onClick={handleLogout}>Logout</button>
                </div>

            </div>
        </nav>
        
        </>
    )
}