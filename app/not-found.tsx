import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <h1 className="text-4xl font-bold text-error mb-4">
        404 - Page Not Found
      </h1>

      <p className="text-secondarey/40 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-primary/80 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
