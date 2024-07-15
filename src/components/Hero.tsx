// Component Name: Hero

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ILayouts } from "./custom-ui/layout/grid/interfaces/grid";
import Lo1R2C_d01c01 from "./custom-ui/Lo1R2C_d01c01/Lo1R2C_d01c01";

const Hero = () => {
  const layouts: ILayouts = {
    lg: [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      {
        i: "b",
        x: 1,
        y: 0,
        w: 1,
        h: 1,
      },
    ],
  };
  return (
    <section className="">
      <div className="container mx-auto px-1 py-16 md:py-24">
        <Lo1R2C_d01c01
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={500}
        >
          <div key={"a"} className="flex items-center">
            <div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-left">
                Discover the Power of Our Services
              </h1>
              <p className="text-md lg:text-lg md:text-lg text-gray-600 mb-8 text-left">
                Transform your business with our innovative solutions.
              </p>

              <div className="flex space-x-4">
                <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-md">
                  Learn More
                </button>
                <Link href="/" className="px-6 py-3 text-lg font-medium ">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          <div key={"b"}>
            <div className="relative h-80 md:h-auto">
              <Image
                src="/Happy Couple.jpg"
                alt="Placeholder"
                width={800}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full md:h-[56vh] xl:h-[70vh] max-h-[550px]"
              />
            </div>
          </div>
        </Lo1R2C_d01c01>
      </div>
    </section>
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
