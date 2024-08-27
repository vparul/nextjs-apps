"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import classes from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const currentPath = usePathname();

  return (
    <Link
      href={`${href}`}
      className={
        currentPath.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : `${classes.link}`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
