// pages/AllCourses.jsx
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Link } from "react-router-dom";

function MyLearning() {
  const myLearning = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React with hands-on examples.",
      image:
        "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png",
      price: "999",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description:
        "Deep dive into JS concepts like closures, scope, and async.",
      image:
        "https://i.ytimg.com/vi/R9I85RhI7Cg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8Bg9eMniK_e6OEw6pHd8FQIULsw",
      price: "1199",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 3,
      title: "Next.js Mastery",
      description: "Build full-stack apps using Next.js.",
      image: "",
      price: "1499",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 4,
      title: "Tailwind CSS Crash Course",
      description: "Style apps rapidly with utility-first CSS.",
      image: "",
      price: "799",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
  ];

  return (
    <div className="p-16 pt-16 min-h-screen">
      <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
        My Courses
      </h1>
      {myLearning.length ? (
        <HoverEffect items={myLearning} className="" />
      ) : (
        <div className="h-full w-full flex items-center justify-center gap-1">
          <p className="">You are not enrolled in any course yet. Browse </p>
          <Link
            to="/all-courses"
            className="text-custom-blue mt-[0.5px] underline"
          >
            Courses
          </Link>
          .
        </div>
      )}
    </div>
  );
}

export default MyLearning;
