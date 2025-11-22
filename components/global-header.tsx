"use client";

import HomeHeader from "@/components/hero-section/header";
import { useState } from "react";

export default function GlobalHeader() {
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
  
  return <HomeHeader localTheme={localTheme} setLocalTheme={setLocalTheme} />;
}
