import { useContext } from "react";
import { StudentContext } from "../store/student-context-store";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const { studentList } = useContext(StudentContext);
  return (
    <>
      <h1>Dashboard v1.0</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Email ID</th>
            <th>Student Age</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={Math.random()}>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => console.log("hii clicked")}
              >
                <NavLink
                  to="/student-detail"
                  state={{
                    student,
                  }}
                >
                  {student.studentName}
                </NavLink>
              </td>
              <td style={{ cursor: "pointer" }}>
                <NavLink
                  to="/student-detail"
                  state={{
                    student,
                  }}
                >
                  {student.emailID}
                </NavLink>
              </td>
              <td>{student.studentAge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
