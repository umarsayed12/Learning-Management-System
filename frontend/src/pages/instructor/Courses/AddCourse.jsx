"use client";
import React from "react";
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
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const file = watch("thumbnail");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleFileUpload = (newFile) => {
    setValue("thumbnail", newFile);
  };

  return (
    <div className="shadow-input mx-auto md:w-[90%] p-4 pt-16 rounded-none md:rounded-2xl md:p-20">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Create a Course
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Enter the details of the course
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
            className="flex h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
              options={["Development", "Design", "Marketing"]}
              name="category"
              {...register("category", { required: true })}
              setValue={setValue}
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
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="thumbnail">Upload Thumbnail *</Label>
          <div className="flex justify-center items-center">
            <FileUpload
              {...register("thumbnail", { required: true })}
              onChange={handleFileUpload}
            />
          </div>
          {errors.thumbnail && (
            <span className="text-red-500 text-sm">Thumbnail is required</span>
          )}
        </LabelInputContainer>

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
            Create Course &rarr;
            <BottomGradient />
          </Button>
        </div>

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

function CustomSelect({ options, name, setValue, required }) {
  return (
    <Select
      onValueChange={(value) =>
        setValue(name, value, { shouldValidate: required })
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
