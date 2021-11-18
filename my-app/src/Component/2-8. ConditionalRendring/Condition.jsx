import React, { useState } from 'react'



function UserGreeting(props){
    return <h1>{props.name}, Welcome. It's {props.count} times.</h1>;
}

function GuestGreeting(props){
    

    return <h1>please Sign Up</h1>;
    }


function Greeting(props){
    
    // eslint-disable-next-line no-lone-blocks
    
    
    return( <div>
        {props.isLoggedIn ? <div><UserGreeting name="jimmy" count={0}/>
        
        </div>
        : <div><GuestGreeting/> </div>
    }
    </div>);
}


export default function Condition() {
   
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    let button;
    // eslint-disable-next-line no-lone-blocks
    const handleLoginClick = () =>{
        console.log('login');
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () =>{
        console.log('logout');
        setIsLoggedIn(false);
    }
   
    
   
    return (
        <div>
            <Greeting isLoggedIn ={isLoggedIn} />
            {isLoggedIn ? <button onClick={handleLogoutClick}>Logout</button>
            : <button  onClick ={handleLoginClick}>Login</button>}
    
            
        </div>
    )
}
