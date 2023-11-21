import React, {useEffect, useState} from 'react';

 import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "../Styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () =>{

    const [openNavbar, setopenNavbar] = useState(false);

    const location = useLocation();

    useEffect(() =>{
        setopenNavbar(false);
    }, [location]);

    
    return(
         <div className="navbar" id={openNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setopenNavbar((prev) => !prev);
                }}
                >
                    <ReorderIcon/>
                </button>
            </div>

            <div className="links">
                <Link to="/" > Home </Link>
                <Link to="/journey" > Journey </Link>
                <Link to="/skill">Skill</Link>
                <Link to="/contact"> Contact </Link>
                
            </div>

            

                


        </div>
    )
}

export default Navbar;