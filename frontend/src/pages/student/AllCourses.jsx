// pages/AllCourses.jsx
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function AllCourses() {
  const courses = [
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
    {
      id: 5,
      title: "Node.js & Express",
      description: "Backend development with Node and Express.",
      image: "",
      price: "999",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 6,
      title: "MongoDB Essentials",
      description: "Understand NoSQL databases using MongoDB.",
      image: "",
      price: "899",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 7,
      title: "TypeScript for React Devs",
      description: "Type-safe React development using TS.",
      image: "",
      price: "1099",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 8,
      title: "API Development",
      description: "Design and build RESTful APIs efficiently.",
      image: "",
      price: "899",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 9,
      title: "Git & GitHub Masterclass",
      description: "Master version control and team collaboration.",
      image: "",
      price: "599",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
    {
      id: 10,
      title: "Fullstack MERN Bootcamp",
      description: "Complete web dev from frontend to backend.",
      image: "",
      price: "1999",
      author: "Umar Khursheed",
      avatar: "Umar_Photo.png",
    },
  ];

  return (
    <div className="p-16 pt-16">
      <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
        All Courses
      </h1>
      <HoverEffect items={courses} className="" />
    </div>
  );
}

export default AllCourses;
