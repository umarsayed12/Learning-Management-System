import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const COURSE_API = "http://localhost:3001/api/v1/course/";
export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: ({
        courseTitle,
        subTitle,
        description,
        category,
        courseLevel,
        coursePrice,
        courseThumbnail,
        isPublished,
      }) => ({
        url: "/",
        method: "POST",
        body: {
          courseTitle,
          subTitle,
          description,
          category,
          courseLevel,
          coursePrice,
          courseThumbnail,
          isPublished,
        },
      }),
    }),
    uploadPhoto: builder.mutation({
      query: ({ image }) => {
        const formData = new FormData();
        formData.append("thumbnailImage", image);
        return {
          url: "/upload-image",
          method: "POST",
          body: formData,
        };
      },
    }),
    getInstructorCourse: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateCourseMutation,
  useUploadPhotoMutation,
  useGetInstructorCourseQuery,
} = courseApi;
