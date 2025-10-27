import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* 404 Illustration */}
      <Image
        src="/NotFound.svg"
        alt="404"
        width={400}
        height={400}
        className="mb-6 animate-bounce-slow"
      />

      {/* 404 Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-2 tracking-wide">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-500 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
