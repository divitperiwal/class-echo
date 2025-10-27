"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.1),transparent)]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_600px,rgba(251,191,36,0.05),transparent)]" />
          
          {/* Content area */}
          <div className="relative">
            <div className="container mx-auto p-8">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}