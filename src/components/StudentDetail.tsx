import { useLocation, NavLink } from "react-router-dom";
const StudentDetail = () => {
  const location = useLocation();
  const student = location.state?.student;
  if (!student) return <h1>No student data available!!</h1>;
  return (
    <div className="m-4">
      <h1>{student.studentName}</h1>
      <p>Email: {student.emailID}</p>
      <p>Age: {student.studentAge}</p>
      {/* Render more details as needed */}
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default StudentDetail;
