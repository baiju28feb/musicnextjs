"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href={"/Courses"}>
        <MenuItem setActive={setActive} active={active} item="Courses">
        </MenuItem>
        </Link>
        <Link href={"/About"}>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        </Link>
        <Link href={"/ContactUs"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
        <Link href={"/Gallery"}>
        <MenuItem setActive={setActive} active={active} item="Gallery">
        </MenuItem>
        </Link>
        </Menu>
    </div>
  )
}

export default Navbar