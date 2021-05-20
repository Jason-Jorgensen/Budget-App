import React from 'react';
import Auth0ProviderWithHistory from '../../auth0-provider-with-history';
import AuthenticationButton from './authentication-button';
import UserIcon from '../UserIcon/UserIcon'

function Header() {
    return (
        <nav className="bg-white px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
                <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">Home</a>
                <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/forms">Forms</a>
                <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/profile">Profile</a>
                <div className="absolute right-0">
                    <UserIcon />
                </div>
            </div>
        </nav>

    )
}

export default Header
