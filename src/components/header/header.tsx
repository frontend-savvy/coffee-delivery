"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Wrapper from "../wrapper";
import Logo from "./logo";
import MobileMenuToggle from "./mobile-menu-toggle";
import MobileNav from "./mobile-nav";
import NavGroup from "./nav-group";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="py-8 bg-background">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex gap-6 items-center">
            <NavGroup />
            <MobileMenuToggle onToggle={handleToggle} />
          </div>
        </div>
      </Wrapper>
      <AnimatePresence>
        {isOpen && <MobileNav onClose={handleClose} />}
      </AnimatePresence>
    </header>
  );
}
