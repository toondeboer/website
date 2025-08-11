"use client";

import React from "react";
import { Protected } from "@/src/auth/Protected";
import { PortfolioTrackerPage } from "@/src/portfolio-tracker/PortfolioTrackerPage";

export default function Page() {
  return (
    <>
      <Protected>
        <div>Welcome to the portfolio tracker app</div>
        <PortfolioTrackerPage />
      </Protected>
    </>
  );
}
