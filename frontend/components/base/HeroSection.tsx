import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center  px-6">
      {/* Image Section */}
      <div className="flex justify-center mb-8 animate-fadeIn">
        <Image
          src="/banner.svg"
          alt="hero"
          width={600}
          height={600}
          className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div className="text-center space-y-4 animate-slideUp">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Clash
        </h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto font-bold">
          Discover the better choice together
        </p>

        <Link 
        href="/login"
        className="mt-6 px-8 py-3 bg-linear-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
