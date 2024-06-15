import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button onClick={handleLogin} className="button_login bg-white text-black border border-black rounded-full px-3 py-2 flex items-center transition-colors duration-300 hover:bg-black hover:text-white">
      Iniciar sesión
    </button>
  );
};