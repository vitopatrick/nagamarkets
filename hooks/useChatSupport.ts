"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/p1edcuxpk9cxwyqsljz34n49ko87mlpm.js";
    document.body.appendChild(script);
  }, []);
};
