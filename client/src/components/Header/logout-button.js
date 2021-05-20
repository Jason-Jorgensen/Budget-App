// src/components/Header/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <a
    className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 hover:bg-gray-300"
    

      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </a>
  );
};

export default LogoutButton;