import React, { useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';



export const Navbar = ()=>{
    const [hide, setHide] = useState(false);
    const [currentUser, setCurrentUser] = useState("Un")
    const navigate = useNavigate()
   
    const handlebtnSHow = ()=>{
        hide ? setHide(false) :setHide(true)
    }

    const handleLogout = ()=>{
        navigate("/login")

        
       
       
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