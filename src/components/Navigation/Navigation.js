import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import client from "./client.png";
import { Divider } from '@material-ui/core';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                    <nav className='navbar'>
                        
                        <a href="https://www.flaticon.com/free-icons/client" title="client icons"><img src={client}/></a>
                        {/* <h3 className="logo">My Clients</h3> */}
                        <div className='nav-links'>
                            <Button style={{marginTop:'10px'}} variant="contained" onClick={onButtonSubmit} color="orange">
                                Get Users
                            </Button>
                        </div>
                    </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
