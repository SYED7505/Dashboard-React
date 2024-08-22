import Dashboard from "./components/Dashboard";
import FetchStudentDetails from "./components/FetchStudentDetails";
import StudentContextProvider from "./store/student-context-store";

function App() {
  return (
    <StudentContextProvider>
      <FetchStudentDetails />
      <Dashboard />
    </StudentContextProvider>
  );
}

export default App;
