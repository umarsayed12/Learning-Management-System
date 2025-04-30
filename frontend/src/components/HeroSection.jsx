import React from "react";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 lg:px-16">
      <div className="absolute inset-0 lg:hidden">
        <img
          src="/heroImage.png"
          alt="Hero"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white">
            What do you want to learn today?
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Empower your learning journey with our all-in-one LMS platform.
            Access interactive courses, track your progress, and achieve your
            educational goals—anytime, anywhere.
          </p>

          <form className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md sm:rounded-r-none focus:outline-none"
            />
            <button className="mt-2 sm:mt-0 sm:ml-0 px-6 py-3 bg-custom-blue text-white font-semibold rounded-md sm:rounded-l-none">
              Search
            </button>
          </form>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/heroImage2.png"
            alt="Hero Visual"
            className="w-full h-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
