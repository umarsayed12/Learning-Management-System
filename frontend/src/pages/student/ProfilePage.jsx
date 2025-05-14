import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  const enrolledCourses = [
    // {
    //   id: 1,
    //   title: "React for Beginners",
    //   description: "Learn the basics of React with hands-on examples.",
    //   image:
    //     "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png",
    //   price: "999",
    //   author: "Umar Khursheed",
    //   avatar: "Umar_Photo.png",
    // },
    // {
    //   id: 2,
    //   title: "Advanced JavaScript",
    //   description:
    //     "Deep dive into JS concepts like closures, scope, and async.",
    //   image:
    //     "https://i.ytimg.com/vi/R9I85RhI7Cg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8Bg9eMniK_e6OEw6pHd8FQIULsw",
    //   price: "1199",
    //   author: "Umar Khursheed",
    //   avatar: "Umar_Photo.png",
    // },
    // {
    //   id: 3,
    //   title: "Next.js Mastery",
    //   description: "Build full-stack apps using Next.js.",
    //   image: "",
    //   price: "1499",
    //   author: "Umar Khursheed",
    //   avatar: "Umar_Photo.png",
    // },
    // {
    //   id: 4,
    //   title: "Tailwind CSS Crash Course",
    //   description: "Style apps rapidly with utility-first CSS.",
    //   image: "",
    //   price: "799",
    //   author: "Umar Khursheed",
    //   avatar: "Umar_Photo.png",
    // },
  ];
  const [name, setname] = useState("Umar Khursheed");
  const [email, setemail] = useState("umarkhursheed979@gmail.com");
  const [role, setrole] = useState("Student");
  return (
    <div className="p-16 pt-16 w-full min-h-screen">
      <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
        Profile
      </h1>
      <div className="flex flex-col md:flex-row items-center p-6 pb-10 gap-6">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
          <img
            src="Umar_Photo.png"
            alt="Profile Photo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div>Name : {name}</div>
          <div>Email : {email}</div>
          <div>Role : {role}</div>
          <div></div>
          <Edit name={name} />
        </div>
      </div>
      <div>
        <h2 className="p-6 pt-8 pb-0 text-xl border-t-2 text-center md:text-start font-bold">
          Enrolled Courses
        </h2>
        <div className="w-full">
          {enrolledCourses.length ? (
            <HoverEffect items={enrolledCourses} />
          ) : (
            <div className="h-full w-full flex items-center justify-center gap-1">
              <p className="">
                You are not enrolled in any course yet. Browse{" "}
              </p>
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
      </div>
    </div>
  );
}

export default ProfilePage;

export const Edit = ({ name }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Photo
            </Label>
            <Input
              type="file"
              accept="image/*"
              id="profile"
              className="col-span-3 cursor-pointer"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
