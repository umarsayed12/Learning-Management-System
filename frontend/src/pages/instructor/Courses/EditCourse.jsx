"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUpload } from "@/components/ui/file-uploads";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetInstructorCourseQuery,
  useUpdateInstructorCourseMutation,
  useUploadPhotoMutation,
} from "@/slices/api/courseApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { CourseCategories } from "@/lib/constants";
import LoadingScreen from "@/components/LoadingScreen";
export default function EditCourse() {
  const { courseId } = useParams();
  const [
    updateInstructorCourse,
    {
      data: updateCourseData,
      error: updateCourseError,
      isLoading: updateCourseIsLoading,
      isError: updateCourseIsError,
    },
  ] = useUpdateInstructorCourseMutation();
  const {
    data: CoursesData,
    isSuccess: CoursesDataIsSuccess,
    isLoading: CourseDataIsLoading,
    refetch,
  } = useGetInstructorCourseQuery();
  console.log(CoursesData);

  const [
    uploadPhoto,
    {
      data: imageData,
      isLoading: imageUploadIsLoading,
      error: imageUploadError,
      isSuccess: imageUploadIsSuccess,
    },
  ] = useUploadPhotoMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      subTitle: "",
      description: "",
      category: "",
      level: "",
      price: "",
      publish: "",
      thumbnail: null,
    },
  });
  useEffect(() => {
    if (CoursesDataIsSuccess && CoursesData?.courses?.length) {
      const course = CoursesData.courses.find((c) => c._id === courseId);
      if (course) {
        reset({
          title: course.courseTitle || "",
          subTitle: course.subTitle || "",
          description: course.description || "",
          category: course.category || "",
          level: course.courseLevel || "",
          price: course.coursePrice || "",
          publish: course.isPublished ? "Yes" : "No",
          thumbnail: course.courseThumbnail || null,
        });
      }
    }
  }, [CoursesDataIsSuccess, CoursesData, courseId, reset]);

  const file = watch("thumbnail");
  const [submitLoading, isSubmitLoading] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const onSubmit = async (data) => {
    isSubmitLoading(true);
    try {
      let thumbnail = data.thumbnail;
      if (thumbnail && typeof thumbnail[0] === "object") {
        const file = thumbnail[0];
        const imageCloudUrl = await uploadPhoto({ image: file }).unwrap();
        thumbnail = imageCloudUrl.photoUrl;
      } else {
        thumbnail = file;
      }

      await updateInstructorCourse({
        id: courseId,
        formData: {
          courseTitle: data.title,
          subTitle: data.subTitle,
          description: data.description,
          category: data.category,
          courseLevel: data.level,
          coursePrice: Number(data.price),
          courseThumbnail: thumbnail,
          isPublished: data.publish === "Yes" ? true : false,
        },
      });
      toast.success("Course Updated Successfully!");
      isSubmitLoading(false);
      reset();
      setFileInputKey(Date.now());
      navigate("/admin/courses");
    } catch (error) {
      toast.error("Failed to update course.");
      isSubmitLoading(false);
    }
  };

  const handleFileUpload = (newFile) => {
    setValue("thumbnail", newFile);
  };
  if (CourseDataIsLoading) return <LoadingScreen />;
  return (
    <div className="shadow-input mx-auto md:w-[90%] p-4 pt-16 rounded-none md:rounded-2xl md:p-20">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Edit Course
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Edit the details of the course
      </p>

      <form
        className="my-8 flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Mern Stack"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="subTitle">Sub Title</Label>
            <Input
              id="subTitle"
              placeholder="This is a MERN stack course..."
              {...register("subTitle")}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="description">Description *</Label>
          <textarea
            id="description"
            placeholder="Description goes here..."
            {...register("description", { required: true })}
            className="flex  h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </LabelInputContainer>
        <div className="flex justify-center items-center">
          <LabelInputContainer>
            <Label>Category *</Label>
            <CustomSelect
              options={CourseCategories}
              name="category"
              {...register("category", { required: true })}
              setValue={setValue}
              watch={watch}
              required
            />
            {errors.category && (
              <span className="text-red-500 text-sm">Category is required</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label>Course Level</Label>
            <CustomSelect
              options={["Beginner", "Intermediate", "Advanced"]}
              name="level"
              setValue={setValue}
              watch={watch}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="price">Price (in Rupees) *</Label>
          <Input
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">Price is required</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label>Publish</Label>
          <CustomSelect
            options={["Yes", "No"]}
            name="publish"
            setValue={setValue}
            watch={watch}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="thumbnail">Upload Thumbnail *</Label>
          <div className="flex flex-col justify-center items-center">
            {typeof file === "string" && (
              <img
                src={file}
                alt="Current Thumbnail"
                className="h-32 object-contain mt-2"
              />
            )}
            <FileUpload
              key={fileInputKey}
              {...register("thumbnail", { required: true })}
              onChange={handleFileUpload}
            />
          </div>
          {errors.thumbnail && (
            <span className="text-red-500 text-sm">Thumbnail is required</span>
          )}
        </LabelInputContainer>

        {!submitLoading && (
          <div className="w-full gap-2 flex flex-col-reverse sm:flex-row justify-center items-center">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/courses")}
              className="group/btn relative block h-10 max-w-md w-full rounded-md "
              type="button"
            >
              Cancel
              <BottomGradient />
            </Button>
            <Button
              className="group/btn relative block h-10 max-w-md w-full rounded-md "
              type="submit"
            >
              Save Changes &rarr;
              <BottomGradient />
            </Button>
          </div>
        )}
        {submitLoading && (
          <div className="w-full gap-2 flex flex-col-reverse sm:flex-row justify-center items-center">
            <Button
              disabled
              className="group/btn relative flex justify-center items-center h-10 max-w-md w-full rounded-md "
              type="submit"
            >
              <Loader2 className=" h-4 w-4 animate-spin" />
              Saving...
              <BottomGradient />
            </Button>
          </div>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

function CustomSelect({ options, name, setValue, required, watch }) {
  const value = watch(name);
  return (
    <Select
      value={value}
      onValueChange={(val) => setValue(name, val, { shouldValidate: required })}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem className="cursor-pointer" key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
