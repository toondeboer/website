"use client"; // Required for using hooks

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";

const CallbackPage: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.error) {
      console.error("OIDC Error:", auth.error);
    }
    router.push("/portfolio-tracker-app");
  }, [auth, router]);

  return auth.isLoading ? <div>Loading...</div> : <div>Redirecting...</div>;
};

export default CallbackPage;
