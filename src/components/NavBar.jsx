"use client"
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem, NavbarMenu } from "@nextui-org/navbar";
import Link from "next/link";

import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Components",
    "Demos",
    "Support",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-neutral-950" height="80px" maxWidth="xl" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            <Link href="/" className="font-bold text-inherit text-xl">
                Quick
            </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/docs" className="text-white">
            Docs
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/docs" className="text-white">
            Components
          </Link>
        </NavbarItem>
        
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Demos
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Demos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Support
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu className="bg-neutral-950">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
