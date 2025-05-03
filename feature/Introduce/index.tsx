import { Image } from "@mantine/core";
import React from "react";

export default function Introduce() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/images/about.png"
                  alt="About Viet Model"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 md:pl-10">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-[#406c88]">
                  We Are Viet Model
                </h2>
              </div>
              <p className="text-[18px] text-[#406c88] mb-6">
                Truthfully and emotionally, scale models are the miniature of
                the real life that act as the shortest bridge sticking designs
                with future building particularly and vividly. Understanding
                that thoroughly, Viet Model Limited Company (MohinhViet) never
                stops endeavour to bring customers not only a merely
                architectural scale model but a visual illustration of the
                design concept in the most persuasive manner...
              </p>
              <a
                href="/about"
                className="inline-block bg-[#bb8d38] text-white px-6 py-2 rounded-[45px] hover:opacity-90 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
