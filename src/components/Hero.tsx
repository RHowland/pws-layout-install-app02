// Component Name: Hero

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex items-center justify-between flex-1">
      <div className="flex flex-col items-start gap-2">
        <div>
          <h1 className="text-6xl font-bold">
            Discover the Power of Our Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Transform your business with our innovative solutions.
          </p>
        </div>
        <div className="flex space-x-6 mt-6">
          <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-md">
            Learn More
          </button>
          <Link href="/" className="px-6 py-3 text-lg font-medium ">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="w-full max-w-xl">
        <Image
          src="/Happy Couple.jpg"
          alt="Placeholder"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
    </main>
  );
};

export default Hero;

/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : Hero.tsx
 * Component Name : Hero
 * Component Type : Hero Component
 * Date Created   : 30 June 2024
 * Dev Name       : Nihar Hegde
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  : This component is used to render the Hero component.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  : This component renders the Hero component.
 *
 * ------------------------------
 * Footnote Comments: None  (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Input Comments:  None   (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Output Comments:  None  (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  :    No
 *
 */
