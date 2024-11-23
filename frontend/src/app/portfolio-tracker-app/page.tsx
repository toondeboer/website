"use client";

import React from "react";
import { Protected } from "@/src/auth/Protected";

export default function Page() {
  return (
    <>
      <Protected>
        <div>Welcome to the portfolio tracker app</div>
      </Protected>
    </>
  );
}
