export interface Student{
    studentName:String;
    studentAge:String;
    emailID:String;
}

export interface StudentContextType {
    studentList: Student[];
    addAllStudents: (students: Student[]) => void;
  }
  