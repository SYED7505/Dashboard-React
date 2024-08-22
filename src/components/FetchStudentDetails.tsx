import axios from "axios";
import { useEffect, useContext } from "react";
import { StudentContext } from "../store/student-context-store";

const FetchStudentDetails = () => {
  const { addAllStudents } = useContext(StudentContext);
  useEffect(() => {
    axios.get("http://localhost:8000/all").then((res) => {
      const studentArray = res.data.students;
      addAllStudents(studentArray);
    });
  }, []);
  return <></>;
};

export default FetchStudentDetails;
