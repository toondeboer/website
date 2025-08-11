import React, { PropsWithChildren } from "react";
import { useAuth } from "react-oidc-context";
import { User } from "oidc-client-ts";
import { jwtDecode } from "jwt-decode";

export const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  const signOutRedirect = () => {
    sessionStorage.clear();
    const clientId = "3o34bbl92faeo9ljo11eebtim2";
    const logoutUri = `${process.env.NEXT_PUBLIC_BASE_URL}/callback`;
    const cognitoDomain =
      "https://us-east-1licb4lgde.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    const user: User | null | undefined = auth.user;

    console.log(jwtDecode(user?.access_token ?? ""));
    console.log(jwtDecode(user?.access_token ?? ""));
    console.log(user);

    return (
      <div>
        <h1>Welcome, {user?.profile.nickname}!</h1>
        <button onClick={() => signOutRedirect()}>Logout</button>
        {children}
      </div>
    );
  }

  return <button onClick={() => auth.signinRedirect()}>Login</button>;
};
