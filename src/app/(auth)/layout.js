"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// navigating through the links
const AuthWithLayout = ({ children }) => {
  const pathname = usePathname(); //to get the active link
  const navLinks = [
    {
      name: "Register",
      pathLink: "/register",
    },
    {
      name: "Login",
      pathLink: "/login",
    },
    {
      name: "Forget-password",
      pathLink: "/forget-password",
    },
  ];
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.pathLink);
        return (
          <Link className={isActive ? "Active" : ""} href={link.pathLink} key={link.name} style={{color : isActive ? "blue" : "black"}}>
            {link.name}
          </Link>
        );
      })}
      {children}
      <h1>Auth with Layout</h1>
    </div>
  );
};

export default AuthWithLayout;
