
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch } from 'react-redux';


function AppHeader() {
    const dispatch = useDispatch()

    function handleUser(){
       dispatch({
           type: 'ADD_USER',
           name: 'Ricardo'
       })
        
    }


    return (
        <>
        <header>
            <div className="banner">
            <nav>
                <ul>
                    <li class="nav-item">
                        <Link to="/single-payments">Payments</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/single-statement">Statement</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
         {/* <button  type="button" onClick={() => handleUser()}>Teste</button> */}
         </>
    );
}
export default AppHeader