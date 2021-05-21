import React, {useState, useEffect} from 'react';
import AuthenticationButton from '../Header/authentication-button';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export default function UserIcon() {
    const { user } = useAuth0();
    
    const [show, setShow] = useState(false);

    useEffect(() => {

    }, [])
    return (
        <div className="relative float-right mr-3" style={{width: "40px"}}>
            <button className="user-icon block h-12 w-12 rounded-full overflow-hidden focus:outline-none" onClick={() => setShow(!show)}>
                <img src={user?.picture} style={{ borderRadius: "100px", float: "right" }} />
            </button>


            {show && <div className="z-10 user-dropdown absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
                <a href="#" className="transition-colors duration-200 block px-4 py-2 text-gray-900 hover:bg-gray-300">Update Profile</a>
                <div className="py-2">
                    <hr></hr>
                </div>
                <AuthenticationButton />
            </div>}
        </div>
    )
}
