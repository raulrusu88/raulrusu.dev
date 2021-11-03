import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
