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
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    id: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    id: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function Courses() {
  const navigate = useNavigate();
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
                  <TableHead className="w-[100px]">CourseId</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.id}</TableCell>
                    <TableCell>{course.paymentStatus}</TableCell>
                    <TableCell>{course.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {course.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </>
        ) : (
          <>
            You haven't created any course yet.{" "}
            <>
              <Button>Create Course</Button>
            </>
          </>
        )}
      </div>
    </div>
  );
}

export default Courses;
