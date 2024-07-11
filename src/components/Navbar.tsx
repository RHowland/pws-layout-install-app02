// Component Name: Navbar

import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-24 py-6 flex gap-12 items-center justify-start">
      <Link href={"/"}>
        <Image src={"/SimpleLogo.jpg"} alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex gap-12">
        {/* FootNote 1 */}
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="hover:text-blue-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : Navbar.tsx
 * Component Name : Navbar
 * Component Type : Navbar Component
 * Date Created   : 30 June 2024
 * Dev Name       : Nihar Hegde
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  :  To render a navbar component which is visible in all pages.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :  This component renders a navbar component.
 *
 * ------------------------------
 * Footnote Comments: (Enter "none" if you have no comments)
 *  FootNote 1
 *  The NavLinks are stored in a different file (utils/data.ts) and imported here because it is used in multiple components..
 * ------------------------------
 * Input Comments:  None    (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Output Comments: None    (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : No
 *
 */
