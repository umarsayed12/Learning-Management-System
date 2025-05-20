import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetInstructorCourseQuery } from "@/slices/api/courseApi";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetInstructorCourseQuery();
  const [totalAmount, setTotalAmount] = useState(0);

  const courses = data?.courses;
  useEffect(() => {
    refetch();
    if (courses?.length) {
      const total = courses.reduce(
        (acc, course) => acc + Number(course.coursePrice || 0),
        0
      );
      setTotalAmount(total);
    }
  }, [courses]);
  if (isLoading) return <LoadingScreen />;
  return (
    <div className="w-full p-4 md:p-16 md:pl-20 pt-16 min-h-screen">
      <h1 className="text-3xl p-5 border-b-2 text-center lg:text-start font-zilla font-bold text-blueDark mb-8">
        Courses
      </h1>
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        {courses.length ? (
          <>
            <div className="w-full flex justify-end">
              <Button onClick={() => navigate("/admin/add-course")}>
                Create new Course
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">S.No.</TableHead>
                  <TableHead className="text-center">Title</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Amount</TableHead>
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course, idx) => (
                  <TableRow key={course?._id}>
                    <TableCell className="text-center">{idx + 1}</TableCell>
                    <TableCell className="text-center">
                      {course.courseTitle}
                    </TableCell>
                    <TableCell className="flex justify-center">
                      {course.isPublished && (
                        <div
                          className={`w-20 text-black text-center rounded-xl bg-green-500`}
                        >
                          Published
                        </div>
                      )}
                      {!course.isPublished && (
                        <div
                          className={`w-20 text-black text-center rounded-xl bg-yellow-500`}
                        >
                          Draft
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      ₹{course.coursePrice}
                    </TableCell>
                    <TableCell className="flex justify-center">
                      <Button
                        onClick={() => navigate(`${course._id}`)}
                        variant="ghost"
                      >
                        <Edit />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell className="pl-[4%] text-start" colSpan={3}>
                    Total Price
                  </TableCell>
                  <TableCell className="text-center">₹{totalAmount}</TableCell>
                  <TableCell className="text-center"></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </>
        ) : (
          <>
            You haven't created any course yet.{" "}
            <>
              <Button onClick={() => navigate("/admin/add-course")}>
                Create Course
              </Button>
            </>
          </>
        )}
      </div>
    </div>
  );
}

export default Courses;
