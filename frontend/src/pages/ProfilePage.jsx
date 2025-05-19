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
import { useLoadUserQuery, useUpdateUserMutation } from "@/slices/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function ProfilePage() {
  const { data, isLoading, refetch } = useLoadUserQuery();
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [
    updateUser,
    {
      data: updateUserData,
      isLoading: updateuserIsLoading,
      error,
      isSuccess,
      isError,
    },
  ] = useUpdateUserMutation();

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfileImage(file);
  };

  const handleUserUpdate = async () => {
    const formdata = new FormData();
    if (!name && !profileImage) return;
    if (name) formdata.append("name", name);
    if (profileImage) formdata.append("profileImage", profileImage);
    await updateUser(formdata);
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success(data.message || "Profile Updated Successfully.");
    }
    if (isError) {
      toast.error(error.message || "Some Error Occured. Please Try Again.");
    }
  }, [error, updateUserData, isSuccess, isError]);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return (
      <div className="p-16 pt-16 w-full min-h-screen">
        <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
          Profile
        </h1>
        <div className="flex flex-col md:flex-row items-center p-6 pb-10 gap-6 animate-pulse">
          <div className="w-[250px] h-[200px] overflow-hidden rounded-full bg-gray-300" />
          <div className="flex flex-col gap-4 p-4 w-full">
            <div className="h-4 w-1/2 bg-gray-300 rounded" /> {/* Name */}
            <div className="h-4 w-2/3 bg-gray-300 rounded" /> {/* Email */}
            <div className="h-4 w-1/3 bg-gray-300 rounded" /> {/* Role */}
            <div className="h-10 w-24 bg-gray-300 rounded" />{" "}
          </div>
        </div>
      </div>
    );
  }
  const user = data && data.user;
  // console.log(user);

  return (
    <div className="p-16 pt-16 w-full min-h-screen">
      <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
        Profile
      </h1>
      <div className="flex flex-col md:flex-row items-center p-6 pb-10 gap-6">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
          <img
            src={user?.imageUrl || "Umar_Photo.png"}
            alt="Profile Photo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div>Name : {user?.name}</div>
          <div>Email : {user?.email}</div>
          <div>
            Role : {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
          </div>
          <div></div>

          {/* Edit Profile */}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Photo
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    id="profile"
                    onChange={onChangeHandler}
                    className="col-span-3 cursor-pointer"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  disabled={updateuserIsLoading}
                  onClick={handleUserUpdate}
                  type="submit"
                >
                  {updateuserIsLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h2 className="p-6 pt-8 pb-0 text-xl border-t-2 text-center md:text-start font-bold">
          Enrolled Courses
        </h2>
        <div className="w-full">
          {user?.coursesEnrolled.length ? (
            <HoverEffect items={coursesEnrolled} />
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
