import React from "react";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { BrandGuidelinesShowcase } from "../design-system";

export function BrandGuidelinesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF4FB]">
      <DeskmeritHeader />
      <main className="flex-1">
        <BrandGuidelinesShowcase />
      </main>
      <DeskmeritFooter />
    </div>
  );
}
