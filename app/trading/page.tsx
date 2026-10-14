import type { Metadata } from "next";
import { TradingHome } from "@/components/trading/Home";

export const metadata: Metadata = {
  title: "Yesar Trading",
  description:
    "Yesar Trading sources, imports, and distributes essential goods across borders, backed by Yesar Group.",
};

export default function TradingPage() {
  return <TradingHome />;
}
