import React, { PropsWithChildren } from "react";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_liCB4LgDE",
  client_id: "3o34bbl92faeo9ljo11eebtim2",
  redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/callback`,
  response_type: "code",
  scope: "email openid profile",
};

export const CognitoAuthProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
};
