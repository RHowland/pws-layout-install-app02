// Component Name: Footer

import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

// Footnote 1
const socialMediaLinks = [
  { name: "FacebookLogo", src: "/icons8-facebook-48.png" },
  { name: "InstagramLogo", src: "/icons8-instagram-48.png" },
  { name: "InstagramLogo", src: "/icons8-linkedin-48.png" },
  { name: "LinkedInLogo", src: "/icons8-youtube-48.png" },
];

// Footnote 2
const Footer = () => {
  return (
    <footer className="px-24 py-16 border-green-600 border-t-2 max-h-24">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center">
          <Image src="/SimpleLogo.jpg" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex space-x-4">
          {/* FootNote 3 */}
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
        <div className="flex space-x-4">
          {socialMediaLinks.map((link) => (
            <Link key={link.name} href="/">
              <Image src={link.src} alt={link.name} width={30} height={30} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : Footer.tsx
 * Component Name : Footer
 * Component Type : Footer Component
 * Date Created   : 30 June 2024
 * Dev Name       : Nihar Hegde
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  :  To render a footer component which is visible in all pages.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :  This component renders a footer component.
 *
 * ------------------------------
 * Footnote Comments:   (Enter "none" if you have no comments)
 * Footnote 1
 * This is used to render the social media icons. This could be in a separate file if it is reused multiple times.
 * but for now it is not reused anywhere else.
 *
 * Footnote 2
 * This will render the footer component
 *
 * Footnote 3
 * The NavLinks are stored in a different file (utils/data.ts) and imported here because it is used in multiple components..
 *
 * ------------------------------
 * Input Comments: None     (Enter "none" if you have no comments)
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
