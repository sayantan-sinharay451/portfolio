"use client";
import { Navbar } from "@/components/site/Navbar"
import { useState } from "react";
import "@/styles/globals.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {children}
    </>
  )
}